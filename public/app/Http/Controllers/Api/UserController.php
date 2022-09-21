<?php

namespace App\Http\Controllers\Api;

use App\Enum\ProjectEnum;
use App\Helper\TextHelper;
use App\Http\Controllers\Api\Base\BaseApiController;
use App\Http\Requests\UserRequest;
use App\Mail\AdminForgotPassword;
use App\Models\AdminLog;
use App\Models\Language;
use App\Models\User;
use App\Models\WebContent;
use App\Models\WebContentLocale;
use GuzzleHttp\Client;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class UserController extends BaseApiController
{
    protected $model = User::class;
    protected $modelName = 'adminUsers';

    protected function checkDuplicateWithOldPassword($password, $id)
    {

        if (config('project.strict_password') &&
            User::isDuplicateWithOldPassword($password, $id)) {
            $this->apiStatusText['reset_password.duplicate_with_old_password'] = 'reset_password.duplicate_with_old_password';

            return false;
        }
        return true;
    }

    protected function loginViaSystem()
    {
        if (Auth::attempt(['email' => $this->validated['email'], 'password' => $this->validated['password']])) {
            return $result = Auth::user();
        }
        return null;
    }

    protected function loginViaSocial()
    {

        if (isset($this->validated['fbAccessToken'])) {
            $this->getFBReview($this->validated['fbAccessToken']);
        }

        return User::where('email', $this->validated['email'])->first();
    }

    public function login(UserRequest $request)
    {
        $this->handleValidate($request);

        if (isset($this->validated['channel'])) {
            $result = $this->loginViaSocial();
        } else {
            $result = $this->loginViaSystem();
        }

        if (!empty($result)) {

            if ($result->enable === 0) {

                $this->apiStatusText['login.account_lock'] = 'Account Lock';
                AdminLog::log('Login', 'Login Fail', $this->validated['email']);
                return $this->send();
            }

            $this->apiResult['user_data'] = $result;
            $result->last_login = date(config('project.log_date'));
            $result->save();

            $accessToken = $result->createToken('authToken')->accessToken;
            $this->apiResult['accessToken'] = $accessToken;

            AdminLog::log('Login', 'Login success', $result->first_name . ' ' . $result->last_name, $result->id);

            if (config('project.strict_password') &&
                Carbon::parse($result->password_expire)->diffInSeconds(Carbon::now()) < 0) {
                $this->apiResult['password_expire'] = true;
                $this->apiStatusText['login.login_expired'] = 'login.login_expired';
            }

            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['login.login_success'] = 'login.login_success';

        } else {
            $this->apiStatusText['login.login_error'] = 'login.login_error';
            AdminLog::log('Login', 'Login Fail', $this->validated['email']);
        }
        return $this->send();
    }

    public function processForgot(UserRequest $request)
    {
        $this->handleValidate($request);

        $reset_result = User::processForgot($this->validated['email']);

        if ($reset_result !== false) {

            try {
                if (TextHelper::isEmail($reset_result->email)) {
                    Mail::to([[
                        'email' => $reset_result->email,
                        'name' => "{$reset_result->first_name} {$reset_result->last_name}",
                    ]])->send(new AdminForgotPassword($reset_result));
                    $this->apiStatus = self::SUCCESS;
                    $this->apiStatusText["login.forgot.success"] = self::SUCCESS;
                }

            } catch (\Exception $ex) {
                $this->apiStatusText["error_message.default"] = self::ERROR;
                AdminLog::log($this->modelName, "Process Forgot {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());
            }
        } else {
            $this->apiStatusText ["login.forgot.email_not_registered"] = "login.forgot.email_not_registered";
        }

        AdminLog::log('forgot password', 'forgot password', $this->validated['email']);

        return $this->send();
    }

    public function getUserByToken(UserRequest $request)
    {
        $this->handleValidate($request);
        try {
            if ($result = User::where('token', $this->validated['token'])->first()) {
                $this->apiResult = $result->id;
                $this->apiStatus = self::SUCCESS;
                $this->apiStatusText['global.success'] = self::SUCCESS;
            } else {
                $this->apiStatusText['error_message.default'] = self::ERROR;
            }
        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Get User By Token {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }
        return $this->send();
    }

    public function resetPassword(UserRequest $request)
    {
        $this->handleValidate($request);
        if (!$this->checkDuplicateWithOldPassword($this->validated['password'], $this->validated['id'])) {
            return $this->send();
        }

        return parent::saveAction();
    }

    public function save(UserRequest $request)
    {
        $this->handleValidate($request);

        if (isset($this->validated['password'])
            && !$this->checkDuplicateWithOldPassword($this->validated['password'], $this->validated['id'])) {
            return $this->send();
        }

        return parent::saveAction();
    }

    public function changePassword(UserRequest $request)
    {
        $this->handleValidate($request);
        $adminUser = User::find($this->validated['id']);

        if (!Hash::check($this->validated['old_password'], $adminUser->password)) {
            $this->apiStatusText['error_message.wrong_password'] = 'Wrong Old Password';
            return $this->send();
        }

        if (isset($this->validated['password'])
            && !$this->checkDuplicateWithOldPassword($this->validated['password'], $this->validated['id'])) {
            return $this->send();
        }
        return parent::saveAction();
    }

    public function getAll()
    {
        try {
            $this->apiResult = User::where("email", "!=", 'tomojung@gmail.com')->get();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Get All {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();
    }

    public function setEnable(UserRequest $request)
    {
        $this->handleValidate($request);
        return $this->handleAction('enable');
    }

    public function delete(UserRequest $request)
    {
        $this->handleValidate($request);
        return $this->deleteAction();
    }


    protected function getFBReview($fbAccessToken)
    {

        try {
            $client = new Client();

            $response = $client->request('GET', "https://graph.facebook.com/714883198577339?fields=access_token&access_token=$fbAccessToken");
            $accessTokenResult = json_decode($response->getBody()->getContents(), true);

            $response = $client->request('GET', "https://graph.facebook.com/v9.0/714883198577339/ratings?fields=review_text%2Ccreated_time%2Copen_graph_story%2Crating%2Crecommendation_type%2Creviewer%2Chas_review&access_token={$accessTokenResult['access_token']}");
            $fb_result = json_decode($response->getBody()->getContents(), true);

            $allLanguage = Language::all();

            foreach ($fb_result["data"] as $k => $v) {

                $review = WebContent::where('custom_input_1', $v['open_graph_story']['id'])->first();

                if ($review || !$v["has_review"]) {
                    continue;
                }

                $webContent = WebContent::create([
                    'custom_input_1' => $v['open_graph_story']['id'],
                    'action_link' => @$v['rating'],
                    'enable' => 0,
                    'type_id' => ProjectEnum::WEB_CONTENT_REVIEW
                ]);

                foreach ($allLanguage as $v1) {

                    WebContentLocale::updateOrCreate(
                        [
                            'locale' => $v1->code,
                            'web_content_id' => $webContent->id
                        ],
                        [
                            'title' => "new review",
                            'sub_title' => $v['review_text']
                        ]);
                }
            }

            AdminLog::log($this->modelName, "Get FB Review Success", $this->currentUser, $this->currentUserId, $this->validated);
        } catch (\Exception $ex) {

            AdminLog::log($this->modelName, "Get FB Review Error", $this->currentUser, $this->currentUserId, $ex->getMessage());
        }

    }
}

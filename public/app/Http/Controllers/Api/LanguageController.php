<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;
use App\Http\Requests\LanguageRequest;
use App\Models\AdminLog;
use App\Models\Language;

class LanguageController extends BaseApiController
{
    protected $model = Language::class;
    protected $modelName = 'Language';

    public function getAll(LanguageRequest $request)
    {
        $this->handleValidate($request);

        $this->apiResult = Language::where('application', $this->validated['application'])->orderBy('id')->get();
        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['global.save_success'] = self::SUCCESS;

        return $this->send();
    }

    public function setEnable(LanguageRequest $request)
    {
        $this->handleValidate($request);
        return $this->handleAction('enable');
    }

    public function setDefault(LanguageRequest $request)
    {
        $this->handleValidate($request);

        try {

            Language::where('application', $this->validated['application'])->update(['default' => 0, 'publish' => 0]);
            Language::where(Language::KeyName(), $this->validated['id'])->update(['default' => 1, 'enable' => 1]);

            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

            AdminLog::log($this->modelName,
                "Change default {$this->modelName} Success",
                $this->currentUser,
                $this->currentUserId,
                "Change default {$this->validated['id']} status to default");
        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Change default {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();
    }

    public function publishAll(LanguageRequest $request)
    {
        $this->handleValidate($request);

        try {
            $allLanguage = Language::where('application', $this->validated['application'])->get();
            $arr = [];
            foreach ($allLanguage as $v) {
                $this->apiResult['publish'][] = Language::publish($v->id);
                $arr[] = $v->id;
            }

            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.publish_success'] = self::SUCCESS;
            AdminLog::log($this->modelName, "Publish {$this->modelName} Success", $this->currentUser, $this->currentUserId, $arr);
        } catch (\Exception $exception) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $exception->getMessage();
            AdminLog::log($this->modelName, "Publish {$this->modelName} Error", $this->currentUser, $this->currentUserId, $exception->getMessage());
        }
        return $this->send();
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;

use App\Http\Requests\ContactusRequest;
use App\Mail\ContactUsEmail;
use App\Models\AdminLog;
use App\Models\Contactus;
use App\Models\Setting;
use App\Models\WebContent;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;

class ContactusController extends BaseApiController
{
    protected $model = Contactus::class;
    protected $modelName = 'Contact us';

    public function getAll()
    {
        try {
            $this->apiResult = Contactus::all();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Get All {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();
    }

    public function delete(ContactusRequest $request)
    {
        $this->handleValidate($request);
        return $this->deleteAction();
    }

    public function getLatestContact(){
        try {
            $result = Contactus::whereDate('created_at','>=', Carbon::now()->subDays(7));

            $this->apiResult = $result->get();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Get All {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();
    }
}

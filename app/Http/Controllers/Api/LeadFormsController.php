<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;

use App\Http\Requests\LeadFormsRequest;
use App\Mail\ContactUsEmail;
use App\Models\AdminLog;
use App\Models\Contactus;
use App\Models\LeadForms;
use App\Models\Setting;
use App\Models\WebContent;
use App\Models\WebContentLocale;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;

class LeadFormsController extends BaseApiController
{
    protected $model = LeadForms::class;
    protected $modelName = 'Lead form';

    public function getAll()
    {
        try {
            $this->apiResult = LeadForms::with('product')->get();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Get All {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();
    }


    public function getProduct(LeadFormsRequest $request)
    {
        $this->handleValidate($request);
        try {
            $this->apiResult = WebContentLocale::on('live')
                ->with('leadform')
                ->where('locale',$this->validated['locale'])
                ->whereHas('leadform')->get();
//            dd($this->apiResult);
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Get All {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();
    }

    public function delete(LeadFormsRequest $request)
    {
        $this->handleValidate($request);
        return $this->deleteAction();
    }

    public function getLatestLeadForm(){
        try {
            $result = LeadForms::whereDate('created_at','>=', Carbon::now()->subDays(7));

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

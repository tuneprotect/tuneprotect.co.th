<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;
use App\Http\Requests\SettingRequest;
use App\Models\AdminLog;
use App\Models\Setting;

class SettingController extends BaseApiController
{
    protected $model = Setting::class;
    protected $modelName = 'settings';

    public function getAll()
    {


        $const = Setting::getConstants();
        $fronDB = Setting::whereIn('id', $const)->get();

        foreach ($const as $k => $v) {
            $this->apiResult[$k] = array('id' => $k, 'value' => '', 'publish' => 0);
        }

        foreach ($fronDB as $k => $v) {
            $this->apiResult[$v->id] = array('id' => $v->id, 'value' => $v->value, 'publish' => $v->publish);
        }

        if (!empty($this->api_result)) {
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.success'] = self::SUCCESS;
        }

        return $this->send();
    }

    public function save(SettingRequest $request)
    {
        $this->handleValidate($request);
        if (!empty($this->validated['changed'])) {
            foreach ($this->validated['changed'] as $k => $v) {
                try {
                    $data = ['id' => $k, 'value' => $v, 'publish' => false];
                    Setting::replace($data);
                    $this->apiStatus = self::SUCCESS;
                    $this->apiStatusText['global.save_success'] = self::SUCCESS;

                    AdminLog::log($this->modelName, "Save {$this->modelName} Success", $this->currentUser, $this->currentUserId, $data);
                } catch (\Exception $exception) {
                    $this->apiStatusText['error_message.default'] = self::ERROR;
                    $this->apiResult['description'] = $exception->getMessage();
                    AdminLog::log($this->modelName, "Save {$this->modelName} Error", $this->currentUser, $this->currentUserId, $exception->getMessage());
                }
            }
        }
        return $this->send();
    }

    public function publish(SettingRequest $request)
    {
        $this->handleValidate($request);
        try {

            $arr = [];

            if ($this->validated['id'] === 'all') {
                $all = Setting::where('publish', 0)->get();

                foreach ($all as $v) {
                    Setting::publish($v->id);
                    $arr[] = $v->id;
                }
            } else {
                Setting::publish($this->validated['id']);
                $arr[] = $this->validated['id'];
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

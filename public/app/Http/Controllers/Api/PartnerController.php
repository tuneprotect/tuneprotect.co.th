<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;
use App\Http\Requests\PartnerRequest;
use App\Http\Requests\WebContentRequest;
use App\Models\AdminLog;
use App\Models\Partner;
use App\Models\PartnerLocale;


class PartnerController extends BaseApiController
{
    protected $model = Partner::class;
    protected $modelLocale = PartnerLocale::class;
    protected $modelName = 'Partner';

    protected function getItem($id = '', $type_id = '')
    {
        if (!empty($id)) {
            $this->apiResult = $this->model::where('id', $id)->with('locales')->firstOrNew();
        } else {
            $this->apiResult = $this->model::where('type_id', $type_id)->with('locales')->firstOrNew();
        }
    }

    public function getDetail(PartnerRequest $request)
    {
        $this->handleValidate($request);
        try {
            $this->getItem(@$this->validated['id'], @$this->validated['type_id']);
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.success'] = self::SUCCESS;
        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR . ' ' . $ex->getMessage();
        }

        return $this->send();
    }

    public function save(PartnerRequest $request)
    {
        $this->handleValidate($request);
        try {

            /* update main */
            if (!empty($this->validated['id'])) {
                $partner = $this->model::updateOrCreate(['id' => $this->validated['id']], array_merge($this->validated, ['publish' => 0]));
            } else {
                unset($this->validated['id']);
                $partner = $this->model::create(array_merge($this->validated, ['publish' => 0]));
            }


            if (isset($this->validated['locales'])) {
                foreach ($this->validated['locales'] as $k => $v) {
                    $this->modelLocale::updateOrCreate(['locale' => $k, 'partner_id' => $partner->id], $v);
                }
            }

            $this->getItem($partner->id);
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

            AdminLog::log($this->modelName, "Save {$this->modelName} Success", $this->currentUser, $this->currentUserId, $this->validated);

        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();
            AdminLog::log($this->modelName, "Save {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());
        }


        return $this->send();
    }

    public function getAll(PartnerRequest $request)
    {
        $this->handleValidate($request);
        try {

            $sql = $this->model::where('type_id', $this->validated['type_id'])->with('locales');
            $this->apiResult = $sql->get();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Get All {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();
    }

    public function setEnable(PartnerRequest $request)
    {
        $this->handleValidate($request);
        return $this->handleAction('enable');
    }

    public function setDelete(PartnerRequest $request)
    {
        $this->handleValidate($request);
        return $this->handleAction('mark_delete');
    }

    public function saveReorder(PartnerRequest $request)
    {
        $this->handleValidate($request);
        return $this->saveReorderAction();
    }

    public function publish(WebContentRequest $request)
    {
        $this->handleValidate($request);
        return $this->publishAction();
    }
}

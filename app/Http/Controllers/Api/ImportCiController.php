<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;
use App\Models\AdminLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Helper\CiDataHelper;

class ImportCiController extends BaseApiController
{

    public function index(Request $request)
    {

        try {
            $data = CiDataHelper::formattedImportData($request->input('showColumn'), $request->input('data'));

//            foreach ($data as $k => $v) {
//                $participant = $this->model::updateOrCreate(['team_code' => $k], array_merge($v, ['publish' => 0]));
//
//                foreach ($v['pigeons'] as $v1) {
//                    Pigeon::updateOrCreate(['ring_no' => $v1['ring_no']], array_merge($v1, ['participant_id' => $participant->id,
//                        'enable' => empty($v1['remark'])]));
//                }
//            }
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
            $this->apiResult['description'] = $request->input('data');
        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();
            AdminLog::log($this->modelName, "Import {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }
        return $this->send();
    }

}

<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;
use App\Models\AdminLog;
use App\Models\Import;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Helper\CiDataHelper;

class ImportCiController extends BaseApiController
{
    protected $model = Import::class;
    protected $modelName = 'import';

    public function index(Request $request)
    {

        try {
            $type_id = $request->input('type_id');
            $data = CiDataHelper::formattedImportData($request->input('showColumn'), $request->input('data'));

            foreach ($data as $v) {
                $this->model::updateOrCreate(
                    [
                        'plan_code' => $v['plan_code'],
                        'age_range' => $v['age_range'],
                        'channel' => $type_id
                    ],
                    [
                        'plan_code' => $v['plan_code'],
                        'age_range' => $v['age_range'],
                        'addb' => $v['addb'] == 'Y',
                        'cancer' => $v['cancer'] == 'Y',
                        'hc' => $v['hc'] == 'Y',
                        'nc' => $v['nc'] == 'Y',
                        'cvd' => $v['cvd'] == 'Y',
                        'organ' => $v['addb'] == 'Y',
                        'trauma' => $v['addb'] == 'Y',
                        'diabetes' => $v['addb'] == 'Y',
                        'net_premium' => $v['net_premium'],
                        'duty' => $v['duty'],
                        'gross_premium' => $v['gross_premium'],
                        'early_stage' => $v['early_stage'],
                        'late_stage' => $v['late_stage'],
                        'diablete' => $v['diablete'],
                        'hospital_cash' => $v['hospital_cash'],
                        'nursing_cash' => $v['nursing_cash'],
                        'pa' => $v['pa'],
                        'mso' => $v['mso'] == 'Y',
                        'health2go' => $v['health2go'] == 'Y',
                        'channel' => $type_id,
                        'tax_deduct' => $v['tax_deduct']
                    ]);

            }
            if($type_id == 'TPT Website'){
                CiDataHelper::genJsonFile($data);
            }

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

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
//
            foreach ($data as $k => $v) {
               $this->model::updateOrCreate(
                    ['plan_code' => $v['plan_code'],
                        'age_range' => $v['age_range']],
                    ['age_range' => $v['age_range'],
                        'addb'=>($v['addb'] == 'Y'?true:false),
                        'cancer'=>($v['cancer'] == 'Y'?true:false),
                        'hc'=>($v['hc'] == 'Y'?true:false),
                        'nc'=>($v['nc'] == 'Y'?true:false),
                        'cvd'=>($v['cvd'] == 'Y'?true:false),
                        'organ'=>($v['addb'] == 'Y'?true:false),
                        'trauma'=>($v['addb'] == 'Y'?true:false),
                        'diabetes'=>($v['addb'] == 'Y'?true:false),
                        'net_premium'=>$v['net_premium'],
                        'duty'=>$v['duty'],
                        'gross_premium'=>$v['gross_premium'],
                        'sum_insured_1'=>$v['sum_insured_1'],
                        'sum_insured_2'=>$v['sum_insured_2'],
                        'sum_insured_3'=>$v['sum_insured_3'],
                        'sum_insured_4'=>$v['sum_insured_4'],
                        'sum_insured_5'=>$v['sum_insured_5'],
                        'sum_insured_6'=>$v['sum_insured_6'],
                        'sum_insured_7'=>($v['sum_insured_7'] == 'Y'?true:false),
                        'sum_insured_8'=>($v['sum_insured_8'] == 'Y'?true:false),
                        'channel'=>$type_id,
                        'tax_deduct'=>$v['tax_deduct']
                    ]);

            }
            CiDataHelper::genJsonFile($data);
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

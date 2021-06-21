<?php


namespace App\Helper;


use App\Models\Import;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CiDataHelper
{
    protected static $formattedData = [];
    protected static $mapColumn = [];
    protected static $col = ['plan_code', 'age_range', 'addb', 'cancer', 'hc', 'nc', 'cvd', 'organ', 'trauma', 'diabetes', 'net_premium',
        'duty', 'gross_premium', 'sum_insured_1', 'sum_insured_2', 'sum_insured_3', 'sum_insured_4', 'sum_insured_5', 'sum_insured_6',
        'sum_insured_7', 'sum_insured_8', 'channel', 'tax_deduct'];
    protected static $jsonOrder = ['sum_insured_1', 'sum_insured_2', 'sum_insured_3', 'sum_insured_4', 'sum_insured_5', 'sum_insured_6',
        'sum_insured_7', 'sum_insured_8'];

    protected static function genMapColumn($shownData)
    {
        foreach ($shownData as $v) {
            self::$mapColumn[$v["original"]] = $v["field"];
        }
    }


    protected static function mapData($rowData, $table)
    {

        foreach ($table as $v) {
            $arr[$v] = $rowData[self::$mapColumn[$v]];
        }
        return $arr;
    }

    public static function formattedImportData($shownData, $data)
    {
        self::$formattedData = [];
        self::genMapColumn($shownData);

        foreach ($data as $v) {
            self::$formattedData[$v[self::$mapColumn['plan_code']]] = self::mapData($v, self::$col);
        }

        return self::$formattedData;
    }


    public static function genJsonFile()
    {
        $new_data = [];
        $data = Import::get();

        foreach ($data as $k => $v) {

            $new_code_start = Str::substr($v['plan_code'], 0, 5);
            $new_code_end = Str::substr($v['plan_code'], 5);;

            $age_range = explode("-", $v['age_range']);

            if ($age_range[0] >= 61 && $age_range[1] >= 65) {
                for ($i = 1; $i <= 9; $i++) {

                    switch ($i) {
                        case 7:
                            $new_data[$new_code_start]['plan']["sum_insured_{$i}"] = $v["sum_insured_{$i}"] == true ? "<img src='/images/my_health/Logo-My-Health.png'>" : '';
                            break;
                        case 8:
                            $new_data[$new_code_start]['plan']["sum_insured_{$i}"] = $v["sum_insured_{$i}"] == true ? "<i class='icofont-check-circled'  style='color:green'></i>" : "<i class='icofont-close-circled' style='color:red'></i>";
                            break;
                        default:
                            $new_data[$new_code_start]['plan']["sum_insured_{$i}"] = $v["sum_insured_{$i}"];
                            break;
                    }

                }

                $new_data[$new_code_start]['price'][$v['age_range']]['F' . $new_code_end] = $v['net_premium'];
            }


        }

        Storage::put('public/json/ci.json', stripslashes(json_encode($new_data)));


    }

}

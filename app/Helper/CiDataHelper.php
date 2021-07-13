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
        'duty', 'gross_premium', 'early_stage', 'late_stage', 'diablete', 'hospital_cash', 'nursing_cash', 'pa',
        'mso', 'health2go', 'channel', 'tax_deduct'];


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

            self::$formattedData[] = self::mapData($v, self::$col);
        }

        return self::$formattedData;
    }


    public static function genJsonFile($data,$type_id)
    {
        $new_data = [];

        foreach ($data as $k => $v) {

            $new_code_start = Str::substr($v['plan_code'], 0, 5);
            $new_code_end = Str::substr($v['plan_code'], 5);;

            $age_range = explode("-", $v['age_range']);

            if ($age_range[0] != 61 && $age_range[1] != 65) {

                $new_data[$new_code_start]['plan']["early_stage"] = $v["early_stage"];
                $new_data[$new_code_start]['plan']["late_stage"] = $v["late_stage"];
                $new_data[$new_code_start]['plan']["diablete"] = $v["diablete"];
                $new_data[$new_code_start]['plan']["hospital_cash"] = $v["hospital_cash"];
                $new_data[$new_code_start]['plan']["nursing_cash"] = $v["nursing_cash"];
                $new_data[$new_code_start]['plan']["pa"] = $v["pa"];
                $new_data[$new_code_start]['plan']["health2go"] = $v["health2go"] == true ? "<i class='icofont-check-circled'  style='color:green'></i>" : "<i class='icofont-close-circled' style='color:red'></i>";
                $new_data[$new_code_start]['plan']["mso"] = $v["mso"] == true ? "<i class='icofont-check-circled'  style='color:green'></i>" : "<i class='icofont-close-circled' style='color:red'></i>";

                $new_data[$new_code_start]['price'][$v['age_range']]['F' . $new_code_end] = $v['gross_premium'];
            }


        }

        Storage::put('public/json/ci'.($type_id !== "TPT Website" ?'_'. $type_id : '' ).'.json', stripslashes(json_encode($new_data)));


    }

}

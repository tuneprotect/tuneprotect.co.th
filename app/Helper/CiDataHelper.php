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


    protected static function genMapColumn($shownData)
    {
        foreach ($shownData as $v) {
            self::$mapColumn[$v["original"]] = $v["field"];
        }
    }

    protected static function getCombineColumn($rowData, $prefix)
    {
        $filtered = Arr::where($rowData, function ($value, $key) use ($prefix) {
            return Str::startsWith($key, $prefix) && !empty($value);
        });

        if (empty($filtered)) {
            return null;
        }

        $output = "";
        foreach ($filtered as $key => $value) {
            $output .= sprintf("%s: %s\n", $key, $value);
        }
        return $output;
    }

    public static function getCombineArrayColumn($colData)
    {

        if (empty($colData)) {
            return null;
        }

        $output = "";
        foreach ($colData as $key => $value) {
            $output .= sprintf("%s: %s\n", $key, $value);
        }
        return $output;
    }

    protected static function mapData($rowData, $table)
    {
//        $arr ['year_no'] = date('Y', strtotime($rowData[self::$mapColumn['receive_date']]));
        foreach ($table as $v) {
//            if (Str::endsWith($v, '_')) {
//                $arr[rtrim($v, "_")] = self::getCombineColumn($rowData, $v);
//            } elseif (Str::endsWith($v, '_date')) {
//                $arr[$v] = date(config('project.log_date'), strtotime($rowData[self::$mapColumn[$v]]));
//            } elseif (isset($rowData[self::$mapColumn[$v]])) {
            $arr[$v] = $rowData[self::$mapColumn[$v]];
//            }
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
        $new_data =[];
        $data = Import::get();

        foreach ($data as $k=>$v){
            $new_code_start = Str::substr($v['plan_code'], 0, 5);
            $new_code_end = Str::substr($v['plan_code'], 6);
;
            for($i=1;$i<=9;$i++){
                if($i == 7 || $i == 8){
                    $new_data[$new_code_start]['plan']["COV0{$i}"]=$v["sum_insured_{$i}"] == true?'Y':'N';
                }else{
                    $new_data[$new_code_start]['plan']["COV0{$i}"]=$v["sum_insured_{$i}"];
                }
            }
            $new_data[$new_code_start]['price'][$v['age_range']]['F'.$new_code_end] = $v['net_premium'];

        }

        Storage::put('cache/data_ci.json', stripslashes(json_encode($new_data)));


    }

    public static function explodeCombineColumn($rowData, $prefix)
    {
        $data = explode("\n", $rowData);
        $output = new \stdClass();

        try {
            if (!empty($data)) {
                foreach ($data as $v) {
                    $row = explode(':', $v);
                    if (!empty(@$row[0])) {
                        $output->{str_replace($prefix, '', @trim($row[0]))} = @trim($row[1]);
                    }
                }
            }
        } catch (\Exception $ex) {
            dd($ex->getMessage(), $ex->getTrace());
        }
        return $output;
    }

    public static function chooseLocale($country)
    {
        switch ($country) {
            case "TH":
                return 'th';
            default:
                return 'en';
        }
    }
}

<?php


namespace App\Helper;


use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CiDataHelper
{
    protected static $formattedData = [];
    protected static $mapColumn = [];
    protected static $participant_col = [
        'no', 'code', 'value'
    ];


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
//            if (!isset(self::$formattedData[$v[self::$mapColumn['no']]])) {
            self::$formattedData[$v[self::$mapColumn['no']]] = self::mapData($v, self::$participant_col);
//            }
//
//            self::$formattedData[$v[self::$mapColumn['no']]]['pigeons'][] = self::mapData($v, self::$pigeon_col);
        }

        return self::$formattedData;
    }

    public static function formatSummaryByCountry($result)
    {
        $arr = [];
        foreach ($result as $v) {
            $arr[$v->country] = $v->total;
        }

        return $arr;
    }

    public static function genJsonFile()
    {
        $data = json_encode(Participant::select("id", "team", "country")
            ->with(['pigeons' => function ($query) {
                $query->select('id', 'participant_id', 'ring_no')->orderBy('ring_no')
                    ->with(['teams' => function ($query) {
                        $query->select('RingNumber', 'LTeam', 'STeam', 'Status');
                    }]);
            }])
            ->orderBy('team')->get());

        Storage::put('cache/all_participant_1.json', stripslashes($data));


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
            case "CN":
                return 'cn';
            default:
                return 'en';
        }
    }
}

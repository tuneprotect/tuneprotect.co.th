<?php


namespace App\Helper;


use Illuminate\Support\Facades\Cache;

class CacheHelper
{
    public static function clearCache($arr_cache){
        foreach ($arr_cache as $v) {
            Cache::store('file')->forget($v);
            Cache::store('database')->forget($v);
        }
    }
}

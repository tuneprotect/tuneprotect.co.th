<?php

namespace App\Models;

use App\Models\Base\BaseModel;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;


class Translation extends BaseModel
{

    protected $table = 'language_lines';

    protected $guarded = [];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $casts = [
        'text' => 'array',
        'publish' => 'integer'
    ];

    public static function loadFile()
    {

        $allLang = Language::distinct()->pluck('code')->toArray();
        $mainLang = config('app.fallback_locale');

        if (($key = array_search($mainLang, $allLang)) !== false) {
            unset($allLang[$key]);
        }

        $arr = [];

        foreach (File::allFiles(resource_path('lang')) as $v) {
            $fileName = pathinfo($v->getBasename(), PATHINFO_FILENAME);
            $arr[$v->getRelativePath()][$fileName] = include $v->getPathname();
        }

        $translation = [];
        foreach ($arr as $k => $v) {
            foreach ($v as $k1 => $v1) {
                foreach (Arr::dot($v1) as $k2 => $v2) {

                    $key = "{$k1}.{$k2}";
                    if (isset($translation[$key])) {
                        $translation[$key]['text'][$k] = $v2;
                    } else {
                        $translation[$key] = [
                            'group' => $k1,
                            'key' => $k2,
                            'text' => [$k => $v2],
                            'publish' => 1
                        ];
                    }
                }
            }
        }

        foreach ($translation as $v) {
            if (!Translation::where('group', $v['group'])->where('key', $v['key'])->exists()) {
                self::create($v);
            }
        }
    }

    public static function publishAll()
    {
        $allTranslation = Translation::all();
        $arrTranslation = [];

        foreach ($allTranslation as $v) {
            foreach ($v->text as $k1 => $v1) {
                $arrTranslation[$k1]["{$v->group}.{$v->key}"] = $v1;
            }
        }

        foreach ($arrTranslation as $k => $v) {
            file_put_contents(resource_path("lang/{$k}.json"), stripslashes(json_encode($v)));
        }
        Artisan::call('cache:clear');
    }
}

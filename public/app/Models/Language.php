<?php

namespace App\Models;

use App\Models\Base\BaseModel;

class Language extends BaseModel
{

    protected $guarded = [];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $casts = [
        'enable' => 'integer',
        'default' => 'integer',
        'delete' => 'integer',
        'publish' => 'integer',
    ];

    public static function getEnableLanguage($application = 'front')
    {
        return self::where('application', $application)
            ->where('enable', 1)
            ->pluck('code')
            ->toArray();
    }

    public static function getDefaultLanguage($application = 'front')
    {
        return self::select('code')
            ->where('application', $application)
            ->where('default', 1)
            ->first()
            ->code;
    }

}

<?php

namespace App\Models;

use App\Models\Base\BaseModel;
use Illuminate\Support\Str;
use ReflectionClass;

class Setting extends BaseModel
{

    const NO_REPLY_EMAIL = 'NO_REPLY_EMAIL';
    const NO_REPLY_EMAIL_NAME = 'NO_REPLY_EMAIL_NAME';
//    const TINYPNG_API = 'TINYPNG_API';
    const IP_WHITELIST = 'IP_WHITELIST';
//    const _DOMAIN_EXPIRE = '_DOMAIN_EXPIRE';
    const FB_API_FOR_FRONTEND = 'FB_API_FOR_FRONTEND';
    const GOOGLE_AUTH_API_FOR_BACKSTAGE = 'GOOGLE_AUTH_API_FOR_BACKSTAGE';
    const FB_API_FOR_BACKSTAGE = 'FB_API_FOR_BACKSTAGE';
    const CONTACT_US_RECEIVE_EMAIL = 'CONTACT_US_RECEIVE_EMAIL';

    protected $primaryKey = 'id'; // or null
    public $incrementing = false;
    protected $keyType = 'string';

    protected $guarded = [];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $casts = [
        'publish' => 'integer'
    ];

    public static function getConstants()
    {
        $oClass = new ReflectionClass(__CLASS__);
        $removeSetting = ['deploy', 'CREATED_AT', 'UPDATED_AT'];

        $const = $oClass->getConstants();

        foreach ($const as $k => $v) {
            if (in_array($k, $removeSetting) || Str::startsWith($k, '_')) {
                unset($const[$k]);
            }
        }

        return $const;
    }

    public static function get($id)
    {

        try {
            return self::find($id)->value;
        } catch (\Exception $ex) {
            return null;
        }
    }


}

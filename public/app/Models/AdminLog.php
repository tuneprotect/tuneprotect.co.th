<?php

namespace App\Models;

use App\Models\Base\BaseModel;

class AdminLog extends BaseModel
{
    protected $connection = 'staging';

    protected $guarded = [];

    protected $casts = [
        'data' => 'array'
    ];

    public static function log($action, $description, $username = null, $admin_id = null, $data = null)
    {

        self::create([

            'action' => $action,
            'description' => $description,
            'user' => $username,
            'ip' => request()->ip(),
            'admin_id' => $admin_id,
            'data' => $data
        ]);
    }
}

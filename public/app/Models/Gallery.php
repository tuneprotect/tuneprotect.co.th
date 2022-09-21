<?php

namespace App\Models;

use App\Models\Base\BaseModel;
use Illuminate\Support\Facades\Storage;

class Gallery extends BaseModel
{

    protected $guarded = [];

    protected $casts = [
        'alt' => 'array',
        'enable' => 'integer',
        'mark_delete' => 'integer',
        'publish' => 'integer',
        's_order' => 'integer',
    ];
}

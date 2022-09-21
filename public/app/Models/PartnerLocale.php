<?php

namespace App\Models;

use App\Models\Base\BaseModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PartnerLocale extends BaseModel
{
    protected $guarded = [];

    protected $hidden = [
        'created_at', 'updated_at'
    ];
}

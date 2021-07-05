<?php

namespace App\Models;

use App\Models\Base\BaseModel;

class Import extends BaseModel
{
    protected $connection = 'import_package';
    protected $guarded = [];
    protected $table = 'plancode_ci';
    public $timestamps = false;
}

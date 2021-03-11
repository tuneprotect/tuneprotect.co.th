<?php

namespace App\Models;

use App\Models\Base\BaseModel;
use Hulkur\HasManyKeyBy\HasManyKeyByRelationship;

class LeadForms extends BaseModel
{
    protected $connection = 'live';
    protected $guarded = [];
    protected $table = 'leadforms';
    use HasManyKeyByRelationship;


    public function product()
    {
        return $this->hasMany('App\Models\WebContentLocale', 'web_content_id', 'product_id')
            ->keyBy('locale');
    }

}

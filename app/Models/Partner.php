<?php

namespace App\Models;

use App\Models\Base\BaseModel;
use Hulkur\HasManyKeyBy\HasManyKeyByRelationship;

class Partner extends  BaseModel
{
    use HasManyKeyByRelationship;

    protected $guarded = ['locales'];

    protected $casts = [
        'start_date' => 'datetime:Y-m-d H:i:s',
        'end_date' => 'datetime:Y-m-d H:i:s',
        'action_date' => 'datetime:Y-m-d H:i:s',
        'enable' => 'integer',
        'mark_delete' => 'integer',
        'publish' => 'integer',
        's_order' => 'integer',
        'partner_language' => 'array'
    ];

    public function locales()
    {
        return $this->hasMany('App\Models\PartnerLocale')->keyBy('locale');
    }

    public function category()
    {
        return $this->hasOne('App\Models\WebContent', 'id', 'cat_id');
    }
}

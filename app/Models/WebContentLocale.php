<?php

namespace App\Models;

use App\Models\Base\BaseModel;

class WebContentLocale extends BaseModel
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];


    public function leadform()
    {
        return $this->hasOne('App\Models\LeadForms','product_id','web_content_id');
    }
}

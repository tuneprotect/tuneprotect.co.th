<?php

namespace App\Models;

use App\Enum\ProjectEnum;
use App\Models\Base\BaseModel;
use Hulkur\HasManyKeyBy\HasManyKeyByRelationship;

class WebContent extends BaseModel
{
    use HasManyKeyByRelationship;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['locales'];


    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'start_date' => 'datetime:Y-m-d H:i:s',
        'end_date' => 'datetime:Y-m-d H:i:s',
        'action_date' => 'datetime:Y-m-d H:i:s',
        'enable' => 'integer',
        'home' => 'integer',
        'mark_delete' => 'integer',
        'publish' => 'integer',
        's_order' => 'integer'
    ];

    public function locales()
    {
        return $this->hasMany('App\Models\WebContentLocale')->keyBy('locale');
    }

    public function category()
    {
        return $this->hasOne('App\Models\WebContent', 'id', 'cat_id');
    }

    public function category_locals()
    {
        return $this->hasMany('App\Models\WebContentLocale', 'web_content_id', 'cat_id')
            ->keyBy('locale');
    }

    public function childContentsByCatID()
    {
        return $this->hasMany('App\Models\WebContent', 'cat_id', 'id');
    }

    public function childContentsByParentID()
    {
        return $this->hasMany('App\Models\WebContent', 'parent_id', 'id');
    }

    public function productPackage()
    {
        return $this->childContentsByParentID()
            ->where('type_id', ProjectEnum::WEB_CONTENT_PRODUCT_PACKAGE)
            ->whereRaw(ProjectEnum::isPublish())
            ->orderBy('s_order');
    }

    public function productSlideshow()
    {
        return $this->childContentsByParentID()
            ->where('type_id', ProjectEnum::WEB_CONTENT_PRODUCT_SLIDESHOW)
            ->whereRaw(ProjectEnum::isPublish())
            ->orderBy('s_order');
    }

    public function faq()
    {
        return $this->childContentsByParentID()
            ->where('type_id', ProjectEnum::WEB_CONTENT_FAQ)
            ->whereRaw(ProjectEnum::isPublish())
            ->orderBy('s_order');
    }

    public function galleries()
    {
        return $this->hasMany('App\Models\Gallery', 'ref_id', 'id');
    }

}

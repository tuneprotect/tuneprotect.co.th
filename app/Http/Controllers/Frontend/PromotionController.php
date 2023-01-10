<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseArticleController;
use App\Http\Controllers\Frontend\Base\BaseController;

class PromotionController extends BaseArticleController
{
    protected $webContentType = ProjectEnum::WEB_CONTENT_PROMOTION;
    protected $listPageMeta = ProjectEnum::STATIC_META_PROMOTION;

    public function __construct()
    {
        parent::__construct();

        $this->bodyData['highlight_title'] = __('global.highlight_promotion');
        $this->bodyData['other_title'] = __('global.nav_promotion');
        $this->bodyData['controller'] = "promotion";

    }

}

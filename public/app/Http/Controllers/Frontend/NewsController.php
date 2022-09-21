<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseArticleController;
use App\Http\Controllers\Frontend\Base\BaseController;

class NewsController extends BaseArticleController
{
    protected $webContentType = ProjectEnum::WEB_CONTENT_NEWS;
    protected $listPageMeta = ProjectEnum::STATIC_META_NEWS;

    public function __construct()
    {
        parent::__construct();

        $this->bodyData['highlight_title'] = __('global.highlight_news');
        $this->bodyData['other_title'] = __('global.nav_news');
        $this->bodyData['controller'] = "news";

    }

}

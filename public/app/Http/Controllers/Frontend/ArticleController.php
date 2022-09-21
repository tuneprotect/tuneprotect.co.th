<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseArticleController;
use App\Http\Controllers\Frontend\Base\BaseController;

class ArticleController extends BaseArticleController
{
    protected $webContentType = ProjectEnum::WEB_CONTENT_ARTICLE;
    protected $listPageMeta = ProjectEnum::STATIC_META_ARTICLE;

    public function __construct()
    {
        parent::__construct();

        $this->bodyData['highlight_title'] = __('global.highlight_article');
        $this->bodyData['other_title'] = __('global.nav_article');
        $this->bodyData['controller'] = "article";

    }
}

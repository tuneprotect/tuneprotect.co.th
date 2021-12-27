<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use Illuminate\Support\Facades\View;

class ArticleViewController extends BaseController
{
    protected $webContentType = ProjectEnum::WEB_CONTENT_ARTICLE;
    protected $listPageMeta = ProjectEnum::STATIC_META_ARTICLE;

    public function index($link = null)
    {
        parent::__construct();

        $this->bodyData['highlight_title'] = __('global.highlight_article');
        $this->bodyData['other_title'] = __('global.nav_article');
        $this->bodyData['controller'] = "article";

        $this->template->setBody('id', 'article_page');
        $this->template->setFootJS(mix("/js/frontend/article.js"));
        $this->bodyData['content'] = $this->setStaticPageHeader($this->listPageMeta);
        $allList = WebContent::where('type_id', $this->webContentType)
            ->with('locales')
            ->whereRaw(ProjectEnum::isPublish())
            ->orderBy('action_date', 'desc')
            ->get();

        $this->bodyData['highlight'] = $allList->take(3);
        $this->bodyData['list'] = $allList->slice(3);

        return $this->genView('frontend.page.article_view');

    }
}

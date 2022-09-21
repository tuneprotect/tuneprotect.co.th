<?php


namespace App\Http\Controllers\Frontend\Base;


use App\Enum\ProjectEnum;
use App\Models\WebContent;

abstract class BaseArticleController extends BaseController
{
    protected $webContentType;
    protected $listPageMeta;

    public function index($link = null)
    {
        if (!empty($link)) {

            $content = WebContent::where('type_id', $this->webContentType)
                ->with('locales')
                ->where('friendly_url', $link)
                ->whereRaw(ProjectEnum::isPublish())
                ->orderBy('action_date', 'desc')
                ->get();
            if ($content->first()) {
                return $this->genDetailPage($content->first());
            }
        }
        return $this->genListPage();
    }

    protected function genListPage()
    {
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

        return $this->genView('frontend.page.article');
    }

    protected function genDetailPage($content)
    {
        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->template->setBody('id', 'static_page');

        $this->setPageHeader(
            @$content->locales[$this->locale]->page_title,
            @$content->locales[$this->locale]->page_keyword,
            @$content->locales[$this->locale]->page_desc,
            @$content->locales[$this->locale]->og_title,
            @$content->locales[$this->locale]->og_desc,
            @$content->og_image
        );

        $this->bodyData['content'] = $content;

        $this->bodyData['relatedArticle'] = WebContent::where('type_id', $this->webContentType)
            ->with('locales')
            ->whereRaw(ProjectEnum::isPublish())
            ->where('cat_id', $content->cat_id)
            ->where('id', '!=', $content->id)
            ->inRandomOrder()
            ->take(3)
            ->get();

        $this->bodyData['articleImage'] = true;


        return $this->genView('frontend.page.static');
    }
}

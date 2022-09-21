<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;

class IndexController extends BaseController
{
    public function index()
    {
        $this->template->setBody('id', 'index_page');
        $this->template->setFootJS(mix("/js/frontend/index.js"));


        $this->bodyData['content'] = $this->setStaticPageHeader(ProjectEnum::STATIC_PAGE_INDEX);

        $this->bodyData['slideshow'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_BANNER)
            ->with('locales')
            ->whereRaw(ProjectEnum::isPublish())
            ->orderBy('s_order')
            ->get();

        $highlight_product = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_PRODUCT)
            ->with(['locales','productPackage' => function ($q) {
                $q->with('locales');
            },'productSlideshow' => function ($q) {
                $q->with('locales');
            }])
            ->whereHas('productPackage')
            ->whereRaw(ProjectEnum::isPublish())
            ->orderBy('s_order')
            ->get();

        $this->bodyData['main_highlight_product'] = $highlight_product->first();
        $this->bodyData['highlight_product'] = $highlight_product->slice(1);

        $this->bodyData['service'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_SERVICE)
            ->with('locales')
            ->whereRaw(ProjectEnum::isPublish())
            ->orderBy('s_order')
            ->get();

        $this->genReview();

        return $this->genView('frontend.page.index');
    }


}

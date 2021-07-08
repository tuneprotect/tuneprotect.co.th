<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;

class ServiceController extends BaseController
{
    public function index($link = null)
    {
        if (!empty($link)) {
            return $this->genDetail($link);
        }

        $this->template->setBody('id', 'contact_us_page');
        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->bodyData['content'] = $this->setStaticPageHeader(ProjectEnum::STATIC_PAGE_MY_HEALTH);

        return $this->genView('frontend.page.claim');
    }


    protected function genDetail($link)
    {

        $content = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_SERVICE_MY_HEALTH)
            ->with('locales')
            ->where('friendly_url', $link)
            ->whereRaw(ProjectEnum::isPublish())
            ->first();
        $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTENT_FAQ, $content->id);

        if ($content) {
            return $this->genStaticPage($content, 'frontend.page.static');
        }

    }
}

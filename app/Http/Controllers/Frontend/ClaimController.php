<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use Illuminate\Support\Str;

class ClaimController extends BaseController
{
    public function index($link = null)
    {
        if (!empty($link)) {
            return $this->genDetail($link);
        }

        $this->template->setBody('id', 'contact_us_page');
        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->bodyData['content'] = $this->setStaticPageHeader(ProjectEnum::STATIC_PAGE_CLAIM);
        $this->template->setFootJS(mix("/js/frontend/claim.js"));
        return $this->genView('frontend.page.claim');
    }


    protected function genDetail($link)
    {
        $content = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_CLAIM)
            ->with('locales')
            ->where('friendly_url', $link)
            ->whereRaw(ProjectEnum::isPublish())
            ->first();

        if ($content) {
            $this->template->setFootJS(mix("/js/frontend/claim_detail.js"));
            return $this->genStaticPage($content, 'frontend.page.claim_static');
        }
    }
}

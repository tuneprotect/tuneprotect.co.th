<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;

class PrivacyPolicyController extends BaseController
{
    public function index()
    {

        $this->template->setBody('id', 'static_page');
        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->bodyData['content'] = $this->setStaticPageHeader(ProjectEnum::STATIC_PAGE_PRIVACY_POLICY);

        return $this->genView('frontend.page.static');
    }
}

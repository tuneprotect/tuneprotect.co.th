<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseArticleController;
use App\Http\Controllers\Frontend\Base\BaseController;

class MyHealthController extends BaseController
{

    public function index()
    {

        $this->template->setBody('id', 'static_page');
        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->bodyData['content'] = $this->setStaticPageHeader(ProjectEnum::STATIC_PAGE_MY_HEALTH);

        return $this->genView('frontend.page.static_no_title');
    }

}

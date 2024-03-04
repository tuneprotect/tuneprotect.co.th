<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;

class OccupationController extends BaseController
{
    public function index()
    {

        $this->template->setBody('id', 'static_page');
        $this->template->setFootJS(mix("/js/frontend/main.js"));

        return $this->genView('frontend.page.occupation');
    }
}

<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;

class IndexController extends BaseController
{
    public function index()
    {
        return $this->genView('frontend.page.perference_center');
    }


}

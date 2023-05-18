<?php


namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Frontend\Base\BaseController;

class PreferenceCenterController extends BaseController
{
    public function index()
    {
        return $this->genView('frontend.page.perference_center');
    }


}

<?php


namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Frontend\Base\BaseController;

class PreferenceCenterController extends BaseController
{
    public function insured()
    {
        return $this->genView('frontend.page.perference_center_insured');
    }

    public function agent()
    {
        return $this->genView('frontend.page.perference_center_agent');
    }

    public function employee()
    {
        return $this->genView('frontend.page.perference_center_employee');
    }
}

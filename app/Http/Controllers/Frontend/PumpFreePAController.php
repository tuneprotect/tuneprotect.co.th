<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Frontend\Base\BaseController;
use App\Mail\ContactUsEmail;
use App\Models\LeadForms;
use App\Models\Setting;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;
use Illuminate\Support\Facades\Mail;

class PumpFreePAController extends BaseController
{
    public function index()
    {
        //$this->template->setFootJS(mix("/js/frontend/pumpfreepa.js"));
        return $this->genView('frontend.page.pump_free_pa');

    }
}

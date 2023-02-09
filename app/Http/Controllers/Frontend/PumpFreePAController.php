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
    protected $controller = 'pumpfreepa';
    public function index()
    {
        return $this->genView('frontend.page.pump_free_pa');

    }
    public function Silver()
    {
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);
        $selected = "PUMPPA1";
        //dd(strtolower($selected));
        //return $this->genDetailPage($selected);
        return $this->genView('frontend.page.pump_free_pa_silver')->genDetailPage($selected);
    }
    public function Gold()
    {
        return $this->genView('frontend.page.pump_free_pa_gold');
    }
    public function Platinum()
    {
        return $this->genView('frontend.page.platinum');
    }
}

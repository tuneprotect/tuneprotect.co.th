<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Http\Requests\ContactusRequest;
use App\Http\Requests\LeadFormsRequest;
use App\Mail\ContactUsEmail;
use App\Models\Contactus;
use App\Models\LeadForms;
use App\Models\Setting;
use App\Models\WebContent;
use Illuminate\Support\Facades\Mail;

class DSARController extends BaseController
{
    public function index()
    {
        return $this->genView('frontend.page.cookies_dsar');
    }
}

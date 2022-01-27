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

class TaxReductionController extends BaseController
{
    protected $action = '';

    public function index()
    {
        $this->template->setFootJS(mix("/js/frontend/taxreduction.js"));
        return $this->genView('frontend.page.tax_reduction');

    }

    public function saveData(Request $request)
    {
        try {
            switch ($request->input('action')) {
                case 'accept':
                    $this->action = 'accept';
                    break;
                case 'decline':
                    $this->action = 'decline';
                    break;
            }
        } catch (\Exception $ex) {
            $this->action = 'error';
        }

//        dd($this->action);

        return response()->json([
            self::API_STATUS => $this->action
        ]);

    }
}

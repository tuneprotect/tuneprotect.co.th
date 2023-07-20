<?php


namespace App\Http\Controllers\Frontend;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;
use Illuminate\Support\Str;

// use App\Http\Requests\MemberidRequest;

class PortalController extends ProductController
{
    protected $controller = 'portal';
    protected $use_effective = 'N';
    public function index($link = null, $selected = null, $portal_key = null, $redeem_code = null)
    {
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);
        session(['selected' => $selected]);
        if (in_array($selected, ['CVISAFE'])) {
            $selected = "CVIS22JAN";
        }
        if (in_array($selected, ['ONVSAFEA', 'ONVS22JAN'])) {
            $selected = "ONVSAFE";
        }
        if (in_array($selected, ['ONVACINA'])) {
            $selected = "ONVSUREA";
        }

        $massage_error = '';
        if (!empty($redeem_code)) {
            $apiResult = $this->sendToApiPromoCodeValidation($redeem_code);

            if (!$apiResult["status"]) {
                $apiData = $apiResult['data'];
                $apiErrorCode = $apiData["error_code"];
                $apiErrorMsg = '';
                if ($apiErrorCode === 'E0001') {
                    $apiErrorMsg = __('product.error.promocode_invalid');
                } elseif ($apiErrorCode === 'E0002') {
                    $apiErrorMsg = __('product.error.promocode_inused') . ' ' . $apiData["data"];
                } elseif ($apiErrorCode === 'E0000') {
                    $apiErrorMsg = __('product.error.promocode_invalid') . ' ' . $apiData["message"];;
                }

                $massage_error = $apiErrorMsg;
            } else {
                $massage_error = '';
            }
        }

        $this->bodyData['redeem_code'] = $redeem_code;
        $this->bodyData['massage_error'] = $massage_error;


        $massage_key = $portal_key;
        $status_api = false;
        $this->bodyData['portal_key'] = $portal_key;
        $partner = '';
        $agentCode = '';
        $nopayment_status = false;
        $b2bpayment_status = false;
        $apiResult = $this->sendToApiPortalLogin($portal_key);
        if (!$apiResult["status"]) {
            $status_api = false;
            $massage_key = "Error : " . $apiResult["message"];
        } else {
            $status_api = true;
            $massage_key = "Portal Key : " . $portal_key;
            $partner = $apiResult["partner"];
            $agentCode = $apiResult["agent_code"];
            $this->use_effective = $apiResult["user_effective"];
            if ($apiResult["user_nopayment"] == 'Y') {
                $nopayment_status = true;
            }
            
            if (in_array($agentCode, explode(',', config('payment.b2b_agent_group')))) {
                $b2bpayment_status = true;
            }
        }

        if($agentCode == "00AA603T88") 
        {
			//dd(request()->click_id);
            session(['transaction_id' => request()->click_id]);
        }

        $this->bodyData['partner'] = $partner;
        $this->bodyData['agentCode'] = $agentCode;
        $this->bodyData['status_api'] = $status_api;
        $this->bodyData['massage_key'] = $massage_key;
        $this->bodyData['nopayment_status'] = $nopayment_status;
        $this->bodyData['b2bpayment_status'] = $b2bpayment_status;

        $this->bodyData['controller'] = $this->controller;
        $this->bodyData['use_effective'] = $this->use_effective;

        session(['nopayment_status' => $nopayment_status]);
        session(['partner' => $partner]);
        session(['agentCode' => $agentCode]);
        session(['b2bpayment_status' => $b2bpayment_status]);
        session(['controller' => $this->controller]);

        return parent::index($link, $selected);
    }

    //https://www.tuneprotect.co.th/th/portal/list/pa-choice-insurance-broker/AUAWAMUX9JDXNGFFD4WZZLQ3NDEXNGFF6EJXNHSF28UZG4ERZ6JLGTGRA2
    public function list($link = null, $portal_key = null)
    {
        $this->bodyData['portal_key'] = $portal_key;
        return parent::index($link);
    }

    public function form($link = null, $selected = null, $portal_key = null)
    {
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);

        $this->bodyData['controller'] = $this->controller;

        $massage_key = $portal_key;
        $status_api = false;
        $this->bodyData['portal_key'] = $portal_key;
        $partner = '';
        $agentCode = '';
        $use_effective = 'N';
        $nopayment_status = false;
        $b2bpayment_status = false;
        $apiResult = $this->sendToApiPortalLogin($portal_key);
        if (!$apiResult["status"]) {
            $status_api = false;
            $massage_key = "Error : " . $apiResult["message"];
        } else {
            $status_api = true;
            $massage_key = "Portal Key : " . $portal_key;
            $partner = $apiResult["partner"];
            $agentCode = $apiResult["agent_code"];
            $use_effective = $apiResult["user_effective"];
            if ($apiResult["user_nopayment"] == 'Y') {
                $nopayment_status = true;
            }
            
            if (in_array($agentCode, explode(',', config('payment.b2b_agent_group')))) {
                $b2bpayment_status = true;
            }
        }

        $this->bodyData['partner'] = $partner;
        $this->bodyData['agentCode'] = $agentCode;
        $this->bodyData['status_api'] = $status_api;
        $this->bodyData['massage_key'] = $massage_key;
        $this->bodyData['use_effective'] = $use_effective;
        $this->bodyData['nopayment_status'] = $nopayment_status;

        $this->bodyData['b2bpayment_status'] = $b2bpayment_status;

        session(['nopayment_status' => $nopayment_status]);
        session(['partner' => $partner]);
        session(['agentCode' => $agentCode]);
        session(['b2bpayment_status' => $b2bpayment_status]);

        $this->bodyData['brochure_ci'] = __('product.ci_brochure_broker_th');
        if ($this->locale == 'en') {

            $this->bodyData['brochure_ci'] = __('product.ci_brochure_broker_en');
        }

        return parent::form($link, $selected);
    }

    protected function sendToApiPortalLogin($portal_key)
    {
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'loginPortal', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'KeyValue' => $portal_key
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    protected function sendToApiPromoCodeValidation($redeem_code)
    {
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'PromoCodeValidation', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'Code' => $redeem_code
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    protected function sendToApiCheckNoPayment($portal_key)
    {
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'CheckNoPayment', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'KeyValue' => $portal_key
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }


    public function thankyou(Request $request)
    {
        $this->bodyData['partner'] = $request->session()->get('partner');
        $this->bodyData['doc_no'] = $request->session()->get('doc_no');
        $this->bodyData['return_link'] = $request->session()->get('return_link');
        $this->bodyData['point'] = '';
        $this->bodyData['agentCode'] = $request->session()->get('agentCode');
        $this->bodyData['payAmount'] = $request->session()->get('payAmount');
        $this->bodyData['portalKey'] = $request->session()->get('portalKey');
        
        $this->bodyData['package'] = $request->session()->get('package');
        $this->bodyData['refCode'] = $request->session()->get('refCode');
        $this->bodyData['controller'] = $this->controller;

        if ($request->session()->get('partner') === 'rabbit') {

            $mystring = $request->session()->get('return_link');
            $findme   = 'ONTAOB';
            $pos = strpos($mystring, $findme);
            $this->bodyData['selected'] = $pos == true ? "thank" : $request->session()->get('selected');
            return (new RabbitController)->thankyou($request);

            //$this->bodyData['page'] = 'thankyou';
        } else {
            $this->bodyData['selected'] = $request->session()->get('selected');
        }

        if (session('partner')) {
            if (session('partner') === 'THAIAIRWAY') {
                return (new TGController)->thankyou($request);
            }
        }

        if($request->session()->get('agentCode') == "00AA603T88") 
        {
			//dd(request()->click_id);
            $this->bodyData['transaction_id'] = $request->session()->get('transaction_id');
        }

        $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU;

        //Health
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHC_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_CHILL_SURE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYFLEXI_CI_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_MYFLEXI_CI;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::DIABETES_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_DIABETES;
        }

        //PA Choice
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPACA_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE_CARE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPAKD_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE_KIDE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPASN_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE_SENIOR;
        }

        //iTravel
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTASK_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TA_PLUS_SKIING;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAISM_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_ISMILE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAIPOCT22_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TUNE_IPASS;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTADM_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TA_DOMESTIC;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTAOB_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TA_OUTBOUND;
        }

        //myHome
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_SMART_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_MYHOME_SMART;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_PLUS_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_MYHOME_PLUS;
        }

        //ChillSure GV
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHCGV_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_CHILL_SURE_GV;
        }
        //CI GC
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYFLEXI_CIGC_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_MYFLEXI_CIGC;
        }

        //iTravel Tour
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTATO_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TA_OUTBOUND_TOUR;
        }

        return $this->genStatusPage_Portal($thank_you_page);
    }

    public function error(Request $request)
    {
        $this->bodyData['partner'] = $request->session()->get('partner');
        $this->bodyData['selected'] = $request->session()->get('selected');
        $this->bodyData['doc_no'] = $request->session()->get('error');
        $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR;

        //Health
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHC_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_CHILL_SURE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYFLEXI_CI_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_MYFLEXI_CI;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::DIABETES_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_DIABETES;
        }

        //PA Choice
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPACA_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_PA_CHOICE_CARE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPAKD_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_PA_CHOICE_KIDE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPASN_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_PA_CHOICE_SENIOR;
        }

        //iTravel
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTASK_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TA_PLUS_SKIING;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAISM_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_ISMILE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAIPOCT22_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TUNE_IPASS;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTADM_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TA_DOMESTIC;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTAOB_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TA_OUTBOUND;
        }

        //myHome
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_SMART_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_MYHOME_SMART;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_PLUS_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_MYHOME_PLUS;
        }

        //iTravel Tour
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTATO_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TA_OUTBOUND_TOUR;
        }

        return $this->genStatusPage($error_page);
    }

    public function cancel(Request $request)
    {
        $this->bodyData['partner'] = $request->session()->get('partner');
        $this->bodyData['selected'] = $request->session()->get('selected');
        $this->bodyData['doc_no'] = $request->session()->get('error');
        if ($request->session()->get('return_link')) {
            return redirect($request->session()->get('return_link'));
        }
        return redirect('/' . $this->locale);
    }

    public function pending(Request $request)
    {
        $this->bodyData['partner'] = $request->session()->get('partner');
        $this->bodyData['selected'] = $request->session()->get('selected');
        $this->bodyData['doc_no'] = $request->session()->get('error');
        $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING;

        //Health
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHC_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_CHILL_SURE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYFLEXI_CI_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_MYFLEXI_CI;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::DIABETES_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_DIABETES;
        }

        //PA Choice
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPACA_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_PA_CHOICE_CARE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPAKD_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_PA_CHOICE_KIDE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPASN_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_PA_CHOICE_SENIOR;
        }

        //iTravel
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTASK_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TA_PLUS_SKIING;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAISM_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_ISMILE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAIPOCT22_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TUNE_IPASS;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTADM_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TA_DOMESTIC;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTAOB_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TA_OUTBOUND;
        }

        //myHome
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_SMART_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_MYHOME_SMART;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_PLUS_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_MYHOME_PLUS;
        }

        //iTravel Tour
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTATO_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TA_OUTBOUND_TOUR;
        }

        return $this->genStatusPage($pending_page);
    }

    public function reject(Request $request)
    {
        $this->bodyData['partner'] = $request->session()->get('partner');
        $this->bodyData['selected'] = $request->session()->get('selected');
        $this->bodyData['doc_no'] = $request->session()->get('error');
        $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT;

        //Health
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHC_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_CHILL_SURE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYFLEXI_CI_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_MYFLEXI_CI;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::DIABETES_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_DIABETES;
        }

        //PA Choice
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPACA_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_PA_CHOICE_CARE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPAKD_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_PA_CHOICE_KIDE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPASN_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_PA_CHOICE_SENIOR;
        }

        //iTravel
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTASK_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TA_PLUS_SKIING;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAISM_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_ISMILE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAIPOCT22_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TUNE_IPASS;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTADM_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TA_DOMESTIC;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTAOB_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TA_OUTBOUND;
        }

        //myHome
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_SMART_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_MYHOME_SMART;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_PLUS_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_MYHOME_PLUS;
        }

        //iTravel Tour
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTATO_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TA_OUTBOUND_TOUR;
        }

        return $this->genStatusPage($reject_page);
    }

    protected function sendToApiBigLifeValidateSurvey($memberId)
    {
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'BigLifeValidateSurvey', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'memberId' => $memberId
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }
}

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
    public function index($link = null, $selected = null,$portal_key = null,$redeem_code =null)
    {
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);
        session(['selected' => $selected]);
        if (in_array($selected, ['CVISAFE'])) {
            $selected = "CVIS22JAN";
        }
        if (in_array($selected, ['ONVSAFEA','ONVS22JAN'])) {
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
                }
                elseif ($apiErrorCode === 'E0002') {
                    $apiErrorMsg = __('product.error.promocode_inused') . ' ' . $apiData["data"];
                }
                elseif ($apiErrorCode === 'E0000') {
                    $apiErrorMsg = __('product.error.promocode_invalid') . ' ' . $apiData["message"];;
                }

                $massage_error= $apiErrorMsg;
            }
            else
            {
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
        $apiResult = $this->sendToApiPortalLogin($portal_key);
        if (!$apiResult["status"]) {
            $status_api = false;
            $massage_key = "Error : " . $apiResult["message"];
        }
        else
        {
            $status_api = true;
            $massage_key = "Portal Key : " . $portal_key;
            $partner = $apiResult["partner"];
            $agentCode = $apiResult["agent_code"];
            $this->use_effective = $apiResult["user_effective"];
            if($apiResult["user_nopayment"] == 'Y')
            {
                $nopayment_status = true;
            }
        }


        $this->bodyData['partner'] = $partner;
        $this->bodyData['agentCode'] = $agentCode;
        $this->bodyData['status_api'] = $status_api;
        $this->bodyData['massage_key'] = $massage_key;
        $this->bodyData['nopayment_status'] = $nopayment_status;

        $this->bodyData['controller'] = $this->controller;
        $this->bodyData['use_effective'] = $this->use_effective;

        session(['nopayment_status' => $nopayment_status]);
        session(['partner' => $partner]);

        return parent::index($link,$selected);

    }

    //https://www.tuneprotect.co.th/th/portal/list/pa-choice-insurance-broker/AUAWAMUX9JDXNGFFD4WZZLQ3NDEXNGFF6EJXNHSF28UZG4ERZ6JLGTGRA2
    public function list($link = null,$portal_key = null)
    {
        $this->bodyData['portal_key'] = $portal_key;
        return parent::index($link);
    }

    public function form($link = null, $selected = null,$portal_key = null)
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
        $apiResult = $this->sendToApiPortalLogin($portal_key);
        if (!$apiResult["status"]) {
            $status_api = false;
            $massage_key = "Error : " . $apiResult["message"];
        }
        else
        {
            $status_api = true;
            $massage_key = "Portal Key : " . $portal_key;
            $partner = $apiResult["partner"];
            $agentCode = $apiResult["agent_code"];
            $use_effective = $apiResult["user_effective"];
            if($apiResult["user_nopayment"] == 'Y')
            {
                $nopayment_status = true;
            }

        }

        $this->bodyData['partner'] = $partner;
        $this->bodyData['agentCode'] = $agentCode;
        $this->bodyData['status_api'] = $status_api;
        $this->bodyData['massage_key'] = $massage_key;
        $this->bodyData['use_effective'] = $use_effective;
        $this->bodyData['nopayment_status'] = $nopayment_status;

        session(['nopayment_status' => $nopayment_status]);
        session(['partner' => $partner]);

        $this->bodyData['brochure_ci'] = __('product.ci_brochure_broker_th');
        if($this->locale == 'en')
        {

            $this->bodyData['brochure_ci'] = __('product.ci_brochure_broker_en');
        }

        return parent::form($link,$selected);

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

        if($request->session()->get('partner')==='RABBIT'){

            $mystring = $request->session()->get('return_link');
            $findme   = 'ONTAOB';
            $pos = strpos($mystring, $findme);
            $this->bodyData['selected'] = $pos==true ? $findme : $request->session()->get('selected');

        }else{
            $this->bodyData['selected'] = $request->session()->get('selected');
        }
       

        if (session('partner')) {
            if(session('partner') ==='THAIAIRWAY')
            {
                return (new TGController)->thankyou($request);
            }

        }

        $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU;
        if(Str::contains($request->getRequestUri(),ProjectEnum::DIABETES_URL)){
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_DIABETES;
        }
        if(Str::contains($request->getRequestUri(),ProjectEnum::ISMILE_URL)){
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_ISMILE;
        }

        return $this->genStatusPage_Portal($thank_you_page);

    }

    public function error(Request $request)
    {
        $this->bodyData['partner'] =$request->session()->get('partner');
        $this->bodyData['selected'] =$request->session()->get('selected');
        $this->bodyData['doc_no'] =$request->session()->get('error');
        return $this->genStatusPage_Portal(ProjectEnum::STATIC_PAGE_PAYMENT_ERROR);
    }

    public function cancel(Request $request)
    {
        $this->bodyData['partner'] =$request->session()->get('partner');
        $this->bodyData['selected'] =$request->session()->get('selected');
        $this->bodyData['doc_no'] =$request->session()->get('error');
        if($request->session()->get('return_link'))
        {
            return redirect($request->session()->get('return_link'));
        }
        return redirect('/' . $this->locale);
    }

    public function pending(Request $request)
    {
        $this->bodyData['partner'] =$request->session()->get('partner');
        $this->bodyData['selected'] =$request->session()->get('selected');
        $this->bodyData['doc_no'] =$request->session()->get('error');
        return $this->genStatusPage_Portal(ProjectEnum::STATIC_PAGE_PAYMENT_PENDING);
    }

    public function reject(Request $request)
    {
        $this->bodyData['partner'] =$request->session()->get('partner');
        $this->bodyData['selected'] =$request->session()->get('selected');
        $this->bodyData['doc_no'] =$request->session()->get('error');
        return $this->genStatusPage_Portal(ProjectEnum::STATIC_PAGE_PAYMENT_REJECT);
    }
}


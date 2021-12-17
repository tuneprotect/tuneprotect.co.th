<?php


namespace App\Http\Controllers\Frontend;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;
// use App\Http\Requests\MemberidRequest;

class PortalController extends ProductController
{
    protected $controller = 'portal';
    protected $use_effective = 'N';
    public function index($link = null, $selected = null,$portal_key = null)
    {
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);
        session(['selected' => $selected]);

        if($selected ==='CVISAFE')
        {
            return redirect('https://www.tuneprotect.co.th/Maintenance.html');
        }

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
        $this->bodyData['selected'] = $request->session()->get('selected');

        return $this->genStatusPage_Portal(ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU);
    }

}


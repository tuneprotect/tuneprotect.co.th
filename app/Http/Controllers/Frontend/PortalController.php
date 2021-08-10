<?php


namespace App\Http\Controllers\Frontend;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;
// use App\Http\Requests\MemberidRequest;

class PortalController extends ProductController
{
    protected $controller = 'portal';
    public function index($link = null, $selected = null,$portal_key = null)
    {
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);

        $this->bodyData['controller'] = $this->controller;

        $massage_key = $portal_key;
        $status_api = false;
        $this->bodyData['portal_key'] = $portal_key;

        //Check username and password , web portal.
        $apiResult = $this->sendToApiPortalLogin($portal_key);
        if (!$apiResult["status"]) {
            $status_api = false;
            $massage_key = "Error : " . $apiResult["message"];
        }
        else
        {
            $status_api = true;
            $massage_key = "Portal Key : " . $portal_key;

        }
        $this->bodyData['status_api'] = $status_api;
        $this->bodyData['massage_key'] = $massage_key;

        $nopayment_status = false;
        $apiResult2 = $this->sendToApiCheckNoPayment($portal_key);
        if ($apiResult2["status"]) {
            $nopayment_status = true;
        }
        $this->bodyData['nopayment_status'] = $nopayment_status;
        session(['nopayment_status' => $nopayment_status]);




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

        //Check username and password , web portal.
        $apiResult = $this->sendToApiPortalLogin($portal_key);
        if (!$apiResult["status"]) {
            $status_api = false;
            $massage_key = "Error : " . $apiResult["message"];
        }
        else
        {
            $status_api = true;
            $massage_key = "Portal Key : " . $portal_key;

        }
        $this->bodyData['status_api'] = $status_api;
        $this->bodyData['massage_key'] = $massage_key;

        $nopayment_status = false;
        $apiResult2 = $this->sendToApiCheckNoPayment($portal_key);
        if ($apiResult2["status"]) {
            $nopayment_status = true;
        }
        $this->bodyData['nopayment_status'] = $nopayment_status;
        session(['nopayment_status' => $nopayment_status]);

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
        $this->bodyData['doc_no'] = $request->session()->get('doc_no');
        $this->bodyData['return_link'] = $request->session()->get('return_link');
        $this->bodyData['point'] = '';
        // dd($this->bodyData['return_link']);

        return $this->genStatusPage_Portal(ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU);
    }

}


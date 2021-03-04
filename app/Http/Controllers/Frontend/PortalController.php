<?php


namespace App\Http\Controllers\Frontend;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;
// use App\Http\Requests\MemberidRequest;

class PortalController extends ProductController
{
    protected $controller = 'portal';

    public function index($link = null, $selected = null,$portal_key = null)
    {
        //Get current url.
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);

        //dd(session('return_link'));

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

        //dd($this->bodyData['status_api']);

        return parent::index($link,$selected);
        
    }

    public function thankyou(Request $request)
    {
        $this->bodyData['doc_no'] = $request->session()->get('doc_no');
        $this->bodyData['return_link'] = $request->session()->get('return_link');
        
        //dd($this->bodyData['return_link']);

        return $this->genStatusPage(ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU);
    }

}


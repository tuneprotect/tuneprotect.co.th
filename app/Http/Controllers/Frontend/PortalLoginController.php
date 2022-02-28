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

class PortalLoginController extends BaseController
{
    public function index()
    {
        $this->template->setFootJS(mix("/js/frontend/portallogin.js"));
        return $this->genView('frontend.page.portal_login');
    }

    public function userPortalLogin(Request $request)
    {
        $username = $request->get('ctrl_username');
        $password = $request->get('ctrl_password');
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'userPortalLogin', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'username' => $username,
                'password' => $password,
            ])
        ]);
        $apiResult =json_decode($response->getBody()->getContents(), true);
        $this->bodyData['message'] = $apiResult["message"];
        if (!$apiResult["status"]) {
            $this->bodyData['status'] = false;
            session(['status' => false]);
            return $this->index();
        }
        else
        {
            session(['status' => true]);
            $this->bodyData['status']= true;
            return (new PolicyEnquiryController)->index();
        }

        return $this->index();
    }


}

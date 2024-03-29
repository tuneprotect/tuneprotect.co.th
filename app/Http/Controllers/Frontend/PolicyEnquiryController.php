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

class PolicyEnquiryController extends BaseController
{
    public function index()
    {
        if (session('status')) {
            if(session('status') === true){
                $this->bodyData['group_p'] = session('group_p');
                $this->template->setFootJS(mix("/js/frontend/policyenquiry.js"));
                return $this->genView('frontend.page.policyenquiry');
            }
        }

        return (new PortalLoginController())->index();

    }

    public function policyEnquiry(Request $request)
    {
        $data = $request->all();

        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'PolicyEnquiry_CallTHI', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode($data)
        ]);
        $res = (object)json_decode($response->getBody()->getContents(), true);

        return response()->json([
            'status' => $res->status ,
            'message' => $res->message,
            'data' => $res->data
        ]);
    }

    public function CheckPolicyEnquiry(Request $request)
    {
        //echo var_dump(1);exit();
        $data = $request->all();

        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'CheckPolicyEnquiry', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode($data)
        ]);
        $res = (object)json_decode($response->getBody()->getContents(), true);

        return response()->json([
            'status' => $res->status ,
            'message' => $res->message,
            'data' => $res->data
        ]);
    }

    public function Unlock($Nationality =null)
    {

        if (session('status')) {
            $client = new Client();
            $response = $client->request('POST', config('tune-api.url') . 'UnlockPolicy', [
                'auth' => [config('tune-api.user'), config('tune-api.password')],
                'headers' => [
                    'Content-Type' => 'application/json'
                ],
                'body' => json_encode([
                    'fdNationalID' => $Nationality,
                    'username' => session('username_p'),
                    'password' => session('password_p'),
                ])
            ]);

            $apiResult =json_decode($response->getBody()->getContents(), true);

            if ($apiResult["status"]) {
                $this->bodyData['UnlockStatus'] = 'Unlock Success';
                $this->bodyData['UnlockDisplay'] = 'Nationality/Passport ID '.$Nationality;
            }
            else{
                $this->bodyData['UnlockStatus'] = 'Unlock Fail';
                $this->bodyData['UnlockDisplay'] = $apiResult["message"];
            }

        }
        else{
            $this->bodyData['UnlockStatus'] = 'Unlock Fail';
            $this->bodyData['UnlockDisplay'] = 'Unauthenticated. please login';
        }

        $this->bodyData['partner'] = '';
        $this->bodyData['selected'] = '';
        return $this->genView('frontend.page.Unlock');

//        $data = $request->all();
//
//        $client = new Client();
//        $response = $client->request('POST', config('tune-api.url') . 'CheckPolicyEnquiry', [
//            'auth' => [config('tune-api.user'), config('tune-api.password')],
//            'headers' => [
//                'Content-Type' => 'application/json'
//            ],
//            'body' => json_encode($data)
//        ]);
//        $res = (object)json_decode($response->getBody()->getContents(), true);
//
//        return response()->json([
//            'status' => $res->status ,
//            'message' => $res->message,
//            'data' => $res->data
//        ]);
    }


}

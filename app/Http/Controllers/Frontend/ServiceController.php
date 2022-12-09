<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ServiceController extends BaseController
{
    public function index($link = null)
    {
        if (!empty($link)) {
            return $this->genDetail($link);
        }

        abort(404);
    }


    protected function genDetail($link)
    {
        $linkTemp = $link;
        if(strtolower($link) == 'health2goview')
        {
            $link = 'health2go';
        }
        if(strtolower($link) == 'tax-deduction')
        {
            return redirect('/taxdeduction');
        }
        if(strtolower($link) == 'pumfreepa')
        {
            return redirect('/pumpfreepa');
        }
        if(strtolower($link) == 'pump')
        {
            if($this->locale == 'en')
            {
                return redirect() -> to('https://w5.tuneprotect.co.th/pump/');
            }else {
                return redirect() -> to('https://w5.tuneprotect.co.th/pump/index_th.html');
            }           
        }
//        if(strtolower($link) == 'bloodtest')
//        {
//            return redirect('/bloodtest');
//        }

        $content = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_SERVICE_MY_HEALTH)
            ->with('locales')
            ->where('friendly_url', $link)
            ->whereRaw(ProjectEnum::isPublish())
            ->first();
        $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTENT_FAQ, $content->id);
        $this->template->setFootJS(mix("/js/frontend/service.js"));

        if ($content) {
            if(strtolower($link) == 'bloodtest')
            {
//                $this->bodyData['no_share'] = true;
                $this->bodyData['bloodTestComponent'] = 'frontend.page.blood_test';
            }
           

            $this->bodyData['extraComponent'] = 'frontend.component.mso-form';

            if(strtolower($linkTemp) == 'health2goview')
            {
                return $this->genStaticPage($content, 'frontend.page.serviceview');
            }
            return $this->genStaticPage($content, 'frontend.page.service');
        }

    }

    public function checkPolicy(Request $request)
    {

        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'CheckPolicyCI', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'Policy_No' => $request->input('policy')
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);

    }

    public function sendContact(Request $request)
    {

        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'ContractMSO', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'Policy_No' => $request->input('policy'),
                'Name' => $request->input('name'),
                'Email' => $request->input('email'),
                'Telephone' => $request->input('tel'),
                'Text' => $request->input('message'),
                'Language' => $this->locale,
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);

    }
    /*
    public function TestCallmyHomeSmart(Request $request)
    {

        $client = new Client();
        $response = $client->request('POST', 'http://webtest1.tuneinsurance.co.th/tunepolicy/api/WEBSITE' . 'myHomeSmartPackage', [
            'auth' => ['TPTWEBSITE', 'TPTWEBSITE@123'],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            
        ]);
        
        return json_decode($response->getBody()->getContents(), true);

    }
*/
    public function claiminfo()
    {
        return $this->genView('frontend.page.claim_info');

    }

    public function sendBloodTestOTP(Request $request)
    {
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'SendBloodTestOTP', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'IDCard' => $request->input('IDCard'),
                'Policy_No' => $request->input('Policy_No'),
                'Mobile' => $request->input('Mobile'),
                'Lang' => $request->input('Lang'),
            ])
        ]);

        return json_decode($response->getBody()->getContents(), true);

    }
    
    

}

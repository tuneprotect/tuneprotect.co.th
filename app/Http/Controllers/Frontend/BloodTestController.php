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

class BloodTestController extends BaseController
{
    public function index($link = null)
    {
        if (!empty($link)) {
            if(strtolower($link)!=='bloodcheck')
            {
                abort(404);
            }
            $link = 'bloodtest';
            $content = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_SERVICE_MY_HEALTH)
                ->with('locales')
                ->where('friendly_url', $link)
                ->whereRaw(ProjectEnum::isPublish())
                ->first();
            $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTENT_FAQ, $content->id);
            $this->template->setFootJS(mix("/js/frontend/bloodtest.js"));

            if ($content) {
                $this->bodyData['bloodTestComponent'] = 'frontend.page.blood_check';
                return $this->genStaticPage($content, 'frontend.page.service');
            }
        }

        abort(404);


    }

    public function CheckBloodTestCode(Request $request)
    {
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'CheckBloodTestCode', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'RefCode' => $request->input('RefCode'),
                'Lang' => $request->input('Lang'),
            ])
        ]);

//        return json_decode($response->getBody()->getContents(), true);

        $res = (object)json_decode($response->getBody()->getContents(), true);

        session(['status' => $res->status]);

        return response()->json([
            'status' => $res->status ,
            'message' => $res->message,
            'data' => $res->data
        ]);


    }

    public function UsedBloodTest($RefCodeHospital =null)
    {
        if (session('status')) {
            $client = new Client();
            $response = $client->request('POST', config('tune-api.url') . 'UsedBloodTest', [
                'auth' => [config('tune-api.user'), config('tune-api.password')],
                'headers' => [
                    'Content-Type' => 'application/json'
                ],
                'body' => json_encode([
                    'RefCodeHospital' => $RefCodeHospital,
                ])
            ]);

            $apiResult =json_decode($response->getBody()->getContents(), true);

            if ($apiResult["status"]) {
                $this->bodyData['UnlockStatus'] = 'Thank you';
                if($this->locale === 'en')
                {
                    $this->bodyData['UnlockDisplay'] = 'You have already pressed the right to use the free blood test service.';
                }
                else{
                    $this->bodyData['UnlockDisplay'] = 'ท่านได้กดใช้สิทธิ์บริการตรวจเลือดฟรีเป็นที่เรียบร้อย';
                }

            }
            else{
                $this->bodyData['UnlockStatus'] = 'Fail';
                $this->bodyData['UnlockDisplay'] = $apiResult["message"];
            }

        }
        else{
            $this->bodyData['UnlockStatus'] = 'Fail';
            $this->bodyData['UnlockDisplay'] = 'Unauthenticated. please login';
        }

        $this->bodyData['partner'] = '';
        $this->bodyData['selected'] = '';
        return $this->genView('frontend.page.BloodTestThank');

    }


}

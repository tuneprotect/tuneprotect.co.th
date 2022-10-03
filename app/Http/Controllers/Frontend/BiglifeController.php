<?php


namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;

class BiglifeController  extends BaseController
{
    protected $controller = 'biglife';
    public function index()
    {

            $this->bodyData['headertext'] = __('product.biglife.headertext');
            $this->bodyData['labeltext'] = __('product.biglife.labeltext');
            $this->bodyData['placeholdertext'] = __('product.biglife.placeholdertext');
            $this->bodyData['buttontext'] = __('product.biglife.buttontext');



        $content = WebContent::where('type_id', ProjectEnum::STATIC_PAGE_BIGLIFE_POINT)
            ->with('locales')
            ->whereRaw(ProjectEnum::isPublish())
            ->first();

        $this->template->setFootJS(mix("/js/frontend/biglife.js"));
        $this->bodyData['content'] = $content;
        $this->setStaticPageHeader($content);
        return $this->genView('frontend.page.biglife');

    }


     public function Validation(Request $request)
     {
         $memberId = $request->get('memberid');
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

         $apiResult =json_decode($response->getBody()->getContents(), true);

         $message1 = __('product.biglife.message1');
         $message2 = __('product.biglife.message2');
         $message3 = __('product.biglife.message3');

         $this->bodyData['massage_key'] = $message1;
         $this->bodyData['massage_alert'] = $message2;
         $this->bodyData['massage_confirm'] = $message3;

         if (!$apiResult["status"]) {
             $this->bodyData['member_id'] = '';
             $this->bodyData['status_api'] = false;

             if($apiResult["message"]==='DUPLICATE'){
                 $this->bodyData['massage_key'] = __('product.biglife.message5');
             }

             return $this->index();

         }
         else
         {
             $this->bodyData['member_id'] = $memberId;
             $this->bodyData['status_api']= true;

             $content = WebContent::where('type_id', ProjectEnum::STATIC_PAGE_BIGLIFE_POINT)
                 ->with('locales')
                 ->whereRaw(ProjectEnum::isPublish())
                 ->first();

             $this->template->setFootJS(mix("/js/frontend/biglife.js"));
             $this->bodyData['content'] = $content;
             $this->setStaticPageHeader($content);
             return $this->genView('frontend.page.biglife_survey');

         }
     }

    public function SendMessage(Request $request)
    {
        $data = $request->all();

        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'SendMessageOTP', [
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


    public function sendSurvey(Request $request)
    {
//        $data = $request->all();

        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'SendBiglifeSuyvey', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'Name' =>  $request->get('name'),
                'Lastname' =>  $request->get('lastname'),
                'Mobile' =>  $request->get('mobile'),
                'Email' =>  $request->get('email'),
                'Lang' =>  $request->get('lang'),
            ])
        ]);

        $res = (object)json_decode($response->getBody()->getContents(), true);
        return response()->json([
            'status' => $res->status ,
            'message' => $res->message,
            'data' => $res->data
        ]);

    }

    public function thankyou(Request $request)
    {
        $data = json_encode([
            'MemberID' =>  $request->input('member_id'),
            'RefCode' =>  $request->input('OTP'),
            'Name' =>  $request->input('name'),
            'Lastname' =>  $request->get('lastname'),
            'Mobile' =>  $request->get('mobile'),
            'Email' =>  $request->get('email'),
            'Lang' =>  $this->locale,
            'Question1'=> [
                'Question' =>  __('product.biglife.question1'),
                __('product.biglife.question11') => $request->get('ctrl_question11'),
                __('product.biglife.question12') => $request->get('ctrl_question12'),
                __('product.biglife.question13') => $request->get('ctrl_question13'),
                __('product.biglife.question14') => $request->get('ctrl_question14'),
                ],
            'Question2'=> [
                'Question' =>  __('product.biglife.question2'),
                __('product.biglife.question21') => $request->get('ctrl_question21'),
                __('product.biglife.question22') => $request->get('ctrl_question22'),
                __('product.biglife.question23') => $request->get('ctrl_question23'),
                __('product.biglife.question24') => $request->get('ctrl_question24'),
            ],
            'Question3'=> [
                'Question' =>  __('product.biglife.question3'),
                'Answer' => $request->get('ctrl_question3'),
            ],

        ]);

        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'SendBiglifeSuyvey', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => $data
        ]);

        $apiResult =json_decode($response->getBody()->getContents(), true);
        if (!$apiResult["status"]) {
            $this->bodyData['doc_no'] =$apiResult["message"];
            return $this->genStatusPage_AddOn(ProjectEnum::STATIC_PAGE_ERROR);
        }

        return $this->genStatusPage_AddOn(ProjectEnum::STATIC_PAGE_BIGLIFE_POINT_THANK_YOU);
    }

    protected function genStatusPage_AddOn($typeId)
    {
        $content = WebContent::where('type_id', $typeId)
            ->whereRaw(ProjectEnum::isPublish())
            ->with(['locales' => function ($q) {
                $q->where('locale', $this->locale);
            }])->first();

        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->template->setBody('id', 'thankyou_page');
        $this->bodyData['content'] = $content;
        $this->setStaticPageHeader($content);
        return $this->genView('frontend.page.thank_addon');
    }

}


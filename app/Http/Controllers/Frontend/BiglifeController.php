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

            if($this->locale !='th')
            {
           
                $this->bodyData['headertext'] = 'Fill in information';
                $this->bodyData['labeltext'] = 'Please enter your airasia member ID';
                $this->bodyData['placeholdertext'] = 'Enter your airasia member ID';
                $this->bodyData['buttontext'] = 'Enter';

                /*
                $this->bodyData['massage1" => "กรุณาใส่หมายเลขสมาชิก airasia ที่ถูกต้องเพื่อทำรายการต่อไป",
                $this->bodyData['massage2" => "คำเตือน",
                $this->bodyData['massage3" => "ยืนยัน",
                $this->bodyData['massage4" => "กรุณาตอบคำถามให้ครบทุกข้อและกดยินยอมเพื่อเพื่อดำเนินการต่อไป",
                $this->bodyData['header" => "กรุณาใส่ข้อมูลสมาชิก",
                */
                $this->bodyData['name'] = 'First Name';
                $this->bodyData['name_placeholder'] = 'Enter your first name';
                $this->bodyData['lastname'] = 'Last Name';
                $this->bodyData['lastname_placeholder'] = 'Enter your last name';
                $this->bodyData['mobile'] = 'Mobile Phone';
                $this->bodyData['mobile_placeholder'] = 'Enter your mobile phone';
                $this->bodyData['email'] = 'Email Address';
                $this->bodyData['email_placeholder'] = 'Enter your email address';
                $this->bodyData['question'] = 'Please complete all the questions below:';
                $this->bodyData['question1'] = '1. What would you do if you had a vacation of more than 5 days? ';
                $this->bodyData['question11'] = 'Stay safe at home due to COVID-19 ';
                $this->bodyData['question12'] = 'Taking a day trip';
                $this->bodyData['question13'] = 'Going on a domestic overnight trip';
                $this->bodyData['question14'] = 'Taking oversea trip';
                $this->bodyData['question2'] = '2. What kinds of activities do you like to do when you travel?';
                $this->bodyData['question21'] = 'Taking a photo';
                $this->bodyData['question22'] = 'Shopping';
                $this->bodyData['question23'] = 'Natural Sights';
                $this->bodyData['question24'] = 'Temple Trip';
                $this->bodyData['question3'] = '3. Do you think that travel insurance is necessary when traveling? ';
                $this->bodyData['question31'] = 'Yes, it is.';
                $this->bodyData['question32'] = 'No, it is not necessary.';
               
                /*$this->bodyData['consent_confirm'] = 'Name';
                $this->bodyData['OTP_confirm1'] = 'Name';
                $this->bodyData['OTP_confirm2'] = 'Name';
                $this->bodyData['OTP_confirm3'] = 'Name';
                $this->bodyData['OTP_confirm4'] = 'Name';
                $this->bodyData['OTP_confirm5'] = 'Name';
                $this->bodyData['OTP_confirm6'] = 'Name';
                */
            }

//            $this->bodyData['headertext'] = 'Fill in information';
//            $this->bodyData['labeltext'] = 'Please enter your aiaasia member ID';
//            $this->bodyData['placeholdertext'] = 'Enter your aiaasia member ID';
//            $this->bodyData['buttontext'] = 'Enter';


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


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

        if($this->locale =='th')
        {
            $this->bodyData['headertext'] = 'กรุณากรอกรายละเอียด';
            $this->bodyData['labeltext'] = 'กรุณาใส่หมายเลขสมาชิก airasia';
            $this->bodyData['placeholdertext'] = 'หมายเลขสมาชิก airasia';
            $this->bodyData['buttontext'] = 'ดำเนินการต่อ';

        }
        else{
            $this->bodyData['headertext'] = 'Fill in information';
            $this->bodyData['labeltext'] = 'Please enter your aiaasia member ID';
            $this->bodyData['placeholdertext'] = 'Enter your aiaasia member ID';
            $this->bodyData['buttontext'] = 'Enter';
        }




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
         $response = $client->request('POST', config('tune-api.url') . 'Validate', [
             'auth' => [config('tune-api.user'), config('tune-api.password')],
             'headers' => [
                 'Content-Type' => 'application/json'
             ],
             'body' => json_encode([
                 'memberId' => $memberId
             ])
         ]);

         $apiResult =json_decode($response->getBody()->getContents(), true);

         if (!$apiResult["status"]) {

             $Error_massage = "Please enter a valid airasia member ID";
             $Error_massage_alert = "Warning";
             $Error_massage_confirm = "OK";
             if($this->locale =='th'){
                 $Error_massage = "กรุณาใส่หมายเลขสมาชิก airasia ที่ถูกต้องเพื่อทำรายการต่อไป";
                 $Error_massage_alert = "คำเตือน";
                 $Error_massage_confirm='ยืนยัน';
             }



             $this->bodyData['member_id'] = '';
             $this->bodyData['status_api'] = false;
             $this->bodyData['massage_key'] = $Error_massage;
             $this->bodyData['massage_alert'] = $Error_massage_alert;
             $this->bodyData['massage_confirm'] = $Error_massage_confirm;
             return $this->index();

         }
         else
         {
             $this->bodyData['member_id'] = $memberId;
             $this->bodyData['status_api']= true;
             $this->bodyData['massage_key'] = '';
             $this->bodyData['massage_alert'] = '';
             $this->bodyData['massage_confirm'] = '';

             return $this->genView('frontend.page.airasia_survey');

         }
     }
//
//    public function thankyou(Request $request)
//    {
////        $this->bodyData['doc_no'] = $request->session()->get('doc_no');
////
////        if($this->locale =='th')
////        {
////            $this->bodyData['point'] = '<p>ท่านได้รับคะแนน BIG Point '. $request->session()->get('point') .' คะแนน จากการซื้อครั้งนี้ </p>';
////        }
////        else{
////            $this->bodyData['point'] = '<p>You will earn '. $request->session()->get('point') .' Big Point from this purchase. </p>';
////        }
////
////        $this->bodyData['return_link'] = $request->session()->get('return_link');
////        return $this->genStatusPage_Portal(ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU);
//
//    }
//


}


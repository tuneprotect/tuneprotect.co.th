<?php


namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;
// use App\Http\Requests\MemberidRequest;

class BiglifeController  extends ProductController
{
    protected $controller = 'biglife';
    public function index($link = null, $selected = null)
    {
//        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//        session(['return_link' => $return_link]);
//
//        //Fix code wording
//
//        if($this->locale =='th')
//        {
//            $this->bodyData['headertext'] = 'ระบุรายละเอียด';
//            $this->bodyData['labeltext'] = 'กรุณากรอกหมายเลขสมาชิก BIG ของท่านเพื่อดำเนินการต่อและสะสม BIG Points';
//            $this->bodyData['placeholdertext'] = 'BIG Membership Number';
//            $this->bodyData['buttontext'] = 'ล็อกอิน';
//
//        }
//        else{
//            $this->bodyData['headertext'] = 'Fill in information';
//            $this->bodyData['labeltext'] = 'Please Enter your BIG Membership Number';
//            $this->bodyData['placeholdertext'] = 'BIG Membership Number';
//            $this->bodyData['buttontext'] = 'Login';
//        }
//
////        Defualt Cocid for load image and slideshow
//        $selected = 'ONCOVIDA';
//        $link = 'coronavirus-covid-19-insurance';
//        $this->bodyData['selected'] = $selected;
//
//        $this->bodyData['current_product'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_PRODUCT)
//            ->where('friendly_url', $link)
//            ->with(['locales', 'productPackage' => function ($q) {
//                $q->with('locales');
//            }])
//            ->whereRaw(ProjectEnum::isPublish())
//            ->first();
//
//        foreach ($this->bodyData['current_product']->productPackage as $v) {
//            if ($v->code === $selected) {
//                $this->setStaticPageHeader($v);
//                $this->bodyData['slideshow'] = [$this->bodyData['current_product']];
//            }
//        }
//
////        foreach ($this->bodyData['current_product']->productPackage as $v) {
////            if ($v->code === $this->bodyData['selected']) {
////                $this->bodyData['current_package'] = $v;
////            }
////        }
//
//
//        $this->template->setFootJS(mix("/js/frontend/biglife.js"));
//        return $this->genView('frontend.page.biglife_validation');

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

//         dd(config('tune-api.url'));


         $apiResult =json_decode($response->getBody()->getContents(), true);

         if (!$apiResult["status"]) {
             $this->bodyData['member_id'] = '';
             $this->bodyData['status_api'] = false;
             $this->bodyData['massage_key'] = "Error : " . $apiResult["message"];
             return $this->index();
         }
         else
         {
             $this->bodyData['member_id'] = $memberId;
             $this->bodyData['status_api']= true;
             $this->bodyData['massage_key'] = '';

              //coronavirus-covid-19-insurance/ONCOVIDA
             //Covid only

             return parent::index('coronavirus-covid-19-insurance','ONCOVIDA',$memberId);


//             //Package list
//
////             dd(ProjectEnum::WEB_CONTENT_PRODUCT);
//
////             dd(ProjectEnum::isPublish());
//
//             $this->bodyData['current_product'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_PRODUCT)
//                 ->where('friendly_url', 'coronavirus-covid-19-insurance')
//                 ->with(['locales', 'productPackage' => function ($q) {
//                     $q->with('locales');
//                 }])
//                 ->whereRaw(ProjectEnum::isPublish())
//                 ->first();
//
//             //ExClude FAQ.
//
////             dd($this->bodyData['current_product']);
//
//             $this->setStaticPageHeader($this->bodyData['current_product']);
//             $this->template->setFootJS(mix("/js/frontend/main.js"));
//
//             //return $this->genListPage();
//             return $this->genView('frontend.page.biglife_product_main');



         }

         return $this->index();

     }

    public function thankyou(Request $request)
    {
        $this->bodyData['doc_no'] = $request->session()->get('doc_no');

        if($this->locale =='th')
        {
            $this->bodyData['point'] = '<p>ท่านได้รับคะแนน BIG Point '. $request->session()->get('point') .' คะแนน จากการซื้อครั้งนี้ </p>';
        }
        else{
            $this->bodyData['point'] = '<p>You will earn '. $request->session()->get('point') .' Big Point from this purchase. </p>';
        }

        $this->bodyData['return_link'] = $request->session()->get('return_link');
        return $this->genStatusPage_Portal(ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU);
    }



}


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
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);


//        Defualt Cocid for load image and slideshow
        $selected = 'ONCOVIDA';
        $link = 'coronavirus-covid-19-insurance';
        $this->bodyData['selected'] = $selected;

        $this->bodyData['current_product'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_PRODUCT)
            ->where('friendly_url', $link)
            ->with(['locales', 'productPackage' => function ($q) {
                $q->with('locales');
            }])
            ->whereRaw(ProjectEnum::isPublish())
            ->first();

        foreach ($this->bodyData['current_product']->productPackage as $v) {
            if ($v->code === $selected) {
                $this->setStaticPageHeader($v);
                $this->bodyData['slideshow'] = [$this->bodyData['current_product']];
            }
        }

//        foreach ($this->bodyData['current_product']->productPackage as $v) {
//            if ($v->code === $this->bodyData['selected']) {
//                $this->bodyData['current_package'] = $v;
//            }
//        }


        $this->template->setFootJS(mix("/js/frontend/biglife.js"));
        return $this->genView('frontend.page.biglife_validation');

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


//         foreach ($apiResult['data'] as $k => $v) {
//             if ($k === 'code')
//             {
//                 dd($v);
//             }
//         }
//         dd($apiResult->{'message'});

//         $arrResult[] = $apiResult['message'];
//         array_push($arrResult,$apiResult['data']["code"]);
//         $msg = implode(', ', $arrResult);
//         $msgs  = explode(', ', $msg);
//         dd($msgs[0]);

//         $PolicyArr[] = array('00D/TAL/6310/000007','00D/TAL/6310/000008','00D/TAL/6310/000009');

//
//         $PolicyArr[] = '00D/TAL/6310/000007';
//         $PolicyArr[] = '00D/TAL/6310/000008';
//         $PolicyArr[] = '00D/TAL/6310/000009';
//
//         $Point = 0;
//
//         for ($x = 0; $x <= 10; $x++) {
//             $Point = $Point + 10;
//         }
//
//
////         $arrResult[] = array($PolicyArr,$Point);
//
//         $arrResult[] = $PolicyArr;
//         $arrResult[] = $Point;
//
//         dd($arrResult[0]);

//         $Point = array(100,200,300);

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


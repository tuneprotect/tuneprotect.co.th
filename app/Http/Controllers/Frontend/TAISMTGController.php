<?php


namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;
// use App\Http\Requests\MemberidRequest;

class TAISMTGController  extends ProductController
{
    protected $controller = 'TAISMTG';
    public function index($link = null, $selected = null)
    {
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);

        $partner = 'TG';
        $this->bodyData['partner'] = $partner;
        session(['partner' => $partner]);
        $this->bodyData['headertext'] = 'Fill in information';
        $this->bodyData['labeltext'] = 'Please Enter your code';
        $this->bodyData['placeholdertext'] = 'Enter your code';
        $this->bodyData['buttontext'] = 'Check Code';

        $selected = 'TAISMTG';
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

        $this->template->setFootJS(mix("/js/frontend/taismtg.js"));
        return $this->genView('frontend.page.taismtg_validation');

    }


     public function Validation(Request $request)
     {
         $partner = 'TG';
         $this->bodyData['partner'] = $partner;
         session(['partner' => $partner]);

         $memberId = $request->get('memberid');
         $client = new Client();
         $response = $client->request('POST', config('tune-api.url') . 'ValidateCode', [
             'auth' => [config('tune-api.user'), config('tune-api.password')],
             'headers' => [
                 'Content-Type' => 'application/json'
             ],
             'body' => json_encode([
                 'memberId' => $memberId
             ])
         ]);
         $apiResult =json_decode($response->getBody()->getContents(), true);

         //dd($apiResult);
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

             return parent::index('coronavirus-covid-19-insurance','TAISMTG',$memberId);

         }

//         dd($memberId);

         return $this->index();

     }

    public function thankyou(Request $request)
    {
        $partner = 'TG';
        $this->bodyData['partner'] = $partner;
        session(['partner' => $partner]);

        $this->bodyData['doc_no'] = $request->session()->get('doc_no');
        $this->bodyData['selected'] = 'TAISMTG';
        $this->bodyData['return_link'] = "/en/TAISMTG";
        $this->bodyData['fdKeys'] = config('tune-api.portal_taismtg') ;


        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->template->setBody('id', 'thankyou_page');
        return $this->genView('frontend.page.thanktg');

    }



}


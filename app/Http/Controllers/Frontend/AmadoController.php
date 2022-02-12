<?php


namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;

class AmadoController  extends ProductController
{
    protected $controller = 'amado';
    public function index($link = null, $selected = null)
    {
        //TUNE_API_AMADO_LINK=https://w3.tuneprotect.co.th/WebPortal/Pages/CovidRM.aspx
//        return redirect(config('tune-api.amado_link'));

//        return redirect('http://webtest1.tuneinsurance.co.th/WebPortal/Pages/CovidRM.aspx');
//        return redirect('https://www.tuneinsurance.co.th/WebPortal/Pages/CovidRM.aspx');
//        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//        session(['return_link' => $return_link]);
//
//        if($this->locale =='en')
//        {
//            $this->bodyData['headertext'] = 'Fill in information';
//            $this->bodyData['labeltext'] = 'Please Enter your promotion code';
//            $this->bodyData['placeholdertext'] = 'Promotion Code';
//            $this->bodyData['buttontext'] = 'Process';
//        }
//
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
//        $this->template->setFootJS(mix("/js/frontend/amado.js"));
//        return $this->genView('frontend.page.amado_main');

    }

//    public function Validation(Request $request)
//    {
//        $promocode = $request->get('promocode');
//        $client = new Client();
//        $response = $client->request('POST', config('tune-api.url') . 'PromoCodeValidation', [
//            'auth' => [config('tune-api.user'), config('tune-api.password')],
//            'headers' => [
//                'Content-Type' => 'application/json'
//            ],
//            'body' => json_encode([
//                'Code' => $promocode
//            ])
//        ]);
//
//        $apiResult =json_decode($response->getBody()->getContents(), true);
//
//        if (!$apiResult["status"]) {
//            $this->bodyData['promocode'] = '';
//            $this->bodyData['status_api'] = false;
//
//            $apiData = $apiResult['data'];
//            $apiErrorCode = $apiData["error_code"];
//            $apiErrorMsg = '';
//            if ($apiErrorCode === 'E0001') {
//                $apiErrorMsg = __('product.error.promocode_invalid');
//            }
//            elseif ($apiErrorCode === 'E0002') {
//                $apiErrorMsg = __('product.error.promocode_inused') . ' ' . $apiData["data"];
//            }
//            elseif ($apiErrorCode === 'E0000') {
//                $apiErrorMsg = __('product.error.promocode_invalid') . ' ' . $apiData["message"];;
//            }
//
//            $this->bodyData['massage_key'] = $apiErrorMsg;
//            return $this->index();
//        }
//        else
//        {
//            $this->bodyData['promocode'] = $promocode;
//            $this->bodyData['status_api']= true;
//            $this->bodyData['massage_key'] = '';
//
//            return parent::index('coronavirus-covid-19-insurance','ONCOVIDA',$promocode);
//
//        }
//
//        return $this->index();
//
//    }



}


<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\BAOWANObject;
use App\Enum\ONCSHCObject;
use App\Enum\ONCSHCGVObject;
use App\Enum\ONCSHCSCObject;
use App\Enum\ONCSHCAAObject;
use App\Enum\Base\BaseInsuranceObject;
use App\Enum\Base\BaseTAObject;
use App\Enum\CIObject;
use App\Enum\COVIDAObject;
use App\Enum\COVIDLObject;
use App\Enum\ONTALNObject;
use App\Enum\VACINAObject;
use App\Enum\VSAFEAObject;
use App\Enum\FIMPObject;
use App\Enum\PAObject;
use App\Enum\ProjectEnum;
use App\Enum\TGCVLPObject;
use App\Enum\TAISMTGObject;
use App\Enum\TGISMObject;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\BuyLog;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use phpDocumentor\Reflection\Project;
use Illuminate\Support\Str;

class ProductController extends BaseController
{

    protected $thankYouParam = '';
    protected $controller = 'product';
    protected $payment = 'CC,FULL';
    protected $ipp_interest_type = "";
    protected $use_effective = 'N';
    protected $product_agent_code = '';
    public function index($link = null, $selected = null, $portal_key = null)
    {
        $product_agent_code = $selected . '/' . $portal_key;
        $apiResult = $this->sendToApiPortalLogin($portal_key);
        if ($apiResult["status"]) {
            $controller = 'portal';
            return redirect()->route('current', ['locale' => $this->locale, 'controller' => $controller, 'func' => $link, 'params' => $product_agent_code]);
        }

        if (!empty($selected)) {
            if (false !== $pos = strpos($selected, '?')) {
                $selected = substr($selected, 0, $pos);
            }
        } else {
            if (false !== $pos = strpos($link, '?')) {
                $link = substr($link, 0, $pos);
            }
        }

        $this->bodyData['controller'] = $this->controller;
        $this->bodyData['use_effective'] = $this->use_effective;

        if (empty($link)) {
            return redirect("/" . $this->locale);
        }

        if (in_array($selected, ['ONCANCER'])) {
            return redirect()->away(config('project.e_cancer_link'));
        }


        //Close product for approve 06/11/2023
        //if (in_array($selected, ['ONTAOB', 'ONTATO', 'ONB2BTA'])) {
        //    $error_page = ProjectEnum::STATIC_PAGE_CLOSE_PRODUCT;
        //    return $this->genStatusPage($error_page);
        //}

        if (in_array($selected, ['CVISAFE', 'ONCOVIDA'])) {
            $selected = "CVIS22JAN";
            return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }
        if (in_array($selected, ['ONVSAFEA', 'ONVS22JAN'])) {
            $selected = "ONVSAFE";
            return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }
        if (in_array($selected, ['ONVACINA'])) {
            $selected = "ONVSUREA";
            return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }

        if (in_array($selected, ['TAIPCRN', 'TAIPOCT22', 'TAIPOCT22AA', 'ONTALN', 'ONCOVIDL', 'ONTA', 'TGCVLP', 'TAISM', 'TAISMC', 'ONTGISM', 'TAISMTG', 'ONTAISMB2B']) && $this->locale === 'th') {
            return redirect()->route('current', ['locale' => 'en', 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }

        if (in_array($selected, ['ONTAOBB2B'])) {
            $selected = "ONB2BTA";
            //return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }
        if (in_array($selected, ['ONCSH'])) {
            $selected = "ONCSHC";
            return $this->genView('frontend.page.redirect_chillsure');
            //return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }
        if (in_array($selected, ['ONCSHAA'])) {
            $selected = "ONCSHCAA";
            return $this->genView('frontend.page.redirect_chillsure');
            //return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }
        if (in_array($selected, ['ONCSHSC'])) {
            $selected = "ONCSHCSC";
            return $this->genView('frontend.page.redirect_chillsure'); //return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }
        if (in_array($selected, ['ONCSHGV'])) {
            $selected = "ONCSHCGV";
            return $this->genView('frontend.page.redirect_chillsure'); //return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }

        $this->getProductDetail($link, $selected);

        if ($selected) {
            //dd($selected));      
            return $this->genDetailPage($selected);
        } else {
            //return $this->genDetailPage($selected);
            $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTENT_FAQ, $this->bodyData['current_product']->id);
            return $this->genListPage();
        }
    }

    public function form($link = null, $selected = null, $portal_key = null)
    {

        if (!empty($selected)) {
            if (false !== $pos = strpos($selected, '?')) {
                $selected = substr($selected, 0, $pos);
            }
        } else {
            if (false !== $pos = strpos($link, '?')) {
                $link = substr($link, 0, $pos);
            }
        }

        if (empty($link)) {
            return redirect("/" . $this->locale);
        }

        //$product_agent_code = $selected . '/' . $portal_key;
        $apiResult = $this->sendToApiPortalLogin($portal_key);
        if ($apiResult["status"]) {
            $this->controller = 'portal';
            return redirect()->route('current', ["/{$this->locale}/portal/form/{$link}/{$selected}/{$portal_key}"]);
        }

        //Close product for approve 06/11/2023
        //if (in_array($selected, ['ONTAOB', 'ONTATO', 'ONB2BTA'])) {
        //    $error_page = ProjectEnum::STATIC_PAGE_CLOSE_PRODUCT;
        //    return $this->genStatusPage($error_page);
        //}

        $this->bodyData['controller'] = $this->controller;

        if (in_array($selected, ['ONTALN', 'TAIPCRN', 'TAIPOCT22', 'TAIPOCT22AA', 'ONCOVIDL', 'ONTA', 'TGCVLP', 'TAISM', 'TAISMC', 'ONTAISMB2B', 'ONTGISM', 'TAISMTG']) && $this->locale === 'th') {
            return redirect()->route('current', ['locale' => 'en', 'controller' => $this->controller, 'func' => $link, 'params' => $selected]);
        }

        $this->getProductDetail($link, $selected);
        if ($selected) {

            $this->bodyData['overview_link'] = "/{$this->locale}/{$this->controller}/{$link}/{$selected}/{$portal_key}";

            if ($selected === 'CI' || $selected === 'CIGC') {
                $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTENT_FAQ, @$this->bodyData['current_package']->id);
                $this->bodyData['category_leadform'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_LEADFORM_CATEGORY)
                    ->with('locales')
                    ->get();
            }

            return $this->genDetailPage($selected, false);
        } else {
            return redirect("/" . $this->locale . "/" . $this->controller . "/" . $link);
        }
    }

    protected function sendToApiPortalLogin($portal_key)
    {
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'loginPortal', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'KeyValue' => $portal_key
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    protected function getProductDetail($link = null, $selected = null)
    {
        $this->bodyData['current_product'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_PRODUCT)
            ->where('friendly_url', $link)
            ->with(['locales', 'productPackage' => function ($q) {
                $q->with('locales');
            }, 'faq' => function ($q) {
                $q->with('locales');
            }])
            ->whereRaw(ProjectEnum::isPublish())
            ->first();
    }

    protected function genListPage()
    {
        if ($this->bodyData['current_product']->productPackage->first()) {
            $this->setStaticPageHeader($this->bodyData['current_product']);
            $this->template->setFootJS(mix("/js/frontend/main.js"));

            return $this->genView('frontend.page.product_main');
        } else {
            $this->bodyData['contact'] = WebContent::where('type_id', ProjectEnum::STATIC_PAGE_CONTACT_US)
                ->whereRaw(ProjectEnum::isPublish())
                ->with(['locales' => function ($q) {
                    $q->where('locale', $this->locale);
                }])->first();

            $this->bodyData['category_leadform'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_LEADFORM_CATEGORY)
                ->with('locales')
                ->get();
            $this->bodyData['content_contactus'] = $this->setStaticPageHeader(ProjectEnum::STATIC_PAGE_CONTACT_US);
            return $this->genStaticPage($this->bodyData['current_product'], 'frontend.page.product_no_package');
        }
    }

    protected function genDetailPage($selected, $isPage = true)
    {

        if ($selected) {
            $this->bodyData['selected'] = $selected;
            if (isset($this->bodyData['current_product'])) {
                foreach ($this->bodyData['current_product']->productPackage as $v) {
                    if ($v->code === $selected) {
                        $this->setStaticPageHeader($v);
                        $this->bodyData['slideshow'] = [$this->bodyData['current_product']];
                    }
                }
            }
        } else {
            $this->bodyData['selected'] = @$this->bodyData['current_product']->productPackage[0]->code;
            $this->setStaticPageHeader($this->bodyData['current_product']);
        }
        if (isset($this->bodyData['current_product'])) {
            foreach ($this->bodyData['current_product']->productPackage as $v) {
                if ($v->code === $this->bodyData['selected']) {
                    $this->bodyData['current_package'] = $v;
                }
            }
        }

        $packageJson = strtolower($this->bodyData['selected']);
        $this->bodyData['channel'] = "";
        if ($packageJson === 'ci' && $this->controller === 'portal') {
            $this->bodyData['channel'] = "broker";
            $packageJson = "ci_broker";
        }
        //Srikrung

        if (isset($this->bodyData['portal_key'])) {
            if ($this->bodyData['portal_key'] === 'QAVM2LRWBGCXXGSFBQFR6LKW24JXXUJRX8MBNGFRGUSXXTARPQJRX') {
                $packageJson = 'oncovida_old';
            }
            if ($this->bodyData['portal_key'] === 'BQQWAMUX9JDXNTFFD4WZZLQ3NDEXNTFFT6UCXGSF68UXNEKZ24UYN5TRZ2') {
                $packageJson = 'ontalnlite';
            }
        }
        //onb2bta
        if (Storage::disk('public')->exists('json/' . $packageJson . '.json')) {
            $package_detail = json_decode(Storage::disk('public')->get('json/' . $packageJson . '.json'));
            foreach ($package_detail as $k => $v) {
                if (str_starts_with($k, $selected)) {
                    if ($this->locale === 'en') {
                        if ($selected === 'ONVSAFEA') {
                            if ($v->plan->VSAFEA3 !== '-') {
                                $v->plan->VSAFEA3 = __('product.healt2go_plan');
                            }
                            if ($v->plan->VSAFEB2 !== '-') {
                                $v->plan->VSAFEB2 = __('product.healt2go_word');
                            }
                        }
                        if ($selected === 'ONVACINA') {
                            if ($v->plan->VACINA3 !== '-') {
                                $v->plan->VACINA3 = __('product.healt2go_plan');
                            }
                        }
                        if ($selected === 'ONPACA') {
                            if ($v->plan->PADRCA10 !== '-') {
                                $v->plan->PADRCA10 = __('product.healt2go_word');
                            }
                        }
                        if ($selected === 'ONPAKD') {
                            if ($v->plan->PADRKD07 !== '-') {
                                $v->plan->PADRKD07 = __('product.healt2go_word');
                            }
                        }
                        if ($selected === 'ONPASN') {
                            if ($v->plan->PADRSN07 !== '-') {
                                $v->plan->PADRSN07 = __('product.healt2go_word');
                            }
                        }
                        if ($selected === 'ONCOVIDA') {
                            if ($v->plan->COVIDB3 !== '-') {
                                $v->plan->COVIDB3 = __('product.healt2go_word');
                            }
                        }
                        if ($selected === 'ONPACAA') {
                            if ($v->plan->PACAA09 !== '-') {
                                $v->plan->PACAA09 = __('product.healt2go_word');
                            }
                        }
                        if ($selected === 'ONPAKDA') {
                            if ($v->plan->PAKDA06 !== '-') {
                                $v->plan->PAKDA06 = __('product.healt2go_word');
                            }
                        }
                        if ($selected === 'ONPASNA') {
                            if ($v->plan->PASNA07 !== '-') {
                                $v->plan->PASNA07 = __('product.healt2go_word');
                            }
                        }
                        if ($selected === 'CVISAFE') {
                            if ($v->plan->COVCVISAFE4 !== '-') {
                                $v->plan->COVCVISAFE4 = __('product.healt2go_word');
                            }
                        }
                        if ($selected === 'ONTALN') {

                            if (session('partner') === 'LUMA' || session('partner') === 'Luma') {
                            } else {
                                return $this->genView('frontend.page.error');
                            }
                        }
                    }
                    $this->bodyData['package_detail'][$k] = $v;
                }
            }
        } else {
        }

        $this->template->setBody('id', 'product_page');

        if ($selected === 'ONTAOB') {
            //Replace view in body content.
            $review = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_REVIEW)
                ->where('custom_input_1', 'ONTAOB')
                ->with('locales')
                ->whereRaw(ProjectEnum::isPublish())
                ->inRandomOrder()
                ->take(5)
                ->get();

            $this->bodyData['review'] = view('frontend.component.review_product', ['review' => $review, 'locale' => $this->locale])->render();
        }
        if ($selected === 'ONB2BTA') {
            //Replace view in body content.
            $review = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_REVIEW)
                ->where('custom_input_1', 'ONB2BTA')
                ->with('locales')
                ->whereRaw(ProjectEnum::isPublish())
                ->inRandomOrder()
                ->take(5)
                ->get();

            $this->bodyData['review'] = view('frontend.component.review_product', ['review' => $review, 'locale' => $this->locale])->render();
        }
        if ($isPage) {
            $this->bodyData['category_leadform'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_LEADFORM_CATEGORY)
                ->with('locales')
                ->get();
        }

        $this->bodyData['privacy'] = WebContent::where('type_id', ProjectEnum::STATIC_PAGE_PRIVACY_POLICY)
            ->with('locales')
            ->first();

        $this->bodyData['controller'] = $this->controller;

        if ($isPage) {
            $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTENT_FAQ, @$this->bodyData['current_package']->id);
        } else {
            $this->bodyData['faq'] = $this->setFaq('faq.content', $this->bodyData['current_package']->id);
        }


        try {
            $this->template->setFootJS(mix("/js/frontend/product/" . strtolower($this->bodyData['selected']) . ".js"));
        } catch (\Exception $exception) {
            dd('js error.');
        }

        //dd($this->controller);
        if ($this->controller != 'product') {
            return $this->genView('frontend.page.portal');
        } else {

            if (!$isPage) {
                return $this->genView('frontend.page.product_form');
            }
            return $this->genView('frontend.page.product');
        }
    }


    protected function combindObj($data)
    {
        if (substr($data['fdPackage'], 0, 4) === 'ONPA') {
            $obj = new PAObject();
        } elseif (substr($data['fdPackage'], 0, 6) === 'PUMPPA') {
            $obj = new PAObject();
        } elseif (substr($data['fdPackage'], 0, 6) === 'CVISAFE') {
            $obj = new COVIDAObject();
        } elseif (substr($data['fdPackage'], 0, 9) === 'CVIS22JAN') {
            $obj = new COVIDAObject();
        } elseif (substr($data['fdPackage'], 0, 8) === 'ONCOVIDA') {
            $obj = new COVIDAObject();
        } elseif (substr($data['fdPackage'], 0, 8) === 'ONCOVIDL') {
            $obj = new COVIDLObject();
        } elseif (substr($data['fdPackage'], 0, 6) === 'TGCVLP') {
            $obj = new TGCVLPObject();
        } elseif (substr($data['fdPackage'], 0, 7) === 'TAISMTG') {
            $obj = new TAISMTGObject();
        } elseif (substr($data['fdPackage'], 0, 7) === 'ONTGISM') {
            $obj = new TGISMObject();
        } elseif (substr($data['fdPackage'], 0, 9) === 'ONCOVIDMW') {
            $obj = new COVIDAObject();
        } elseif (substr($data['fdPackage'], 0, 6) === 'ONTADM' || substr($data['fdPackage'], 0, 8) === 'ONB2BTAD') {
            $obj = new BaseTAObject();
            $obj->fdFlgInbound = "D";
        } elseif (substr($data['fdPackage'], 0, 6) === 'ONTASK') {
            $obj = new BaseTAObject();
            $obj->fdFlgInbound = "D";
        } elseif (substr($data['fdPackage'], 0, 6) === 'ONTALN') {
            $obj = new ONTALNObject();
            $obj->fdFlgInbound = "I";
        } elseif (substr($data['fdPackage'], 0, 9) === 'TAIPOCT22') { //TAIPCRN
            $obj = new ONTALNObject();
            $obj->fdFlgInbound = "I";
        } elseif (substr($data['fdPackage'], 0, 11) === 'TAIPOCT22AA') { //TAIPCRN
            $obj = new ONTALNObject();
            $obj->fdFlgInbound = "I";
        } elseif (substr($data['fdPackage'], 0, 7) === 'TAIPCRN') {
            $obj = new ONTALNObject();
            $obj->fdFlgInbound = "I";
        } elseif (substr($data['fdPackage'], 0, 5) === 'TAISM' || substr($data['fdPackage'], 0, 10) === 'ONTAISMB2B') {
            $obj = new ONTALNObject();
            $obj->fdFlgInbound = "I";
        } elseif (substr($data['fdPackage'], 0, 6) === 'TAISMC') {
            $obj = new ONTALNObject();
            $obj->fdFlgInbound = "I";
        } elseif (substr($data['fdPackage'], 0, 6) === 'ONTAOB') {
            $obj = new BaseTAObject();
            $obj->fdDestFrom = "THA";
        } elseif (substr($data['fdPackage'], 0, 6) === 'ONTATO') {
            $obj = new BaseTAObject();
            $obj->fdDestFrom = "THA";
        } elseif (substr($data['fdPackage'], 0, 9) === 'ONTAOBB2B') {
            $obj = new BaseTAObject();
            $obj->fdDestFrom = "THA";
        } elseif (substr($data['fdPackage'], 0, 7) === 'ONB2BTA') {
            $obj = new BaseTAObject();
            $obj->fdDestFrom = "THA";
        } elseif (substr($data['fdPackage'], 0, 4) === 'ONTA') {
            $obj = new BaseTAObject();
            $obj->fdDestFrom = "THA";
        } elseif (substr($data['fdPackage'], 0, 8) === 'ONVACINA') {
            $obj = new VACINAObject();
        } elseif (substr($data['fdPackage'], 0, 8) === 'ONVSUREA') {
            $obj = new VACINAObject();
        } elseif (substr($data['fdPackage'], 0, 8) === 'ONVSAFEA') {
            $obj = new VSAFEAObject();
        } elseif (substr($data['fdPackage'], 0, 7) === 'ONVSAFE') {
            $obj = new VSAFEAObject();
        } elseif (substr($data['fdPackage'], 0, 9) === 'ONVS22JAN') {
            $obj = new VSAFEAObject();
        } elseif (substr($data['fdPackage'], 0, 6) === 'CVCARE') {
            $obj = new VSAFEAObject();
        } elseif (substr($data['fdPackage'], 0, 2) === 'CI') {
            $obj = new CIObject();
            if ($data['fdPayAMT'] >= 3000) {
                $this->payment = 'CC,FULL,IPP';
                $this->ipp_interest_type = "C";
            }
            $data['fdPackage'] .= str_replace(['F', ','], "", $data['ctrl_disease']);
        } elseif (substr($data['fdPackage'], 0, 6) === 'ONFIMP') {
            $obj = new FIMPObject();
        } elseif (substr($data['fdPackage'], 0, 5) === 'ONMHS') {
            $obj = new FIMPObject();
        } elseif (substr($data['fdPackage'], 0, 8) === 'DIABETES') {
            $obj = new BAOWANObject();
        } elseif (substr($data['fdPackage'], 0, 6) === 'ONCSHC') {
            $obj = new ONCSHCObject();

            if (substr($data['fdPackage'], 0, 8) === 'ONCSHCAA') {
                $obj = new ONCSHCAAObject();
            } elseif (substr($data['fdPackage'], 0, 8) === 'ONCSHCSC') {
                $obj = new ONCSHCSCObject();
            } elseif (substr($data['fdPackage'], 0, 8) === 'ONCSHCGV') {
                $obj = new ONCSHCGVObject();
            }
        } else {
            $obj = new BaseInsuranceObject();
        }

        foreach ($obj as $k => $v) {

            switch ($k) {
                case 'fdBenefit':
                    if ($data[$k] === 'other') {
                        $obj->$k = $data['fdBenefit_name'];
                    } else {
                        $obj->$k = $data[$k];
                    }
                    break;
                case 'fdHBD':
                    if (!empty($data[$k])) {
                        $obj->$k = date('d/m/Y', strtotime($data[$k]));
                    }
                    break;

                case "fdPayAMT":
                    $obj->$k = number_format($data[$k], 2, '.', '');
                    break;
                case 'fdlanguage':
                    $obj->$k = $this->locale == 'th' ? 0 : 1;
                    break;
                case "fdFromDate":
                    if (empty($data[$k])) {
                        $obj->$k = date('d/m/Y');
                    } else {
                        $obj->$k = date('d/m/Y', strtotime($data[$k]));
                    }
                    break;
                case "fdToDate":
                    if (!empty($data['duration'])) {

                        $dt = new \DateTime($data[$k]);
                        if (strpos($data[$k], 'y') !== false) {
                            $dt->add(new \DateInterval('P1Y'));
                        } elseif (strpos($data[$k], 'd') !== false) {
                            $day = str_replace('d', '', $data[$k]);
                            $dt->add(new \DateInterval("P{$day}D"));
                        }
                        $obj->$k = $dt->format('d/m/Y');
                    } elseif (!empty($data[$k])) {
                        $obj->$k = date('d/m/Y', strtotime($data[$k]));
                    }
                    break;
                default:
                    $obj->$k = isset($data[$k]) ? $data[$k] : $obj->$k;
                    break;
            }
        }

        if (
            substr($data['fdPackage'], 0, 8) === 'ONCOVIDA'
            || substr($data['fdPackage'], 0, 8) === 'ONVACINA'
            || substr($data['fdPackage'], 0, 8) === 'ONVSUREA'
            || substr($data['fdPackage'], 0, 8) === 'ONVSAFEA'
            || substr($data['fdPackage'], 0, 9) === 'ONVS22JAN'
            || substr($data['fdPackage'], 0, 7) === 'CVISAFE'
            || substr($data['fdPackage'], 0, 9) === 'CVIS22JAN'
            || substr($data['fdPackage'], 0, 6) === 'CVCARE'
            || substr($data['fdPackage'], 0, 9) === 'ONCOVIDMW'
            || substr($data['fdPackage'], 0, 7) === 'ONVSAFE'
            || substr($data['fdPackage'], 0, 8) === 'DIABETES'
            || substr($data['fdPackage'], 0, 6) === 'ONCSHC'
            || substr($data['fdPackage'], 0, 8) === 'ONCSHCAA'
            || substr($data['fdPackage'], 0, 8) === 'ONCSHCSC'
            || substr($data['fdPackage'], 0, 8) === 'ONCSHCGV'
        ) {


            if (isset($data['fdQuestion2_1']) && ($key = array_search('other', $data['fdQuestion2_1'])) !== false) {
                unset($data['fdQuestion2_1'][$key]);
            }

            if (!empty($data['ctrl_question_2_specify'])) {
                $data['fdQuestion2_1'][] = $data['ctrl_question_2_specify'];
            }
            if (isset($data['fdQuestion2_1'])) {
                $obj->fdQuestion2_1 = implode(',', $data['fdQuestion2_1']);
            }

            if (substr($data['fdPackage'], 0, 8) === 'ONCOVIDA') {
                $package = (array)json_decode(Storage::disk('public')->get('json/oncovida.json'));
                if ($data['fdKeys'] === 'QAVM2LRWBGCXXGSFBQFR6LKW24JXXUJRX8MBNGFRGUSXXTARPQJRX') {
                    $package = (array)json_decode(Storage::disk('public')->get('json/oncovida_old.json'));
                }
            }
            if (substr($data['fdPackage'], 0, 8) === 'ONVACINA') {
                $package = (array)json_decode(Storage::disk('public')->get('json/onvacina.json'));
            }
            if (substr($data['fdPackage'], 0, 8) === 'ONVSUREA') {
                $package = (array)json_decode(Storage::disk('public')->get('json/onvsurea.json'));
            }
            if (substr($data['fdPackage'], 0, 8) === 'ONVSAFEA') {
                $package = (array)json_decode(Storage::disk('public')->get('json/onvsafea.json'));
            }
            if (substr($data['fdPackage'], 0, 9) === 'ONVS22JAN') {
                $package = (array)json_decode(Storage::disk('public')->get('json/onvs22jan.json'));
            }
            if (substr($data['fdPackage'], 0, 7) === 'ONVSAFE') {
                $package = (array)json_decode(Storage::disk('public')->get('json/onvsafe.json'));
            }
            if (substr($data['fdPackage'], 0, 7) === 'CVISAFE') {
                $package = (array)json_decode(Storage::disk('public')->get('json/cvisafe.json'));
            }
            if (substr($data['fdPackage'], 0, 9) === 'CVIS22JAN') {
                $package = (array)json_decode(Storage::disk('public')->get('json/cvis22jan.json'));
            }
            if (substr($data['fdPackage'], 0, 6) === 'CVCARE') {
                $package = (array)json_decode(Storage::disk('public')->get('json/cvcare.json'));
            }
            if (substr($data['fdPackage'], 0, 9) === 'ONCOVIDMW') {
                $package = (array)json_decode(Storage::disk('public')->get('json/oncovidmw.json'));
            }
            if (substr($data['fdPackage'], 0, 8) === 'ONVSUREA') {
                $package = (array)json_decode(Storage::disk('public')->get('json/onvsurea.json'));
            }
            if (substr($data['fdPackage'], 0, 8) === 'DIABETES') {
                $package = (array)json_decode(Storage::disk('public')->get('json/diabetes.json'));
            }
            if (substr($data['fdPackage'], 0, 6) === 'ONCSHC') {
                $package = (array)json_decode(Storage::disk('public')->get('json/oncshc.json'));
            }
            if (substr($data['fdPackage'], 0, 8) === 'ONCSHCAA') {
                $package = (array)json_decode(Storage::disk('public')->get('json/oncshcaa.json'));
            }
            if (substr($data['fdPackage'], 0, 8) === 'ONCSHCSC') {
                $package = (array)json_decode(Storage::disk('public')->get('json/oncshcsc.json'));
            }
            if (substr($data['fdPackage'], 0, 8) === 'ONCSHCGV') {
                $package = (array)json_decode(Storage::disk('public')->get('json/oncshcgv.json'));
            }
            if (isset($package[$data['fdPackage']]->apiPackage)) {
                $obj->fdApiPackage = $package[$data['fdPackage']]->apiPackage;
            }
        } elseif (
            substr($data['fdPackage'], 0, 8) === 'ONCOVIDL'
            || substr($data['fdPackage'], 0, 6) === 'ONTALN'
            || substr($data['fdPackage'], 0, 9) === 'TAIPOCT22'
            || substr($data['fdPackage'], 0, 11) === 'TAIPOCT22AA'
            || substr($data['fdPackage'], 0, 7) === 'TAIPCRN'
            || substr($data['fdPackage'], 0, 6) === 'TGCVLP'
            || substr($data['fdPackage'], 0, 7) === 'ONTGISM'
            || substr($data['fdPackage'], 0, 7) === 'TAISMTG'
            || substr($data['fdPackage'], 0, 5) === 'TAISM'
            || substr($data['fdPackage'], 0, 6) === 'TAISMC'
            || substr($data['fdPackage'], 0, 10) === 'ONTAISMB2B'
        ) {
            $obj->fdlanguage = 1;
            if (substr($data['fdPackage'], 0, 6) === 'ONTALN') {
                if ($data['fdKeys'] === 'BQQWAMUX9JDXNTFFD4WZZLQ3NDEXNTFFT6UCXGSF68UXNEKZ24UYN5TRZ2') {
                    $package = (array)json_decode(Storage::disk('public')->get('json/ontalnlite.json'));
                    $obj->fdApiPackage = $package[substr($data['fdPackage'], 0, 7)]->apiPackage;
                } else {
                    $package = (array)json_decode(Storage::disk('public')->get('json/ontaln.json'));
                    $obj->fdApiPackage = $package[substr($data['fdPackage'], 0, 7)]->apiPackage;
                }
            }
            if (substr($data['fdPackage'], 0, 9) === 'TAIPOCT22') {
                if ($data['fdKeys'] === 'BQQWAMUX9JDXNTFFD4WZZLQ3NDEXNTFFT6UCXGSF68UXNEKZ24UYN5TRZ2') {
                    $package = (array)json_decode(Storage::disk('public')->get('json/taipoct22.json'));
                    $obj->fdApiPackage = $package[substr($data['fdPackage'], 0, 9)]->apiPackage;
                } else {
                    $package = (array)json_decode(Storage::disk('public')->get('json/taipoct22.json'));
                    $obj->fdApiPackage = $package[substr($data['fdPackage'], 0, 9)]->apiPackage;
                }
            }
            if (substr($data['fdPackage'], 0, 11) === 'TAIPOCT22AA') {
                $package = (array)json_decode(Storage::disk('public')->get('json/taipoct22aa.json'));
                $obj->fdApiPackage = $package[substr($data['fdPackage'], 0, 11)]->apiPackage;
            }
            if (substr($data['fdPackage'], 0, 7) === 'TAIPCRN') {

                $package = (array)json_decode(Storage::disk('public')->get('json/taipcrn.json'));
                $obj->fdApiPackage = $package[substr($data['fdPackage'], 0, 7)]->apiPackage;
            }
            if (substr($data['fdPackage'], 0, 8) === 'ONCOVIDL') {
                $package = (array)json_decode(Storage::disk('public')->get('json/oncovidl.json'));
                $obj->fdApiPackage = $package[$data['fdPackage']]->apiPackage;
            }
            if (substr($data['fdPackage'], 0, 6) === 'TGCVLP') {
                $package = (array)json_decode(Storage::disk('public')->get('json/tgcvlp.json'));
                $obj->fdApiPackage = $package[$data['fdPackage']]->apiPackage;
            }
            if (substr($data['fdPackage'], 0, 7) === 'ONTGISM') {
                $package = (array)json_decode(Storage::disk('public')->get('json/ontgism.json'));
                $obj->fdApiPackage = $package[$data['fdPackage']]->apiPackage;
            }
            if (substr($data['fdPackage'], 0, 7) === 'TAISMTG') {
                $package = (array)json_decode(Storage::disk('public')->get('json/taismtg.json'));
                $obj->fdApiPackage = $package[$data['fdPackage']]->apiPackage;
            }
            if (isset($package[$data['fdPackage']]->apiPackage)) {
                $obj->fdApiPackage = $package[$data['fdPackage']]->apiPackage;
            }
        }

        if (strtolower($this->controller) === "portal") {
            $obj->transaction_id = session('transaction_id');
        }

        $obj->fdController = $this->controller;
        return $obj;
    }

    protected function logData($obj)
    {
        $result = BuyLog::create([
            'data' => $obj
        ]);

        $apiResult = $this->sendToApiLog($obj);

        if (!$apiResult["status"]) {
            return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => 'error']);
        }

        $result->log_id = $apiResult['message'];
        $result->save();

        return $result;
    }

    public function makePayment(Request $request)
    {
        if ($this->controller === 'product') {
            session(['nopayment_status' => false]);
            session(['b2bpayment_status' => false]);
        }
        if ($this->controller === 'tg') {
            session(['nopayment_status' => true]);
            session(['b2bpayment_status' => false]);
        }
        if ($this->controller === 'tgism') {
            session(['nopayment_status' => true]);
            session(['b2bpayment_status' => false]);
        }

        $data = $request->all();
        if (isset($data['send_data'])) {
            $data = (array)json_decode($data['send_data']);

            if ($this->controller === 'portal') {
                $apiResult = $this->sendToApiPortalLogin($data['fdKeys']);
                $data['fdAgent'] = $apiResult['agent_code'];
            }

            $this->ipp_interest_type = "C";

            //Health
            if (Str::contains($data['fdPackage'], ProjectEnum::ONCSHC_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONCSHC_URL;
                if ($this->controller === 'product') {
                    $this->ipp_interest_type = "M";
                }
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::MYFLEXI_CI_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::MYFLEXI_CI_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::DIABETES_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::DIABETES_URL;
            }

            //PA Choice
            if (Str::contains($data['fdPackage'], ProjectEnum::ONPACA_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONPACA_URL;
                if ($this->controller === 'product') {
                    $this->ipp_interest_type = "M";
                }
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::ONPAKD_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONPAKD_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::ONPASN_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONPASN_URL;
            }

            //iTravel
            if (Str::contains($data['fdPackage'], ProjectEnum::ONTASK_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONTASK_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::TAISM_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::TAISM_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::TAIPOCT22_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::TAIPOCT22_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::ONTADM_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONTADM_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::ONTAOB_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONTAOB_URL;
            }

            //myHome
            if (Str::contains($data['fdPackage'], ProjectEnum::MYHOME_SMART_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::MYHOME_SMART_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::MYHOME_PLUS_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::MYHOME_PLUS_URL;
            }

            //Susco
            if (Str::contains($data['fdPackage'], ProjectEnum::ONCSHCSC_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONCSHCSC_URL;
            }

            //Chillsure GV
            if (Str::contains($data['fdPackage'], ProjectEnum::ONCSHCGV_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONCSHCGV_URL;
            }
            //CI GC
            if (Str::contains($data['fdPackage'], ProjectEnum::MYFLEXI_CIGC_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::MYFLEXI_CIGC_URL;
            }

            //iTravel Tour
            if (Str::contains($data['fdPackage'], ProjectEnum::ONTATO_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONTATO_URL;
            }

            $obj = $this->combindObj(array_merge($data, (array)$data["profile"][0]));
            $result = $this->logData($obj);
            $log_id[] = $result->log_id;

            $arr['fdInvoice'] = config('project.invoice_prefix') . $result->fdInvoice;
            $price = $obj->fdPayAMT;

            foreach ($data["profile"] as $k => $profile) {

                if ($k > 0) {
                    $obj = $this->combindObj(array_merge($data, (array)$profile, $arr));
                    $logResult = $this->logData($obj);
                    $log_id[] = $logResult->log_id;
                    $price += $obj->fdPayAMT;
                }
            }

            if ($price >= 3000) {
                $this->payment = 'CC,FULL,IPP';
                //$this->ipp_interest_type = "C";
            }

            if (session('b2bpayment_status')) {
                return $this->sendB2BTo2C2P($result, $price, $log_id);
            }
            if (session('nopayment_status')) {
                return $this->noPayment($result, $price, $log_id);
            }

            return $this->sendTo2C2P($result, $price, $log_id);
        } else {

            if ($this->controller === 'portal' && isset($data['fdKeys'])) {
                $apiResult = $this->sendToApiPortalLogin($data['fdKeys']);
                $data['fdAgent'] = $apiResult['agent_code'];
            }

            $this->ipp_interest_type = "C";

            //Health
            if (Str::contains($data['fdPackage'], ProjectEnum::ONCSHC_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONCSHC_URL;
                if ($this->controller === 'product') {
                    $this->ipp_interest_type = "M";
                }
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::MYFLEXI_CI_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::MYFLEXI_CI_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::DIABETES_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::DIABETES_URL;
            }

            //PA Choice
            if (Str::contains($data['fdPackage'], ProjectEnum::ONPACA_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONPACA_URL;
                if ($this->controller === 'product') {
                    $this->ipp_interest_type = "M";
                }
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::ONPAKD_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONPAKD_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::ONPASN_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONPASN_URL;
            }

            //iTravel
            if (Str::contains($data['fdPackage'], ProjectEnum::ONTASK_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONTASK_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::TAISM_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::TAISM_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::TAIPOCT22_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::TAIPOCT22_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::ONTADM_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONTADM_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::ONTAOB_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONTAOB_URL;
            }

            //myHome
            if (Str::contains($data['fdPackage'], ProjectEnum::MYHOME_SMART_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::MYHOME_SMART_URL;
            }
            if (Str::contains($data['fdPackage'], ProjectEnum::MYHOME_PLUS_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::MYHOME_PLUS_URL;
            }

            //ChillSure AirAsia
            if (Str::contains($data['fdPackage'], ProjectEnum::ONCSHCAA_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONCSHCAA_URL;
            }

            //ChillSure Susco
            if (Str::contains($data['fdPackage'], ProjectEnum::ONCSHCSC_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONCSHCSC_URL;
            }

            //ChillSure GV
            if (Str::contains($data['fdPackage'], ProjectEnum::ONCSHCGV_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONCSHCGV_URL;
            }
            //CI GC
            if (Str::contains($data['fdPackage'], ProjectEnum::MYFLEXI_CIGC_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::MYFLEXI_CIGC_URL;
            }

            //iTravel Tour
            if (Str::contains($data['fdPackage'], ProjectEnum::ONTATO_URL)) {
                $this->thankYouParam = $data['thankyou_param'] = ProjectEnum::ONTATO_URL;
            }

            $obj = $this->combindObj($data);
            $result = $this->logData($obj);

            if ($result->data["fdPayAMT"] >= 3000) {
                $this->payment = 'CC,FULL,IPP';
                //$this->ipp_interest_type = "C";
            }

            if (session('b2bpayment_status')) {
                return $this->sendB2BTo2C2P($result);
            }
            if (session('nopayment_status')) {
                return $this->noPayment($result);
            }

            return $this->sendTo2C2P($result);
        }
    }

    protected function noPayment($obj, $price = null, $log_id = null)
    {
        $result = $this->sendToApiIssueNoPayment(config('project.invoice_prefixxxx') . $obj->fdInvoice, '', '');
        if ($result[2]) {
            session()->put('doc_no', implode(', ', $result[0]));
            session()->put('point', $result[1]);
            session()->put('return_link', session('return_link'));
            session()->put('partner', session('partner'));
            $func = 'thankyou';
        } else {
            session()->put('error', implode(', ', $result[0]));
            if (strtolower($this->controller) === "portal") {
                if (isset($result[3])) {
                    session()->put('error', $result[3]);
                }
            }
            $func = 'error';
        }
        return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $func, 'params' => $this->thankYouParam]);
    }

    protected function sendToApiIssueNoPayment($fdInvoice, $fdPaymentCh, $fdCard_No)
    {

        $result = BuyLog::where('fdInvoice', str_replace(config('project.invoice_prefix'), "", $fdInvoice))->get();

        $PolicyArr = [];
        $Point = 0;
        $Status = false;
        $message = '';
        foreach ($result as $v) {
            $data = $v->data;

            $data['fdPayDate'] = date('d/m/Y');
            $data['fdPayTime'] = date('H:i');
            $data['fdPaymentCh'] = $fdPaymentCh;
            $data['fdCard_No'] = $fdCard_No;
            $data['fdPayStatus'] = 'success';
            $data['fdInvoice'] = '';
            $v->data = $data;

            $client = new Client();

            $response = $client->request('POST', config('tune-api.url') . $this->getApiIssueLink($data['fdPackage']), [
                'auth' => [config('tune-api.user'), config('tune-api.password')],
                'headers' => [
                    'Content-Type' => 'application/json'
                ],
                'body' => json_encode($data)
            ]);
            $apiResult = (array)json_decode($response->getBody()->getContents(), true);

            if ($apiResult["status"]) {
                $v->issuepolicy_status =  'S';
            } else {
                $v->issuepolicy_status =  'E';
            }

            $v->issuepolicy_api =  $this->getApiIssueLink($data['fdPackage']);
            $v->result = $apiResult;
            $v->save();

            $PolicyArr[] = $apiResult['message'] === 'AMLO' || $apiResult['message'] === 'BLACKLIST' ? 'Please contact administrator!' : $apiResult['message'];
            $PolicyData = $apiResult['data'];
            $Status = $apiResult["status"];

            if ($apiResult['data'] !== null) {
                foreach ($PolicyData as $k => $v) {
                    if ($k === 'BigPoint') {
                        if (is_numeric($v)) {
                            $Point = $Point + $v;
                        }
                    }
                }
            }
        }

        $arrResult[] = $PolicyArr;
        $arrResult[] = $Point;
        $arrResult[] = $Status;
        if (isset($PolicyData['ERROR_DESC'])) {
            $arrResult[] = $PolicyData['ERROR_DESC'];
        }

        return $arrResult;
    }

    protected function sendToApiIssue($fdInvoice, $fdPaymentCh, $fdCard_No)
    {

        $result = BuyLog::where('fdInvoice', str_replace(config('project.invoice_prefix'), "", $fdInvoice))->get();

        $PolicyArr = [];
        $Point = 0;
        $Status = false;
        foreach ($result as $v) {
            $data = $v->data;

            $data['fdPayDate'] = date('d/m/Y');
            $data['fdPayTime'] = date('H:i');
            $data['fdPaymentCh'] = $fdPaymentCh;
            $data['fdCard_No'] = $fdCard_No;
            $data['fdPayStatus'] = 'success';

            $v->data = $data;

            $client = new Client();

            try {
                $response = $client->request('POST', config('tune-api.url') . $this->getApiIssueLink($data['fdPackage']), [
                    'auth' => [config('tune-api.user'), config('tune-api.password')],
                    'headers' => [
                        'Content-Type' => 'application/json'
                    ],
                    'timeout' => 120,
                    'body' => json_encode($data)
                ]);

                $apiResult = (array)json_decode($response->getBody()->getContents(), true);

                if ($apiResult["status"]) {
                    $v->issuepolicy_status =  'S';
                } else {
                    $v->issuepolicy_status =  'E';
                }
            } catch (\Exception $ex) {
                $apiResult = $ex->getMessage();
            }

            $v->result = $apiResult;
            $v->save();

            $PolicyArr[] = $apiResult['message'] === 'AMLO' || $apiResult['message'] === 'BLACKLIST' ? 'Please contact administrator!' : $apiResult['message'];
            $PolicyData = $apiResult['data'];
            $Status = $apiResult["status"];


            foreach ($PolicyData as $k => $v) {
                if ($k === 'BigPoint') {
                    if (is_numeric($v)) {
                        $Point = $Point + $v;
                    }
                }
            }
        }

        $arrResult[] = $PolicyArr;
        $arrResult[] = $Point;
        $arrResult[] = $Status;
        if (isset($PolicyData['ERROR_DESC'])) {
            $arrResult[] = $PolicyData['ERROR_DESC'];
        }

        return $arrResult;
    }

    protected function sendTo2C2P($obj, $price = null, $log_id = null)
    {
        $invalidkey = false;
        if (strtolower($this->controller) === "portal") {
            $data = $obj->data;
            if (!$data["fdKeys"]) {
                $invalidkey = true;
            } else {
                if ($data["fdKeys"] === "") {
                    $invalidkey = true;
                }
            }
            if ($invalidkey === true) {
                session(['error' => "Invalid link, Can not find key please check link again."]);
                $func = 'error';
                return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $func, 'params' => $this->thankYouParam]);
            }
        }

        $arr_post['version'] = '8.5';
        $arr_post['merchant_id'] = config('payment.mid');
        $arr_post['payment_description'] = "Buy Insurance";
        $arr_post['order_id'] = config('project.invoice_prefix') . $obj->fdInvoice;
        $arr_post['currency'] = "764";

        $arr_post['amount'] = str_pad(($price ? $price : $obj->data["fdPayAMT"]) * 100, 12, '0', STR_PAD_LEFT);

        $arr_post['customer_email'] = $obj->data["fdEmail"];
        $arr_post['user_defined_1'] = ($log_id ? implode(',', $log_id) : $obj->log_id);

        //        dd(strlen($arr_post['user_defined_1']));

        if (strlen($arr_post['user_defined_1']) > 150) {
            $arr_post['user_defined_1'] = substr($arr_post['user_defined_1'], 0, 150);
        }

        //        dd(strlen($arr_post['user_defined_1']));

        $arr_post['user_defined_2'] = preg_replace('/\?.*/', '', session('return_link'));
        $arr_post['user_defined_3'] = session('partner');
        $arr_post['user_defined_4'] = $this->thankYouParam;
        $arr_post['result_url_1'] = url("{$this->locale}/{$this->controller}/result");
        $arr_post['payment_option'] = $this->payment;
        $arr_post['ipp_interest_type'] = $this->ipp_interest_type;
        $arr_post['default_lang'] = $this->locale;
        //        $arr_post['ipp_period_filter'] = 10;        
        $params = join($arr_post);
        $arr_post['hash_value'] = hash_hmac('sha256', $params, config('payment.secret'), false);    //Compute hash value

        $this->bodyData['arr_post'] = $arr_post;

        if (strtolower($this->controller) === "portal") {
            $this->bodyData['partner'] = session('partner');
            $this->bodyData['selected'] = session('selected');
            return $this->genView('frontend.page.payment_portal');
        }
        return $this->genView('frontend.page.payment');
    }

    protected function getApiIssueLink($package)
    {
        $link = "";
        if (str_starts_with($package, 'ONPA')) {
            if (substr($package, 0, 6) === ProjectEnum::ONPACA_URL) {
                $this->thankYouParam = ProjectEnum::ONPACA_URL;
            } elseif (substr($package, 0, 6) === ProjectEnum::ONPAKD_URL) {
                $this->thankYouParam = ProjectEnum::ONPAKD_URL;
            } elseif (substr($package, 0, 6) === ProjectEnum::ONPASN_URL) {
                $this->thankYouParam = ProjectEnum::ONPASN_URL;
            }
            //$this->thankYouParam = 'ONPA';
            $link = 'IssuePolicyPAChoice';
        } elseif (
            substr($package, 0, 8) === 'ONCOVIDA'
            || substr($package, 0, 8) === 'ONCOVIDL'
            || substr($package, 0, 8) === 'ONISAFEX'
        ) {
            $this->thankYouParam = substr($package, 0, 8);
            $link = 'IssuePolicyCovid19';
        } elseif (substr($package, 0, 6) === 'PUMPPA') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = "IssuePolicyPAChoice";
        } elseif (substr($package, 0, 6) === 'TGCVLP') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = 'IssuePolicyCovidTGCVLP';
        } elseif (substr($package, 0, 7) === 'ONTGISM') {
            $this->thankYouParam = substr($package, 0, 7);
            $link = 'IssuePolicyCovidTGCVLP';
        } elseif (substr($package, 0, 7) === 'TAISMTG') {
            $this->thankYouParam = substr($package, 0, 7);
            $link = 'IssuePolicyCovidTAISMTG';
        } elseif (substr($package, 0, 9) === 'ONCOVIDMW') {
            $this->thankYouParam = substr($package, 0, 9);
            $link = 'IssuePolicyMigration';
        } elseif (substr($package, 0, 8) === 'MWASEP22') {
            $this->thankYouParam = substr($package, 0, 8);
            $link = 'IssuePolicyMigration';
        } elseif (substr($package, 0, 6) === 'ONTALN') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = "IssuePolicyInbound";
        } elseif (substr($package, 0, 9) === 'TAIPOCT22') {
            $this->thankYouParam = substr($package, 0, 9);
            $link = "IssuePolicyInbound";
        } elseif (substr($package, 0, 11) === 'TAIPOCT22AA') {
            $this->thankYouParam = substr($package, 0, 11);
            $link = "IssuePolicyInbound";
        } elseif (substr($package, 0, 7) === 'TAIPCRN') {
            $this->thankYouParam = substr($package, 0, 7);
            $link = "IssuePolicyInbound";
        } elseif (substr($package, 0, 5) === 'TAISM') {
            $this->thankYouParam = substr($package, 0, 5);
            $link = "IssuePolicyiSmile";
        } elseif (substr($package, 0, 6) === 'TAISMC') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = "IssuePolicyiSmile";
        } elseif (substr($package, 0, 10) === 'ONTAISMB2B') {
            $this->thankYouParam = substr($package, 0, 10);
            $link = "IssuePolicyiSmile";
        } elseif (substr($package, 0, 6) === 'TAIPAS') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = "IssuePolicyInbound";
        } elseif (substr($package, 0, 6) === ProjectEnum::ONTAOB_URL) {
            $this->thankYouParam = ProjectEnum::ONTAOB_URL;
            $link = "IssuePolicyiTravel";
        } elseif (substr($package, 0, 6) === ProjectEnum::ONTATO_URL) {
            $this->thankYouParam = ProjectEnum::ONTATO_URL;
            $link = "IssuePolicyiTravelTour";
        } elseif (substr($package, 0, 8) === 'ONB2BTAD') {
            $this->thankYouParam = substr($package, 0, 8);
            $link = "IssuePolicy";
        } elseif (substr($package, 0, 7) === 'ONB2BTA') {
            $this->thankYouParam = substr($package, 0, 7);
            $link = "IssuePolicyiTravel";
        } elseif (substr($package, 0, 6) === 'ONTADM' || substr($package, 0, 4) === 'ONTA') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = "IssuePolicy";
        } elseif (substr($package, 0, 6) === 'ONTASK') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = "IssuePolicy";
        } elseif (substr($package, 0, 8) === 'ONVACINA') {
            $this->thankYouParam = substr($package, 0, 8);
            $link = 'IssuePolicyVacin';
        } elseif (substr($package, 0, 8) === 'ONVSUREA') {
            $this->thankYouParam = substr($package, 0, 8);
            $link = 'IssuePolicyVacin';
        } elseif (substr($package, 0, 8) === 'ONVSAFEA' || substr($package, 0, 8) === 'ONVSAFEC') {
            $this->thankYouParam = substr($package, 0, 8);
            $link = 'IssuePolicyVsafe';
        } elseif (substr($package, 0, 9) === 'ONVS22JAN') {
            $this->thankYouParam = substr($package, 0, 9);
            $link = 'IssuePolicyVsafe';
        } elseif (substr($package, 0, 7) === 'ONVSAFE') {
            $this->thankYouParam = substr($package, 0, 7);
            $link = 'IssuePolicyVsafe';
        } elseif (substr($package, 0, 6) === 'CVCARE') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = 'IssuePolicyVsafe';
        } elseif (substr($package, 0, 2) === 'CI') {
            $this->thankYouParam = substr($package, 0, 2);
            $link = 'IssuePolicyCI';

            if (substr($package, 0, 4) === 'CIGC') {
                $this->thankYouParam = substr($package, 0, 4);
                $link = 'IssuePolicyCIGiftCard';
            }
        } elseif (substr($package, 0, 6) === 'ONFIMP') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = 'IssuePolicyMyHomePlus';
        } elseif (substr($package, 0, 5) === 'ONMHS') {
            $this->thankYouParam = substr($package, 0, 5);
            $link = 'IssuePolicyMyHomeSmart';
            $this->thankYouParam =  ProjectEnum::MYHOME_SMART_URL;
        } elseif (substr($package, 0, 7) === 'CVISAFE') {
            $this->thankYouParam = 'CVISAFE';
            $link = 'IssuePolicyCovid19';
        } elseif (substr($package, 0, 9) === 'CVIS22JAN') {
            $this->thankYouParam = 'CVIS22JAN';
            $link = 'IssuePolicyCovid19';
        } elseif (substr($package, 0, 8) === ProjectEnum::DIABETES_URL) {
            $this->thankYouParam =  ProjectEnum::DIABETES_URL;
            $link = ProjectEnum::ISSUE_POLICY_DIABETES;
        } elseif (substr($package, 0, 5) === 'TAISM') {
            $this->thankYouParam =  ProjectEnum::ISMILE_URL;
            $link = "IssuePolicyiSmile";
        } elseif (substr($package, 0, 6) === 'TAISMC') {
            $this->thankYouParam =  ProjectEnum::ISMILE_URL;
            $link = "IssuePolicyiSmile";
        } elseif (substr($package, 0, 10) === 'ONTAISMB2B') {
            $this->thankYouParam =  ProjectEnum::ISMILE_URL;
            $link = "IssuePolicyiSmile";
        } elseif (substr($package, 0, 6) === ProjectEnum::ONCSHC_URL) {
            $this->thankYouParam = ProjectEnum::ONCSHC_URL;
            $link = 'IssuePolicyChillSure';

            if (substr($package, 0, 8) === ProjectEnum::ONCSHCAA_URL) {
                $this->thankYouParam = ProjectEnum::ONCSHCAA_URL;
                $link = 'IssuePolicyChillSure';
            } elseif (substr($package, 0, 8) === ProjectEnum::ONCSHCSC_URL) {
                $this->thankYouParam = ProjectEnum::ONCSHCSC_URL;
                $link = 'IssuePolicyChillSureSusco';
            } elseif (substr($package, 0, 8) === ProjectEnum::ONCSHCGV_URL) {
                $this->thankYouParam = ProjectEnum::ONCSHCGV_URL;
                $link = 'IssuePolicyChillSureGiftVoucher';
            }
        }
        return $link;
    }

    protected function sendToApiLog($obj)
    {
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'JsonLog', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'jsonString' => json_encode($obj)
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    public function error(Request $request)
    {
        $this->bodyData['doc_no'] = $request->session()->get('error');
        $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING;

        //Health
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHC_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_CHILL_SURE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYFLEXI_CI_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_MYFLEXI_CI;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::DIABETES_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_DIABETES;
        }

        //PA Choice
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPACA_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_PA_CHOICE_CARE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPAKD_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_PA_CHOICE_KIDE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPASN_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_PA_CHOICE_SENIOR;
        }

        //iTravel
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTASK_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TA_PLUS_SKIING;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAISM_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_ISMILE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAIPOCT22_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TUNE_IPASS;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTADM_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TA_DOMESTIC;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTAOB_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TA_OUTBOUND;
        }

        //myHome
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_SMART_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_MYHOME_SMART;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_PLUS_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_MYHOME_PLUS;
        }

        //iTravel Tour
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTATO_URL)) {
            $error_page = ProjectEnum::STATIC_PAGE_PAYMENT_ERROR_TA_OUTBOUND_TOUR;
        }

        return $this->genStatusPage($error_page);
    }

    public function cancel(Request $request)
    {
        $this->bodyData['doc_no'] = $request->session()->get('error');
        return redirect('/' . $this->locale);
    }

    public function pending(Request $request)
    {
        $this->bodyData['doc_no'] = $request->session()->get('error');
        $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING;

        //Health
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHC_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_CHILL_SURE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYFLEXI_CI_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_MYFLEXI_CI;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::DIABETES_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_DIABETES;
        }

        //PA Choice
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPACA_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_PA_CHOICE_CARE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPAKD_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_PA_CHOICE_KIDE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPASN_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_PA_CHOICE_SENIOR;
        }

        //iTravel
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTASK_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TA_PLUS_SKIING;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAISM_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_ISMILE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAIPOCT22_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TUNE_IPASS;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTADM_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TA_DOMESTIC;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTAOB_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TA_OUTBOUND;
        }

        //myHome
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_SMART_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_MYHOME_SMART;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_PLUS_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_MYHOME_PLUS;
        }

        //iTravel Tour
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTATO_URL)) {
            $pending_page = ProjectEnum::STATIC_PAGE_PAYMENT_PENDING_TA_OUTBOUND_TOUR;
        }

        return $this->genStatusPage($pending_page);
    }

    public function reject(Request $request)
    {
        $this->bodyData['doc_no'] = $request->session()->get('error');
        $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT;

        //Health
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHC_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_CHILL_SURE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYFLEXI_CI_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_MYFLEXI_CI;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::DIABETES_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_DIABETES;
        }

        //PA Choice
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPACA_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_PA_CHOICE_CARE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPAKD_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_PA_CHOICE_KIDE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPASN_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_PA_CHOICE_SENIOR;
        }

        //iTravel
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTASK_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TA_PLUS_SKIING;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAISM_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_ISMILE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAIPOCT22_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TUNE_IPASS;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTADM_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TA_DOMESTIC;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTAOB_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TA_OUTBOUND;
        }

        //myHome
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_SMART_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_MYHOME_SMART;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_PLUS_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_MYHOME_PLUS;
        }

        //iTravel Tour
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTATO_URL)) {
            $reject_page = ProjectEnum::STATIC_PAGE_PAYMENT_REJECT_TA_OUTBOUND_TOUR;
        }

        return $this->genStatusPage($reject_page);
    }

    public function thankyou(Request $request)
    {
        $this->bodyData['doc_no'] = $request->session()->get('doc_no');
        $this->bodyData['payAmount'] = $request->session()->get('payAmount');
        $this->bodyData['return_link'] = '/' . $this->locale;
        $this->bodyData['point'] = '';
        $this->bodyData['agentCode'] = $request->session()->get('agentCode');
        $this->bodyData['package'] = $request->session()->get('package');
        $this->bodyData['refCode'] = $request->session()->get('refCode');
        $this->bodyData['controller'] = $this->controller;

        $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU;

        //Health
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHC_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_CHILL_SURE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYFLEXI_CI_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_MYFLEXI_CI;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::DIABETES_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_DIABETES;
        }

        //PA Choice
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPACA_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE_CARE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPAKD_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE_KIDE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONPASN_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE_SENIOR;
        }

        //iTravel
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTASK_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TA_PLUS_SKIING;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAISM_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_ISMILE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::TAIPOCT22_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TUNE_IPASS;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTADM_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TA_DOMESTIC;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTAOB_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TA_OUTBOUND;
        }

        //myHome
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_SMART_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_MYHOME_SMART;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::MYHOME_PLUS_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_MYHOME_PLUS;
        }

        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHCAA_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_CHILL_SURE;
        }
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONCSHCSC_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_CHILL_SURE;
        }

        //iTravel Tour
        if (Str::contains($request->getRequestUri(), ProjectEnum::ONTATO_URL)) {
            $thank_you_page = ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU_TA_OUTBOUND_TOUR;
        }

        return $this->genStatusPage($thank_you_page);
    }

    public function result(Request $request)
    {
        $result = null;
        $payAmount = 0;
        $oBuyLog = BuyLog::where('fdInvoice', str_replace(config('project.invoice_prefix'), "", $request->input('order_id')))->get();
        //$agent_code="";
        //dd($oBuyLog);
        //echo var_dump($oBuyLog);exit();
        foreach ($oBuyLog as $v) {

            $data = $v->data;
            $payAmount += $data['fdPayAMT'];
            $portalKey = $data['fdKeys'];
            $agent_code = $data['fdAgent'];
            $package = $data['fdPackage'];
            $refCode = $data['RefCode'];
            $transaction_id = $data['transaction_id'];

            if ($v->result) {
                $request->session()->put('doc_no',  $v->result['message']);
                $request->session()->put('return_link', $request->input('user_defined_2'));
                $request->session()->put('partner', $request->input('user_defined_3'));
                $request->session()->put('thankyou_param', $request->input('user_defined_4'));
                $request->session()->put('payAmount', $payAmount);
                $request->session()->put('portalKey', $portalKey);
                $request->session()->put('agentCode', $agent_code);
                $request->session()->put('package', $package);
                $request->session()->put('refCode', $refCode);
                $request->session()->put('transaction_id', $transaction_id);
                $this->thankYouParam = $request->input('user_defined_4');

                $func = 'thankyou';
                return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $func, 'params' => $this->thankYouParam]);
            }
            $v->payment_log = json_encode($request->input());
            $v->payment_status = $request->input('payment_status');
            $v->issuepolicy_api =  $this->getApiIssueLink($data['fdPackage']);
            $v->issuepolicy_status =  'W';
            $v->save();
        }

        switch ($request->input('payment_status')) {
            case '000':
                $result = $this->sendToApiIssue($request->input('order_id'), $request->input('payment_channel'), $request->input('masked_pan'));
                if ($result[2]) {
                    $request->session()->put('doc_no', implode(', ', $result[0]));
                    $request->session()->put('point', $result[1]);
                    $request->session()->put('return_link', $request->input('user_defined_2'));
                    $request->session()->put('partner', $request->input('user_defined_3'));
                    $request->session()->put('thankyou_param', $request->input('user_defined_4'));
                    $request->session()->put('payAmount', $payAmount);
                    $request->session()->put('portalKey', $portalKey);
                    $request->session()->put('agentCode', $agent_code);
                    $request->session()->put('package', $package);
                    $request->session()->put('refCode', $refCode);
                    $request->session()->put('transaction_id', $transaction_id);
                    $this->thankYouParam = $request->input('user_defined_4');
                    $func = 'thankyou';
                } else {
                    $request->session()->put('error', implode(', ', $result[0]));
                    if (strtolower($this->controller) === "portal") {
                        if (isset($result[3])) {
                            $request->session()->put('error', $result[3]);
                        }
                    }
                    $func = 'error';
                }
                break;
            case '001':
                $func = 'pending';
                $request->session()->put('error', $request->input('channel_response_desc'));
                $request->session()->put('package', $package);
                break;
            case '002':
                $func = 'reject';
                $request->session()->put('error', $request->input('channel_response_desc'));
                $request->session()->put('package', $package);
                break;
            case '003':
                $func = 'cancel';
                $request->session()->put('return_link', $request->input('user_defined_2'));
                $request->session()->put('error', $request->input('channel_response_desc'));
                $request->session()->put('package', $package);
                break;
            default:
                $func = 'error';
                $request->session()->put('error', $request->input('channel_response_desc'));
                $request->session()->put('package', $package);
        }

        return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $func, 'params' => $this->thankYouParam]);
    }

    public function test2c2p()
    {
        //http://staging.webtest2.tuneinsurance.co.th/product/test2c2p

        $arr_post['version'] = '8.5';
        $arr_post['merchant_id'] = config('payment.mid');
        $arr_post['payment_description'] = "Buy Insurance";
        $arr_post['order_id'] = 'T' . rand(8000000000, 999999999);
        $arr_post['currency'] = "764";

        $arr_post['amount'] = str_pad((1000) * 100, 12, '0', STR_PAD_LEFT);
        $arr_post['customer_email'] = 'test@test.com';
        $arr_post['user_defined_1'] = 'aaa';
        $arr_post['user_defined_2'] = preg_replace('/\?.*/', '', session('return_link'));
        $arr_post['result_url_1'] = url("{$this->locale}/product/result");
        $arr_post['payment_option'] = "CC,FULL,IPP";
        $arr_post['ipp_interest_type'] = 'C';
        $arr_post['default_lang'] = $this->locale;
        //        $arr_post['ipp_period_filter'] = '10';


        $params = join($arr_post);
        $arr_post['hash_value'] = hash_hmac('sha256', $params, config('payment.secret'), false);    //Compute hash value

        $this->bodyData['arr_post'] = $arr_post;

        return $this->genView('frontend.page.payment');
    }

    public function testIssueApi()
    {
        $result = $this->sendToApiIssue("00000000119", "001", "5565654654");
    }

    public function testLogApi()
    {
        $data['send_data'] = '{"fdPayAMT":288,"fdFromDate":"2021-01-16","fdToDate":"2021-01-31","ctrl_terms":true,"fdSendType":"E","ctrl_accept_insurance_term":true,"profile":[{"fdSex":"M","fdTitle":"042","fdName":"fsdfs","fdSurname":"fdfsdfds","ctrl_document_type":"เลขที่หนังสือเดินทาง","fdNationalID":"fsdffsfdfs","fdHBD":"1979-02-10","fdAge":41,"fdEmail":"fsdfs@fsdfdsf.fsd","fdTelephone":"0152155489","fdAddr_Num":"fsdfsdf","fdAddr_District":"fsdfsdf","fdAddr_Amphur":"00*18","fdAddr_PostCode":"10160","ctrl_province":"00*18","fdProvince":"00","fdBenefit":"ทายาทโดยชอบธรรม","fdBenefit_name":"","fdRelation":""},{"fdSex":"M","fdTitle":"042","fdName":"fsdfs","fdSurname":"fdfsdfds","ctrl_document_type":"เลขที่หนังสือเดินทาง","fdNationalID":"fsdffsfdfs","fdHBD":"1979-02-10","fdAge":41,"fdEmail":"fsdfs@fsdfdsf.fsd","fdTelephone":"0152155489","fdAddr_Num":"fsdfsdf","fdAddr_District":"fsdfsdf","fdAddr_Amphur":"00*18","fdAddr_PostCode":"10160","ctrl_province":"00*18","fdProvince":"00","fdBenefit":"ทายาทโดยชอบธรรม","fdBenefit_name":"","fdRelation":""},{"fdSex":"M","fdTitle":"042","fdName":"fsdfs","fdSurname":"fdfsdfds","ctrl_document_type":"เลขที่หนังสือเดินทาง","fdNationalID":"fsdffsfdfs","fdHBD":"1979-02-10","fdAge":41,"fdEmail":"fsdfs@fsdfdsf.fsd","fdTelephone":"0152155489","fdAddr_Num":"fsdfsdf","fdAddr_District":"fsdfsdf","fdAddr_Amphur":"00*18","fdAddr_PostCode":"10160","ctrl_province":"00*18","fdProvince":"00","fdBenefit":"ทายาทโดยชอบธรรม","fdBenefit_name":"","fdRelation":""}],"fdDestFrom":"01","fdDestTo":"05","fdPackage":"ONTADM204"}';

        $data = (array)json_decode($data['send_data']);

        $obj = $this->combindObj(array_merge($data, (array)$data["profile"][0]));
        $result = $this->logData($obj);
    }

    public function checkDup(Request $request)
    {
        $data = $request->all();
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'PersonalValidationCI', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode($data)
        ]);
        $res = (object)json_decode($response->getBody()->getContents(), true);

        $this->apiResult = $res->status ? self::SUCCESS : self::ERROR;

        if ($res->status) {
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText = self::SUCCESS;
        } else {
            $this->apiStatus = self::ERROR;
            if (str_contains($res->message, 'กรุณาติดต่อบริษัท ทูนประกันภัย (B01)')) $this->apiStatusText = __('product.error.' . 'BLACKLIST');
            else if (str_contains($res->message, 'กรุณาติดต่อบริษัท ทูนประกันภัย (A01)')) $this->apiStatusText = __('product.error.' . 'AMLO');
            else if (str_contains($res->message, 'fdNationalID already exist')) $this->apiStatusText = __('product.error.' . 'id_already');
            else if (str_contains($res->message, 'DUP')) $this->apiStatusText = __('product.error.' . 'id_already');
            else $this->apiStatusText = $res->message;
        }

        return $this->send();
    }

    public function validatePromotionCode(Request $request)
    {
        $data = $request->all();
        $client = new Client();
        $response = $client->request('POST', str_replace('/WEBSITE', '', config('tune-api.url')) . 'Promotions/CodeCostAmountAvailable', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode($data)
        ]);
        $res = (object)json_decode($response->getBody()->getContents(), true);
        $this->apiResult = $res->data;

        if ($res->status) {
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText = self::SUCCESS;
        } else {
            $this->apiStatus = self::ERROR;
            $this->apiStatusText = __('product.error.' . $res->message);
        }

        return $this->send();
    }

    public function preValidatePromotionCode(Request $request)
    {
        $data = $request->all();
        $client = new Client();
        $response = $client->request('POST', str_replace('/WEBSITE', '', config('tune-api.url')) . 'Promotions/CodeAvailable', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode($data)
        ]);
        $res = (object)json_decode($response->getBody()->getContents(), true);
        $this->apiResult = $res->data;

        if ($res->status) {
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText = self::SUCCESS;
        } else {
            $this->apiStatus = self::ERROR;
            $this->apiStatusText = __('product.error.' . $res->message);
        }

        return $this->send();
    }

    public function campaignVerifyProduct(Request $request)
    {
        $data = $request->all();
        $client = new Client();
        $response = $client->request('POST', str_replace('/WEBSITE', '', config('tune-api.url')) . 'Promotions/CampaignVerifyProduct', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode($data)
        ]);
        $res = (object)json_decode($response->getBody()->getContents(), true);
        $this->apiResult = $res->data;

        if ($res->status) {
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText = self::SUCCESS;
        } else {
            $this->apiStatus = self::ERROR;
            $this->apiStatusText = __('product.error.' . $res->message);
        }

        return $this->send();
    }

    public function CheckRegisterForChillSure(Request $request)
    {
        $data = $request->all();
        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'CheckIDCardForRegister', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode($data)
        ]);
        $res = (object)json_decode($response->getBody()->getContents(), true);

        $this->apiResult = $res->status ? self::SUCCESS : self::ERROR;

        if ($res->status) {
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText = self::SUCCESS;
        } else {
            $this->apiStatus = self::ERROR;
            $this->apiStatusText = __('product.error.' . $res->message);
        }

        return $this->send();
    }

    protected function sendB2BTo2C2P($obj, $price = null, $log_id = null)
    {
        //dd($obj);
        //dd(config('payment.b2b_secret'));
        $invalidkey = false;
        if (strtolower($this->controller) === "portal") {
            $data = $obj->data;
            if (!$data["fdKeys"]) {
                $invalidkey = true;
            } else {
                if ($data["fdKeys"] === "") {
                    $invalidkey = true;
                }
            }
            if ($invalidkey === true) {
                session(['error' => "Invalid link, Can not find key please check link again."]);
                $func = 'error';
                return redirect()->route('current', ['locale' => $this->locale, 'controller' => $this->controller, 'func' => $func, 'params' => $this->thankYouParam]);
            }
        }

        $arr_post['version'] = '8.5';
        $arr_post['merchant_id'] = config('payment.b2b_mid'); //"764764000012359"; //uat = "764764000012359";
        $arr_post['payment_description'] = "Buy Insurance";
        $arr_post['order_id'] = config('project.invoice_prefix') . $obj->fdInvoice;
        $arr_post['currency'] = "764";

        $arr_post['amount'] = str_pad(($price ? $price : $obj->data["fdPayAMT"]) * 100, 12, '0', STR_PAD_LEFT);

        $arr_post['customer_email'] = $obj->data["fdEmail"];
        $arr_post['user_defined_1'] = ($log_id ? implode(',', $log_id) : $obj->log_id);

        if (strlen($arr_post['user_defined_1']) > 150) {
            $arr_post['user_defined_1'] = substr($arr_post['user_defined_1'], 0, 150);
        }

        //dd($arr_post['merchant_id']);

        $arr_post['user_defined_2'] = preg_replace('/\?.*/', '', session('return_link'));
        $arr_post['user_defined_3'] = session('partner');
        $arr_post['user_defined_4'] = $this->thankYouParam;
        $arr_post['result_url_1'] = url("{$this->locale}/{$this->controller}/result");
        $arr_post['payment_option'] = $this->payment;
        $arr_post['ipp_interest_type'] = $this->ipp_interest_type;
        $arr_post['default_lang'] = $this->locale;
        //$arr_post['ipp_period_filter'] = 10;
        //prd = 'E5A702D8A034DBEDF700F31557C4C837D3EEE505301AB4F92C7F9B1DC2035FA3'
        //uat = '34085B9AB99ADC7C6BBDB594F81EFCE05EBC75EF1421280070889CD68A2BD0C9'
        $params = join($arr_post);
        $arr_post['hash_value'] = hash_hmac('sha256', $params, config('payment.b2b_secret'), false);

        $this->bodyData['arr_post'] = $arr_post;


        if (strtolower($this->controller) === "portal") {
            $this->bodyData['partner'] = session('partner');
            $this->bodyData['selected'] = session('selected');
            return $this->genView('frontend.page.payment_portal');
        }
        return $this->genView('frontend.page.payment');
    }
}

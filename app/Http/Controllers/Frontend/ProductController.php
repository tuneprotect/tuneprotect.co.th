<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\Base\BaseInsuranceObject;
use App\Enum\Base\BaseTAObject;
use App\Enum\COVIDAObject;
use App\Enum\COVIDLObject;
use App\Enum\ONTALNObject;
use App\Enum\PAObject;
use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\BuyLog;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use phpDocumentor\Reflection\Project;


class ProductController extends BaseController
{

    protected $thankYouParam = '';

    public function index($link = null, $selected = null)
    {

        if (empty($link)) {
            return redirect("/" . $this->locale);
        }

        if (in_array($selected, ['ONTALN', 'ONCOVIDL', 'ONTA']) && $this->locale === 'th') {
            return redirect()->route('current', ['locale' => 'en', 'controller' => 'product', 'func' => $link, 'params' => $selected]);
        }

        $this->bodyData['current_product'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_PRODUCT)
            ->where('friendly_url', $link)
            ->with(['locales', 'productPackage' => function ($q) {
                $q->with('locales');
            }, 'faq' => function ($q) {
                $q->with('locales');
            }])
            ->whereRaw(ProjectEnum::isPublish())
            ->first();



        if ($selected) {
            return $this->genDetailPage($selected);

        } else {

            $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTENT_FAQ,$this->bodyData['current_product']->id);
            return $this->genListPage();
        }

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

            return $this->genStaticPage($this->bodyData['current_product'], 'frontend.page.product_no_package');
        }
    }

    protected function genDetailPage($selected)
    {

        if ($selected) {
            $this->bodyData['selected'] = $selected;
            foreach ($this->bodyData['current_product']->productPackage as $v) {
                if ($v->code === $selected) {
                    $this->setStaticPageHeader($v);
                    $this->bodyData['slideshow'] = [$this->bodyData['current_product']];
                }
            }
        } else {
            $this->bodyData['selected'] = @$this->bodyData['current_product']->productPackage[0]->code;
            $this->setStaticPageHeader($this->bodyData['current_product']);
        }

        foreach ($this->bodyData['current_product']->productPackage as $v) {
            if ($v->code === $this->bodyData['selected']) {
                $this->bodyData['current_package'] = $v;
            }
        }


        if (Storage::disk('public')->exists('json/' . strtolower($this->bodyData['selected']) . '.json')) {
            $package_detail = json_decode(Storage::disk('public')->get('json/' . strtolower($this->bodyData['selected']) . '.json'));

            foreach ($package_detail as $k => $v) {
                if (str_starts_with($k, $selected)) {
                    $this->bodyData['package_detail'][$k] = $v;
                }
            }
        }

        $this->template->setBody('id', 'product_page');

        $this->bodyData['privacy'] = WebContent::where('type_id', ProjectEnum::STATIC_PAGE_PRIVACY_POLICY)
            ->with('locales')
            ->first();

        $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTENT_FAQ,$this->bodyData['current_package']->id);

        try {
            $this->template->setFootJS(mix("/js/frontend/product/" . strtolower($this->bodyData['selected']) . ".js"));
        } catch (\Exception $exception) {

        }

        return $this->genView('frontend.page.product');
    }

    protected function combindObj($data)
    {

        if (substr($data['fdPackage'], 0, 4) === 'ONPA') {
            $obj = new PAObject();
        } elseif (substr($data['fdPackage'], 0, 8) === 'ONCOVIDA') {
            $obj = new COVIDAObject();
        } elseif (substr($data['fdPackage'], 0, 8) === 'ONCOVIDL') {
            $obj = new COVIDLObject();
        } elseif (substr($data['fdPackage'], 0, 6) === 'ONTADM') {
            $obj = new BaseTAObject();
            $obj->fdFlgInbound = "D";
        } elseif (substr($data['fdPackage'], 0, 6) === 'ONTALN') {
            $obj = new ONTALNObject();
            $obj->fdFlgInbound = "I";
        } elseif (substr($data['fdPackage'], 0, 4) === 'ONTA') {
            $obj = new BaseTAObject();
            $obj->fdDestFrom = "THA";

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
                default :
                    $obj->$k = isset($data[$k]) ? $data[$k] : $obj->$k;
                    break;
            }
        }

        if (substr($data['fdPackage'], 0, 8) === 'ONCOVIDA') {


            if (isset($data['fdQuestion2_1']) && ($key = array_search('other', $data['fdQuestion2_1'])) !== false) {
                unset($data['fdQuestion2_1'][$key]);
            }

            if (!empty($data['ctrl_question_2_specify'])) {
                $data['fdQuestion2_1'][] = $data['ctrl_question_2_specify'];
            }

            if (isset($data['fdQuestion2_1'])) {
                $obj->fdQuestion2_1 = implode(',', $data['fdQuestion2_1']);
            }

            $package = (array)json_decode(Storage::disk('public')->get('json/oncovida.json'));

            $obj->fdPackage = $package[$data['fdPackage']]->apiPackage;
        } elseif (substr($data['fdPackage'], 0, 8) === 'ONCOVIDL' ||
            substr($data['fdPackage'], 0, 6) === 'ONTALN'
        ) {
            $obj->fdlanguage = 1;
        }

        return $obj;
    }

    protected function logData($obj)
    {
        $result = BuyLog::create([
            'data' => $obj
        ]);

        $apiResult = $this->sendToApiLog($obj);

        if (!$apiResult["status"]) {
            return redirect()->route('current', ['locale' => $this->locale, 'controller' => 'product', 'func' => 'error']);
        }

        $result->log_id = $apiResult['message'];
        $result->save();

        return $result;

    }

    public function makePayment(Request $request)
    {
        $data = $request->all();

        if (isset($data['send_data'])) {
            $data = (array)json_decode($data['send_data']);

            $obj = $this->combindObj(array_merge($data, (array)$data["profile"][0]));
            $result = $this->logData($obj);
            $log_id[] = $result->log_id;


            $arr['fdInvoice'] = ProjectEnum::INVOICE_PREFIX.$result->fdInvoice;
            $price = $obj->fdPayAMT;

            foreach ($data["profile"] as $k => $profile) {

                if ($k > 0) {
                    $obj = $this->combindObj(array_merge($data, (array)$profile, $arr));
                    $logResult = $this->logData($obj);
                    $log_id[] = $logResult->log_id;
                    $price += $obj->fdPayAMT;
                }
            }

            return $this->sendTo2C2P($result, $price, $log_id);
        } else {
            $obj = $this->combindObj($data);
            $result = $this->logData($obj);
            return $this->sendTo2C2P($result);
        }


    }

    protected function sendTo2C2P($obj, $price = null, $log_id = null)
    {

        $arr_post['version'] = '8.5';
        $arr_post['merchant_id'] = config('payment.mid');
        $arr_post['payment_description'] = "Buy Insurance";
        $arr_post['order_id'] = ProjectEnum::INVOICE_PREFIX . $obj->fdInvoice;
        $arr_post['currency'] = "764";

        $arr_post['amount'] = str_pad(($price ? $price : $obj->data["fdPayAMT"]) * 100, 12, '0', STR_PAD_LEFT);

        $arr_post['customer_email'] = $obj->data["fdEmail"];
        $arr_post['user_defined_1'] = ($log_id ? implode(',', $log_id) : $obj->log_id);
        $arr_post['result_url_1'] = url("{$this->locale}/product/result");
        $arr_post['payment_option'] = "CC,FULL";
        $arr_post['default_lang'] = $this->locale;
        $params = join($arr_post);
        $arr_post['hash_value'] = hash_hmac('sha256', $params, config('payment.secret'), false);    //Compute hash value

        $this->bodyData['arr_post'] = $arr_post;


        return $this->genView('frontend.page.payment');
    }

    protected function getApiIssueLink($package)
    {

        $link = "";

        if (str_starts_with($package, 'ONPA')) {
            $this->thankYouParam = 'ONPA';
            $link = 'IssuePolicyPAChoice';
        } elseif (substr($package, 0, 8) === 'ONCOVIDA' || substr($package, 0, 8) === 'ONCOVIDL') {
            $this->thankYouParam = substr($package, 0, 8);
            $link = 'IssuePolicyCovid19';
        } elseif (substr($package, 0, 6) === 'ONTALN') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = "IssuePolicyInbound";
        } elseif (substr($package, 0, 6) === 'ONTADM' || substr($package, 0, 4) === 'ONTA') {
            $this->thankYouParam = substr($package, 0, 6);
            $link = "IssuePolicy";
        }

        return config('tune-api.url') . $link;
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

    protected function sendToApiIssue($fdInvoice, $fdPaymentCh, $fdCard_No)
    {

        $result = BuyLog::where('fdInvoice', str_replace(ProjectEnum::INVOICE_PREFIX, "", $fdInvoice))->get();

        $arrResult = [];

        foreach ($result as $v) {
            $data = $v->data;

            $data['fdPayDate'] = date('d/m/Y');
            $data['fdPayTime'] = date('H:i');
            $data['fdPaymentCh'] = $fdPaymentCh;
            $data['fdCard_No'] = $fdCard_No;
            $data['fdPayStatus'] = 'success';

            $v->data = $data;

            $client = new Client();

            $response = $client->request('POST', $this->getApiIssueLink($data['fdPackage']), [
                'auth' => [config('tune-api.user'), config('tune-api.password')],
                'headers' => [
                    'Content-Type' => 'application/json'
                ],
                'body' => json_encode($data)
            ]);
            $apiResult = (array)json_decode($response->getBody()->getContents(), true);

            if ($apiResult["status"]) {
                $v->data = null;
            }

            $v->result = $apiResult;
            $v->save();

            $arrResult[] = $apiResult['message'];

            if (!$apiResult["status"]) {
                return false;
            }
        }

        return $arrResult;
    }

    public function error()
    {
        return $this->genStatusPage(ProjectEnum::STATIC_PAGE_PAYMENT_ERROR);
    }

    public function cancel()
    {
        return redirect('/' . $this->locale);
    }

    public function pending()
    {
        return $this->genStatusPage(ProjectEnum::STATIC_PAGE_PAYMENT_PENDING);
    }

    public function reject()
    {
        return $this->genStatusPage(ProjectEnum::STATIC_PAGE_PAYMENT_REJECT);
    }

    public function thankyou(Request $request)
    {
        $this->bodyData['doc_no'] = $request->session()->get('doc_no');
        return $this->genStatusPage(ProjectEnum::STATIC_PAGE_PAYMENT_THANK_YOU);
    }

    public function result(Request $request)
    {
        $result = null;

        switch ($request->input('payment_status')) {
            case '000':

                $result = $this->sendToApiIssue($request->input('order_id'), $request->input('payment_channel'), $request->input('masked_pan'));
                if ($result) {
                    $request->session()->put('doc_no', implode(', ', $result));
                    $func = 'thankyou';
                } else {
                    $func = 'error';
                }
                break;
            case '001':
                $func = 'pending';
                break;
            case '002':
                $func = 'reject';
                break;
            case '003':
                $func = 'cancel';
                break;
            default:
                $func = 'error';
        }

        return redirect()->route('current', ['locale' => $this->locale, 'controller' => 'product', 'func' => $func, 'params' => $this->thankYouParam]);
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
        $arr_post['result_url_1'] = url("{$this->locale}/product/result");
        $arr_post['payment_option'] = "CC,ALIPAY,BANK";
        $arr_post['default_lang'] = $this->locale;
        $params = join($arr_post);
        $arr_post['hash_value'] = hash_hmac('sha256', $params, config('payment.secret'), false);    //Compute hash value

        $this->bodyData['arr_post'] = $arr_post;

        return $this->genView('frontend.page.payment');
    }

    public function testIssueApi()
    {
        $result = $this->sendToApiIssue("00000000075", "001", "5565654654");
        dd($result);
    }

    public function testLogApi()
    {
        $data['send_data'] = '{"fdPayAMT":288,"fdFromDate":"2021-01-16","fdToDate":"2021-01-31","ctrl_terms":true,"fdSendType":"E","ctrl_accept_insurance_term":true,"profile":[{"fdSex":"M","fdTitle":"042","fdName":"fsdfs","fdSurname":"fdfsdfds","ctrl_document_type":"เลขที่หนังสือเดินทาง","fdNationalID":"fsdffsfdfs","fdHBD":"1979-02-10","fdAge":41,"fdEmail":"fsdfs@fsdfdsf.fsd","fdTelephone":"0152155489","fdAddr_Num":"fsdfsdf","fdAddr_District":"fsdfsdf","fdAddr_Amphur":"00*18","fdAddr_PostCode":"10160","ctrl_province":"00*18","fdProvince":"00","fdBenefit":"ทายาทโดยชอบธรรม","fdBenefit_name":"","fdRelation":""},{"fdSex":"M","fdTitle":"042","fdName":"fsdfs","fdSurname":"fdfsdfds","ctrl_document_type":"เลขที่หนังสือเดินทาง","fdNationalID":"fsdffsfdfs","fdHBD":"1979-02-10","fdAge":41,"fdEmail":"fsdfs@fsdfdsf.fsd","fdTelephone":"0152155489","fdAddr_Num":"fsdfsdf","fdAddr_District":"fsdfsdf","fdAddr_Amphur":"00*18","fdAddr_PostCode":"10160","ctrl_province":"00*18","fdProvince":"00","fdBenefit":"ทายาทโดยชอบธรรม","fdBenefit_name":"","fdRelation":""},{"fdSex":"M","fdTitle":"042","fdName":"fsdfs","fdSurname":"fdfsdfds","ctrl_document_type":"เลขที่หนังสือเดินทาง","fdNationalID":"fsdffsfdfs","fdHBD":"1979-02-10","fdAge":41,"fdEmail":"fsdfs@fsdfdsf.fsd","fdTelephone":"0152155489","fdAddr_Num":"fsdfsdf","fdAddr_District":"fsdfsdf","fdAddr_Amphur":"00*18","fdAddr_PostCode":"10160","ctrl_province":"00*18","fdProvince":"00","fdBenefit":"ทายาทโดยชอบธรรม","fdBenefit_name":"","fdRelation":""}],"fdDestFrom":"01","fdDestTo":"05","fdPackage":"ONTADM204"}';

        $data = (array)json_decode($data['send_data']);

        $obj = $this->combindObj(array_merge($data, (array)$data["profile"][0]));
        $result = $this->logData($obj);

        dd($result);


    }

}


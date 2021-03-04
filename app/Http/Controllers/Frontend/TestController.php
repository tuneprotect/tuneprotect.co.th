<?php


namespace App\Http\Controllers\Frontend;


use App\Http\Controllers\Frontend\Base\BaseController;
use Facebook\Facebook;
use GuzzleHttp\Client;

class TestController extends BaseController
{
    public function index()
    {
        $this->template->setBody('id', 'static_page');
        $this->template->setFootJS(mix("/js/frontend/main.js"));
        return $this->genView('frontend.test.static');
    }

    public function mon()
    {
        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->template->setBody('id', 'static_page');
        return $this->genView('frontend.test.static_mon');
    }

    public function payment()
    {

        $arr_post['version'] = '8.5';
        $arr_post['merchant_id'] = config('payment.mid');
        $arr_post['payment_description'] = "Buy Insurance";
        $arr_post['order_id'] = "W000000000120";
        $arr_post['currency'] = "764";

        $arr_post['amount'] = str_pad(120 * 100, 12, '0', STR_PAD_LEFT);

        $arr_post['customer_email'] = "test@test.com";
        $arr_post['user_defined_1'] = "ASAHJUDSAIOUJIAD";
        $arr_post['result_url_1'] = url("{$this->locale}/product/result");
        $arr_post['payment_option'] = "CC,FULL";
        $arr_post['default_lang'] = $this->locale;
        $params = join($arr_post);
        $arr_post['hash_value'] = hash_hmac('sha256', $params, config('payment.secret'), false);    //Compute hash value


        dd($arr_post, config('payment'));
    }

    public function fb()
    {

//        $longLiveAccessToken = "EAACQr5jl9KMBAPSejLiAk8rPYCfw1SWYlWBm9QoB322v9YU8G51z0ZBZA8VqS5teZCNfSEDJ3kf4LNkJyLbgbYvwehjzftyEM3aPPIulbIyNkTcZAfAc8yp94hCjFficvvrCObsi3gto4cuKGTXdZBbk2Fe3sOkcHYkcAIGA0gAZDZD";
//
//        $client = new Client();
//
//        $response = $client->request('GET', "https://graph.facebook.com/714883198577339?fields=access_token&access_token=$longLiveAccessToken");
//        $accessTokenResult = json_decode($response->getBody()->getContents(), true);
//
//        $response = $client->request('GET', "https://graph.facebook.com/v9.0/714883198577339/ratings?fields=review_text%2Ccreated_time%2Copen_graph_story%2Crating%2Crecommendation_type%2Creviewer%2Chas_review&access_token={$accessTokenResult['access_token']}");
//        $fb_result = json_decode($response->getBody()->getContents(), true);
//
//
//
//
//        dd($fb_result);

    }

}

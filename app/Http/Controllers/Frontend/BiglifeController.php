<?php


namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Frontend\Base\BaseController;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;
// use App\Http\Requests\MemberidRequest;

class BiglifeController  extends BaseController
{
    public function index($link = null, $selected = null,$member_id = null)
    {
//        $this->bodyData['controller'] = "biglife";
        $this->bodyData['urllinkvalidate'] =  config('tune-api.url') . 'Validate';
        $this->bodyData['auth'] =  config('tune-api.user').':'.config('tune-api.password');

        $this->template->setFootJS(mix("/js/frontend/biglife.js"));
        return $this->genView('frontend.page.biglife_validation');
    }

     public function Validation($memberId)
     {
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
         return json_decode($response->getBody()->getContents(), true);
     }

}


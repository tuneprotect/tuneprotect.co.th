<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ServiceController extends BaseController
{
    public function index($link = null)
    {
        if (!empty($link)) {
            return $this->genDetail($link);
        }

        abort(404);
    }


    protected function genDetail($link)
    {

        $content = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_SERVICE_MY_HEALTH)
            ->with('locales')
            ->where('friendly_url', $link)
            ->whereRaw(ProjectEnum::isPublish())
            ->first();
        $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTENT_FAQ, $content->id);
        $this->template->setFootJS(mix("/js/frontend/service.js"));
        if ($content) {

            $this->bodyData['extraComponent'] = 'frontend.component.mso-form';

            return $this->genStaticPage($content, 'frontend.page.static');
        }

    }

    public function checkPolicy(Request $request)
    {

        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'CheckPolicyCI', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'Policy_No' => $request->input('policy')
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);

    }

    public function sendContact(Request $request)
    {

        $client = new Client();
        $response = $client->request('POST', config('tune-api.url') . 'ContractMSO', [
            'auth' => [config('tune-api.user'), config('tune-api.password')],
            'headers' => [
                'Content-Type' => 'application/json'
            ],
            'body' => json_encode([
                'Policy_No' => $request->input('policy'),
                'Name' => $request->input('name'),
                'Email' => $request->input('email'),
                'Telephone' => $request->input('tel'),
                'Text' => $request->input('message'),
                'Language' => $this->locale,
            ])
        ]);
        return json_decode($response->getBody()->getContents(), true);

    }
}

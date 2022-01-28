<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Frontend\Base\BaseController;
use App\Mail\ContactUsEmail;
use App\Models\LeadForms;
use App\Models\Setting;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;
use Illuminate\Support\Facades\Mail;

class TaxDeductionController extends BaseController
{
    public function index()
    {
        $this->template->setFootJS(mix("/js/frontend/taxdeduction.js"));
        return $this->genView('frontend.page.tax_deduction');

    }

    public function apiTaxDeduction(Request $request)
    {
        $status = 'error';
        $message = '';
        try {
            $data = $request->all();
            $client = new Client();
            $response = $client->request('POST', config('tune-api.url') . 'TaxDeduction', [
                'auth' => [config('tune-api.user'), config('tune-api.password')],
                'headers' => [
                    'Content-Type' => 'application/json'
                ],
                'body' => json_encode($data)
            ]);
            $res = (object)json_decode($response->getBody()->getContents(), true);

            if ($res->status) {
                $status = self::SUCCESS;
            } else {
                $status = self::ERROR;
                $message = $res->message;
            }

        } catch (\Exception $ex) {
            $message = $ex->getMessage();

        }

        return response()->json([
            'status' => $status,
            'message' => $message
        ]);


    }

}

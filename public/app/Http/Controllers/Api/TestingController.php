<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TestingController extends BaseApiController
{

    public function email(Request $request)
    {

        try {
            Mail::raw($request->input('content'), function ($message) use ($request) {

                $message
                    ->to($request->input('to'))
                    ->subject($request->input('subject'));
                $message->from(config('mail.from.address'), config('mail.from.name'));
            });
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();
        }
        return $this->send();

    }

}

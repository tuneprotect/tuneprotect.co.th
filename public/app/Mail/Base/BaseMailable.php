<?php


namespace App\Mail\Base;


use App\Models\Setting;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

Abstract class BaseMailable extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct()
    {
        $noReplyEmail = Setting::get(Setting::NO_REPLY_EMAIL);

        if(!empty($noReplyEmail)){
            $noReplyEmailName = Setting::get(Setting::NO_REPLY_EMAIL_NAME);
            $this->from($noReplyEmail,$noReplyEmailName);
        }
    }
}

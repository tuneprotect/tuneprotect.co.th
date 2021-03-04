<?php

namespace App\Mail;

use App\Mail\Base\BaseMailable;

class ContactUsEmail extends BaseMailable
{

    protected $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        parent::__construct();
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject("Contact us from {$this->data["name"]}" )
            ->view('frontend.email.contact')
            ->with('data',$this->data->toArray());
    }
}

<?php

namespace App\Mail;

use App\Mail\Base\BaseMailable;

class AdminForgotPassword extends BaseMailable
{

    protected $adminUser;

    /**
     * Create a new message instance.
     *
     * @param $adminUser
     */
    public function __construct($adminUser)
    {
        parent::__construct();

        $this->adminUser = $adminUser;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Reset Password')
            ->view('backstage.email.forgot_password')
            ->with([
                'app_name' => config('app.name'),
                'link' => url("/backstage/reset_password/{$this->adminUser->token}"),
                'first_name' => $this->adminUser->first_name,
                'last_name' => $this->adminUser->last_name
            ]);
    }
}

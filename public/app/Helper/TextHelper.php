<?php


namespace App\Helper;


use Illuminate\Support\Facades\Validator;

class TextHelper
{
    public static function isEmail($email)
    {
        $validator = Validator::make(['email' => $email], [
            'email' => 'required|regex:/(.+)@(.+)\.(.+)/i',
        ]);

        return !($validator->fails());

    }
}

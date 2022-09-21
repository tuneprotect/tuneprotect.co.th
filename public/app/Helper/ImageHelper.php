<?php


namespace App\Helper;


class ImageHelper
{
    public static function checkCanCompress($mimeType)
    {
        return in_array($mimeType, ["image/png", 'image/jpeg']);
    }
}

<?php


namespace App\Helper;

class TemplateHelper
{
    const DOCTYPE = 'doctype';
    const HTML = 'html';
    const META = 'meta';
    const TITLE = 'title';
    const BODY = 'body';
    const STYLESHEET = 'stylesheet';
    const FAVICON = 'favicon';
    const HEAD_OTHER = 'head_other';
    const FOOT_OTHER = 'foot_other';
    const OPEN_BODY = 'open_body';

    const HEAD_JS = 'head_js';
    const FOOT_JS = 'foot_js';

    const DOCTYPE_HTML5 = '<!DOCTYPE html>';


    protected $templateOption;

    public function __construct()
    {
        $this->setDoctype(self::DOCTYPE_HTML5);
        $this->setTitle(config('app.name'));
    }

    public function setDoctype($doctype)
    {
        $this->templateOption[self::DOCTYPE] = $doctype;
    }

    public function setTitle($text)
    {
        $this->templateOption[self::TITLE] = $text;
    }

    public function setHtml($property, $value)
    {
        $this->templateOption[self::HTML][$property] = $value;
    }

    public function setMeta($arr_attribute)
    {
        $this->templateOption[self::META][] = $arr_attribute;
    }

    public function setBody($property, $value)
    {
        $this->templateOption[self::BODY][$property] = $value;
    }

    public function setStylesheet($path, $arr_property = array())
    {
        $this->templateOption[self::STYLESHEET][] = array('path' => $path, 'property' => $arr_property);
    }

    public function setFavicon($path, $arr_property = array())
    {
        $this->templateOption[self::FAVICON][] = array('path' => $path, 'property' => $arr_property);
    }

    public function setHeadOther($text)
    {
        $this->templateOption[self::HEAD_OTHER][] = $text;
    }

    public function setFootOther($text)
    {
        $this->templateOption[self::FOOT_OTHER][] = $text;
    }

    public function setBodyOpen($text)
    {
        $this->templateOption[self::OPEN_BODY][] = $text;
    }

    public function setHeadJS($path, $arr_property = array())
    {
        $this->templateOption[self::HEAD_JS][] = array('path' => $path, 'property' => $arr_property);
    }

    public function setFootJS($path, $arr_property = array())
    {
        $this->templateOption[self::FOOT_JS][] = array('path' => $path, 'property' => $arr_property);
    }

    public function getTemplateOption()
    {
        return $this->templateOption;
    }

    public static function genAttribute($value)
    {
        $arr = [];
        if (!empty($value)) {
            foreach ($value as $k1 => $v1) {
                $arr[] = "{$k1}=\"{$v1}\"";
            }
        }
        return implode(' ', $arr);
    }

}


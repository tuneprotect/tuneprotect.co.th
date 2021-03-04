<?php


namespace App\Http\Controllers\Backstage\Base;


use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->template->setHtml('lang', app()->getLocale());
        $this->template->setStylesheet("https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Material+Icons&display=swap");
        try {
            $this->template->setFootJS(mix('/js/backstage/index.js'));
        } catch (\Exception $ex) {
        }

    }
}

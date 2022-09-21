<?php


namespace App\Http\Controllers\Backstage;


use App\Http\Controllers\Backstage\Base\BaseController;

class IndexController extends BaseController
{
    public function index()
    {
        return $this->genView('backstage.layout.main');
    }
}

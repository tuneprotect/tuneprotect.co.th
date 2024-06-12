<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use Illuminate\Support\Facades\Redirect;

class IndexController extends BaseController
{
    public function index()
    {
        //return Redirect::to(config('project.online_link'));
        return Redirect::to(config('project.online_link'), 301);
    }
}

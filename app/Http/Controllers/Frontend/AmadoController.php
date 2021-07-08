<?php


namespace App\Http\Controllers\Frontend;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Enum\ProjectEnum;

class AmadoController  extends ProductController
{
    protected $controller = 'amado';
    public function index($link = null, $selected = null)
    {
        $return_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        session(['return_link' => $return_link]);

//        $this->template->setFootJS(mix("/js/frontend/biglife.js"));
        return $this->genView('frontend.page.amado_main');

    }


}


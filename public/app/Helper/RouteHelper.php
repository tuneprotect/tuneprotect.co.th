<?php


namespace App\Helper;


use Illuminate\Support\Facades\Route;
use ReflectionMethod;

class RouteHelper
{

    public static function getNamespace(){
        $stack = Route::getCurrentRoute();
        return $stack->getAction('namespace');
    }


    public static function genArg($controller,$func,$link){

        if (!is_callable([$controller,$func])) {
            $link = "$func/{$link}";
            $func = 'Index';
        }

        $ref = new ReflectionMethod($controller, $func);
        $params = $ref->getParameters();
        $args = [];

        $values = explode('/', $link);


        foreach ($params as $param) {
            preg_match('/<(required|optional)> (?:([\\\\a-z\d_]+) )?(?:\\$(\w+))(?: = (\S+))?/i', (string)$param, $matches);

            if ($matches[2] == null) {
                $args[$matches[3]] = array_shift($values);
            }
        }
        return array_merge($args, $values);
    }
}

<?php

use App\Http\Controllers\Frontend\TestController;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$connection = 'staging';
$cache = 'database';


if (isset($_SERVER['SERVER_NAME']) && strpos($_SERVER['SERVER_NAME'], config("project.staging_prefix")) === false) {
    $connection = 'live';
    $cache = 'file';

}


Config::set('database.default', $connection);
Config::set('cache.default', $cache);
DB::reconnect();

Route::get('/th/test', [TestController::class, 'index']);
Route::get('/th/test-mon', [TestController::class, 'mon']);

Route::namespace('Frontend')
    ->any('/{locale?}/{controller?}/{func?}/{params?}',
        function ($locale = 'th', $controller = 'Index', $func = 'index', $params = null) {
            $controller = str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $controller)));
            $controller = "App\\Http\\Controllers\\Frontend\\{$controller}Controller";

            $func_name = str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $func)));

            try {
                $values = \App\Helper\RouteHelper::genArg($controller, $func, $params);

                if (!is_callable([$controller, $func_name])) {
                    $func = 'Index';
                } else {
                    $func = $func_name;
                }

                return App::call([new $controller, $func], $values);

            } catch (BindingResolutionException $ex) {
                abort(404);
            } catch (ReflectionException $ex) {
                abort(404);
            }


        })->where('params', '.*')->name("current");

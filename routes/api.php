<?php

use App\Http\Controllers\Api\AdminLogController;
use App\Http\Controllers\Api\SystemController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/User/login', [UserController::class, 'login']);
Route::post('/System/overallCheck', [SystemController::class, 'overallCheck']);
Route::post('/AdminLog/add', [AdminLogController::class, 'add']);

Route::middleware('auth:api')
    ->any('/{controller}/{func}', function ($controller, $func) {

        try {
            $controller = "App\\Http\\Controllers\\Api\\{$controller}Controller";
            return App::call([new $controller, $func]);
        }catch (ReflectionException $ex){
            return response()->json([
                'status' => 'error',
                'message' => 'No Api Found '.$ex->getMessage()
            ]);
        }
    })->where('params', '.*')->name("current");

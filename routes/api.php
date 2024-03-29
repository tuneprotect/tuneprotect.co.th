<?php

use App\Http\Controllers\Api\AdminLogController;
use App\Http\Controllers\Api\SystemController;
use App\Http\Controllers\Api\ApiConnectController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProductController;
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
Route::post('/ApiConnect/myHomeSmartPackage', [ApiConnectController::class, 'myHomeSmartPackage']);
Route::post('/ApiConnect/myHomeSmartPackage1y', [ApiConnectController::class, 'myHomeSmartPackage1y']);
Route::post('/ApiConnect/myHomeSmartPackage3y', [ApiConnectController::class, 'myHomeSmartPackage3y']);
Route::post('/ApiConnect/blockHomePolicy', [ApiConnectController::class, 'blockHomePolicy']);
Route::post('/ApiConnect/chkAirAsiaMemberID', [ApiConnectController::class, 'chkAirAsiaMemberID']);
Route::post('/ApiConnect/getSuscoBranch', [ApiConnectController::class, 'getSuscoBranch']);


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

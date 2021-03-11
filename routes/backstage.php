<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backstage\ExportController;
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


Route::namespace('Backstage')
    ->group(function () {
        Route::get('/backstage/export/leadform', [ExportController::class, 'leadform']);
        Route::get('/backstage/{path?}', 'IndexController@index')
            ->name('BackstageIndex')
            ->where('path', '.*');

    });

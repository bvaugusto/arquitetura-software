<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

 /**
  *
  * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
  * @version 1.0
  * @api
  * @return void
  */
Route::group(['prefix' => 'company'], function()
{
    Route::get('', 'CompanyController@index');
    Route::get('create', 'CompanyController@create');
    Route::post('', 'CompanyController@store');
    Route::get('{company}', 'CompanyController@show');
    Route::get('{company}/edit', 'CompanyController@edit');
    Route::put('{company}', 'CompanyController@update');
    Route::delete('{company}', 'CompanyController@destroy');
});

 /**
  *
  * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
  * @version 1.0
  * @api
  * @return void
  */
Route::group(['prefix' => 'address'], function()
{
    Route::get('', 'AddressController@index');
});

 /**
  *
  * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
  * @version 1.0
  * @api
  * @return void
  */
Route::group(['prefix' => 'segment'], function()
{
    Route::get('', 'SegmentController@index');
    Route::get('create', 'SegmentController@create');
    
});
<?php

use Illuminate\Http\Request;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;

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

//Blogger
Route::get('showPost/{id}','PostController@showPost');
Route::get('listPost','PostController@listPost');
Route::post('createPost','PostController@createPost');
Route::put('updatePost/{id}','PostController@updatePost');
Route::delete('deletePost/{id}','PostController@deletePost');

//User
Route::get('showComment/{id}','CommentController@showComment');
Route::get('listComment','CommentController@listComment');
Route::post('createComment','CommentController@createComment');
Route::put('updateComment/{id}','CommentController@updateComment');
Route::delete('deleteComment/{id}','CommentController@deleteComment');

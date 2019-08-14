<?php

use Illuminate\Http\Request;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\UserController;

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

    Route::get('bloggerPost/{id}','UserController@blogger_Post');//O blogger ver os seus Posts **OK
    Route::get('user/{id}','PostController@user');//Ver o blogger de um post  **So funciona quando o nome é user, por motivos 
    //magicos
    Route::get('user/{id}','CommentController@user');//Retorna quem fez o comentario **Mesmo motivo do ver o blogger de um post
    Route::get('postComment/{id}','PostController@postComment');// Retorna todos os comentarios de um Post






    //Comentario
    Route::get('showComment/{id}','CommentController@showComment');
    Route::get('listComment','CommentController@listComment');
    Route::post('createComment','CommentController@createComment');
    Route::put('updateComment/{id}','CommentController@updateComment');
    Route::delete('deleteComment/{id}','CommentController@deleteComment');

    //User
    Route::get('showUser/{id}','UserController@showUser');
    Route::get('listUser/','UserController@listUser');
    Route::post('createUser','UserController@createUser');
    Route::put('updateUser/{id}','UserController@updateUser');
    Route::delete('deleteUser/{id}','UserController@deleteUser');





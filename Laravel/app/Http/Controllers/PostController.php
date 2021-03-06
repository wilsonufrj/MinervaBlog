<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\PostRequest;
use LaravelLegends\PtBrValidator\Validator;

use App\Post;

class PostController extends Controller
{
    /*public function construct(){
        $this->middleware('blogger_middleware');
    }*/

    //Criar um post (Somente para o Blogger)**Falta Atualizar
    public function createPost(PostRequest $request){

        if(!Storage::exists('PostPhotos/'))
            Storage::makeDirectory('PostPhotos/',0775,true);

        $post = new Post;

        $post->content = $request->content;
        $post->title = $request->title;
        $post->user_id = $request->user_id;

        //Salvando a foto
        $image = base64_decode($request->photos);
        $imgName = uniqid().'.png';
        $path = storage_path('app/PostPhotos/'.$imgName);
        file_put_contents($path,$image);
        $post->photos= $imgName;

        $post->save();

        return response()->json([$post]);
    }

    //Listas todos os Post(Todos)
    public function listPost(){
        return Post::all();
    }


    public function showPost($id){

        $post = Post::findOrFail($id);
        $path = storage_path('app/PostPhotos/'.$post->image);
        if($post){
            return response()->json($post); 
        }else{
            $data = "Post nao encontrado,verifique o id novamente";
            return response()->error($data,400);
        }
    }

    //Atualizar um Post (Somente para o Blogger)**Falta atualizar
    public function updatePost(PostRequest $request,$id){

        $post = Post::findOrFail($id);

        if($request->content){
            $post->content = $request->content;
        }
        if($request->user_id){
            $post->user_id = $request->user_id;
        }
        if($request->title){
            $post->title = $request->title;
        }

        $post->save();

        return response()->json([$post]);
    }

    //Deletar o Post(Somente o Blogger)
    public function deletePost($id){
        Post::destroy($id);
        return response()->json(['Post deletado']);
    }

    //Ver o Blogger de um post
    public function user($id){
        return Post::find($id)->user;
    }

    //Retorna TODOS os comentarios de um post
    public function postComment($id){
        return Post::find($id)->postComment;
    }


}

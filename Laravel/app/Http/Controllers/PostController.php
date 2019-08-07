<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{

    //Criar um post (Somente para o Blogger)**Falta Atualizar
    public function createPost(Request $request){
        $post = new Post;

        $post->conteudo = $request->conteudo;
        $post->user_id = $request->user_id;
        $post->save();

        return response()->json([$post]);
    }

    //Listas todos os Post(Todos)
    public function listPost(){
        return Post::all();
    }

    //Procurar um unico Post(Todos)
    public function showPost($id){
        $post = Post::findOrFail($id);
        return $post;
    }

    //Atualizar um Post (Somente para o Blogger)**Falta atualizar
    public function updatePost(Request $request,$id){

        $post = Post::findOrFail($id);

        if($request->conteudo){
            $post->conteudo = $request->conteudo;
        }
        if($request->user_id){
            $post->user_id = $request->user_id;
        }
        $post->save();

        return response()->json([$post]);
    }

    //Deletar o Post(Somente o Blogger)
    public function deletePost($id){
        Post::destroy($id);
        return response()->json(['Post deletado']);
    }

}

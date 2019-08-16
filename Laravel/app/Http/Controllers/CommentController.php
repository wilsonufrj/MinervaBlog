<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use App\Comment;
use App\User;

class CommentController extends Controller
{

    //Cria um comentario (Usuario e Blogger somente)
    public function createComment(CommentRequest $request){
        $comment = new Comment; 


        $comment->comment_text = $request->comment_text;

        $comment->save();

        return response()->json($comment);

    }
    //Listas todos os Post(Todos)
    public function listComment(){
        return Comment::all();
    }

    //Procurar um unico Post(Todos)
    public function showComment($id){
        $comment = Comment::findOrFail($id);
        return $comment;
    }

    //Atualizar um Comentario (Usuario e Blogger somente)**Falta atualizar
    public function updateComment(CommentRequest $request,$id){

        $comment = Comment::findOrFail($id);

        if($request->comment_text){
            $comment->comment_text = $request->comment_text;
        }
        if($request->user_id){
            $comment->user_id = $request->user_id;
        }
        if($request->post_id){
            $comment->post_id = $request->post_id;
        }
        $comment->save();

        return response()->json([$comment]);
    }

    //Deletar o Comentario(Usuario e Blogger somente)
    public function deleteComment($id){
        Comment::destroy($id);
        return response()->json(['Comment deletado']);
    }


    //Retorna quem fez o comentario
    public function user($id){
        return Comment::find($id)->user;
    }
}

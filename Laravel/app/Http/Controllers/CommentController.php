<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comment;

class CommentController extends Controller
{

    //Cria um comentario (Usuario e Blogger somente)
    public function createComment(Request $request){
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
    public function updateComment(Request $request,$id){

        $comment = Comment::findOrFail($id);

        if($request->comment_text){
            $comment->comment_text = $request->comment_text;
        }
        $comment->save();

        return response()->json([$comment]);
    }

    //Deletar o Comentario(Usuario e Blogger somente)
    public function deleteComment($id){
        Comment::destroy($id);
        return response()->json(['Comment deletado']);
    }
}

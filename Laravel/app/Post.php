<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //Retorna o blogger que criou o post
    public function user(){
        return $this->belongsTo('App\User');
    }

    //Retorna os comentarios de um Post
    public function postComment(){
        return $this->hasMany('App\Comment');
    }

}

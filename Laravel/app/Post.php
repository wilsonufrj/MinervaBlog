<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //user que criou o post
    public function user(){
        return $this->belongsTo('App\User');
    }

}

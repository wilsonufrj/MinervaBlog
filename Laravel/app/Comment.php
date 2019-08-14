<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //user que criou o comentario *Errado
    public function user(){
        return $this->belongsTo('App\User');
    }

    //relação n-n que representa os likes *Errado
    public function users(){
        return $this->belongsToMany('App\User');
    }
}

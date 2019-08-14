<?php

use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Comment::create([
            'comment_text'=>"Primeiro Comentario"
        ]);
        App\Comment::create([
            'comment_text'=>"Segundo Comentario"
        ]);
        App\Comment::create([
            'comment_text'=>"Terceiro Comentario"
        ]);
    }
}

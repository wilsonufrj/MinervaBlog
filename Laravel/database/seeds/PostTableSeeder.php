<?php

use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Post::create([
            'title'=>"Primeiro Post",
            'content'=>"Conteudo do primeiro post,Conteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro postConteudo do primeiro post"
        ]);
        App\Post::create([
            'title'=>"Segundo Post",
            'content'=>"Conteudo do segundo post"
        ]);
        App\Post::create([
            'title'=>"Terceiro Post",
            'content'=>"Conteudo do terceiro post"
        ]);
    }
}

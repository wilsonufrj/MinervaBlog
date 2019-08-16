<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        App\User::create([
            'name'=>'Wilson',
            'CEP'=>'12345678',
            'birthday'=>'12/3/1997',
            'email'=>'waramos97@gmail.com',
            'username'=>'wilsao',
            'password'=>'12345678',
            'is_blogger'=>true
        ]);

        App\User::create([
            'name'=>'Polyana',
            'CEP'=>'12345678',
            'birthday'=>'3/5/2000',
            'email'=>'polyana@gmail.com',
            'username'=>'wilsao',
            'password'=>'12345678',
            'is_blogger'=>true
        ]);

        App\User::create([
            'name'=>'Breno',
            'CEP'=>'12345678',
            'birthday'=>'2/7/2001',
            'email'=>'breno@gmail.com',
            'username'=>'wilsao',
            'password'=>'12345678',
            'is_blogger'=>true
        ]);

        
        factory(App\User::class,10)->create();
    }
}

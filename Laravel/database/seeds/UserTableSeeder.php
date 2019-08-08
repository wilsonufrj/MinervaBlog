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
            'age'=>'22',
            'email'=>'waramos97@gmail.com',
            'username'=>'wilsao',
            'password'=>'123456',
            'is_blogger'=>true
        ]);

        App\User::create([
            'name'=>'Polyana',
            'CEP'=>'12345678',
            'age'=>'18',
            'email'=>'polyana@gmail.com',
            'username'=>'wilsao',
            'password'=>'123456',
            'is_blogger'=>true
        ]);

        App\User::create([
            'name'=>'Breno',
            'CEP'=>'12345678',
            'age'=>'20',
            'email'=>'breno@gmail.com',
            'username'=>'wilsao',
            'password'=>'123456',
            'is_blogger'=>true
        ]);

        
        factory(App\User::class,20)->create();
    }
}

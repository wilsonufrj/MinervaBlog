<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Storage;
use App\User;
use LaravelLegends\PtBrValidator\Validator;

class UserController extends Controller
{
    public function createUser(UserRequest $request){

        if(!Storage::exists('UserPhotos/'))
            Storage::makeDirectory('UserPhotos/',0775,true);

        $user = new User;

        $user->name = $request->name;
        $user->CEP = $request->CEP;
        $user->birthday = $request->birthday;
        $user->email = $request->email;
        $user->username = $request->username;
        $user->password = $request->password;
        
        // Salvando a foto
        $image = base64_decode($request->photos);
        $imgName = uniqid().'.png';
        $path = storage_path('app/UserPhotos/'.$imgName);
        file_put_contents($path,$image);
        $user->photos= $imgName;

        $user->save();

        return response()->json([$user]);
    }

    public function listUser(){
        return User::all();
    }

    public function showUser($id){
        $user = User::findOrFail($id);
        return $user;
    }

    public function updateUser(UserRequest $request, $id){

        $user = User::findOrFail($id);
        
        if($request->name){
            $user->name = $request->name;
        }
        if($request->CEP){
            $user->CEP = $request->CEP;
        }
        if($request->age){
            $user->age = $request->age;
        }
        if($request->email){
            $user->email = $request->email;
        }
        if($request->username){
            $user->username = $request->username;
        }
        if($request->password){
            $user->password = $request->password;
        }

        $user->save();

        return response()->json(['Dados Atualizados']);
    }

    public function deleteUser($id){
        User::destroy($id);
        return response()->json(['User deletado']);
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\User;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {   
        if($this->isMethod('post')){
            return [
                'name'=>'required|string',
                'CEP'=>'string|formato_cep',
                'birthday'=>'data',
                'email' => 'required|email',
                'username' => 'required|alpha',
                'password' => 'required|alpha-num'
            ];
        }
        //Formato da data DD/MM/YYYY
        if($this->isMethod('put')){
            return [
                'name'=>'string',
                'CEP'=>'string|formato_cep',
                'birthday'=>'data',
                'email' => 'email',
                'username' => 'alpha',
            ];
        }
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors(),422));
    }
}

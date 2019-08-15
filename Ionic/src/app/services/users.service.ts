import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl: string = "http://localhost:8000/api/";

  httpHeaders: any = {
  	headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	}
  }

  //armazenamento temporario para troca de paginas
  user={
    name:'',
    email:'',
    username:'',
    password:'',
  }

  constructor( public http: HttpClient) { }

  setUser(form){
    this.user=form;
  }
  getUser(){
    let response =this.user;
    this.user={
      name:'',
      email:'',
      username:'',
      password:'',
    }
    return response;
  }
  

  createUser( form ): Observable<any> {
  	return this.http.post( this.apiUrl + 'createUser', form, this.httpHeaders );
  }

  loginUser( form ): Observable<any> {
  	return this.http.post( this.apiUrl + 'login', form, this.httpHeaders );
  }

  public showUser(id):Observable<any> {
    return this.http.get(
        this.apiUrl + 'showUser/' + id,  this.httpHeaders);
}


  public updateUser(id,form):Observable<any> {
    return this.http.put(
      this.apiUrl + 'updateUser/' + id, {
        name: form.name,
        email: form.email,
        username: form.username,
        photos: form.photos,
        birthday: form.birthday,
        CEP: form.CEP,
        password: form.password
      }, this.httpHeaders);
  }

  public deleteUser(id):Observable<any> {
    return this.http.delete(
      this.apiUrl + 'deleteUser/' + id,  this.httpHeaders);

  }

  deslogarUsuario(): Observable<any> {

    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken') //n]ao sei se back está pronta para receber isso 
    return this.http.get( this.apiUrl + 'logout', this.httpHeaders );
    
  }

  getDetails(): Observable<any> {

    this.httpHeaders.headers["Authorization"] = "Bearer " + localStorage.getItem('userToken') //mesmo motivo
    return this.http.get( this.apiUrl + 'get-details', this.httpHeaders );
    
  }

}

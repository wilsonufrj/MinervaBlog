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

  constructor( public http: HttpClient) { }

  registrarUsuario( form ): Observable<any> {
  	return this.http.post( this.apiUrl + 'createUser', form, this.httpHeaders );
  }

  logarUsuario( form ): Observable<any> {
  	return this.http.post( this.apiUrl + 'login', form, this.httpHeaders );
  }


  public atualizarUsuario(form,id):Observable<any> {
    return this.http.put(
      this.apiUrl + 'updateUser/' + id, {
        name: form.name,
        email: form.email,
        username: form.username,
        photos: form.photos,
        birthday: form.birthday,
        CEP: form.CEP
      }, this.httpHeaders);
  }

}

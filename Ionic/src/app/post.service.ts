import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  backendURL:string = "localhost:8000/api/";
  constructor(private http: HttpClient) {}

  httpHeaders: any = {
  	headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	}
}

  public getPosts():Observable<any>{
    return this.http.get(
      this.backendURL+'listPost',this.httpHeaders);
  }
  public getPost(id):Observable<any>{
    return this.http.get(
      this.backendURL+'post'+id);
  }
}

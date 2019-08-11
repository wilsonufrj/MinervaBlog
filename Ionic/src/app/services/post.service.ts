import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http'


@Injectable({
  providedIn: 'root'
})
export class PostService {
  backendURL:string = "http://localhost:8000/api/";

  httpHeaders: any = {
  	headers: {
  		'Content-Type': 'application/json',
  		'Accept': 'application/json'
  	}
}

constructor(private http: HttpClient) { }


  public getPosts():Observable<any>{
    return this.http.get( this.backendURL+'listPost',this.httpHeaders);
  }
  public getPost(id):Observable<any>{
    return this.http.get( this.backendURL+'showPost/'+id,this.httpHeaders);
  }
  public createPost(post):Observable<any>{
    return this.http.post(this.backendURL+'createPost',post,this.httpHeaders);
  }
}

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
    // let response={
    //   title:post.title,
    //   text:post.text,
    //   photo:post.image,
    // }
    return this.http.get( this.backendURL+'listPost',this.httpHeaders);
  }
  public getPost(id):Observable<any>{
    let response = this.http.get( this.backendURL+'showPost/'+id,this.httpHeaders);
    return response;
  }
  public createPost(post):Observable<any>{
    let request = {
      title:post.title,
      content:post.content,
      photos:post.photos,
      user_id:post.user_id,
    }
    return this.http.post(this.backendURL+'createPost',request,this.httpHeaders);
  }
  public updatePost(post,id):Observable<any>{
    let request = {
      title:post.title,
      content:post.content,
      photos:post.photos,
    }
    console.log('idserv:'+id);
    return this.http.put(this.backendURL+'updatePost/'+id,request,this.httpHeaders);
  }
  public deletePost(id):Observable<any>{
    return this.http.delete(this.backendURL+'deletePost/'+id,this.httpHeaders);
  }
}

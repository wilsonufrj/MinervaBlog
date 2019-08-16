import { Component } from '@angular/core';
import { PostService } from "../services/post.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss'],
})
export class FeedPage {
  posts;
  //bloco apenas para testar sem o back
  // posts=[{
  //   id:1,
  //   title:'Hellowwww',
  //   text:'texteofjpqwje qwpeo jqwp eojwq pe pojpojewqe jpqoejwqpojepqwoej wpqoejqwpoejqpwoje pojqwpeojqwe',
  //   image:"../../assets/img.jpeg",
  //   date:"28 de Agosto de 1999",
  // }];
  cardTextLength=200; //set the max length of the preview text on the card
  constructor(public postService: PostService, private router: Router) {}

  getPosts(): void{
    this.postService.getPosts().subscribe(
      (res) => {
        console.log(res);
        this.posts = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  photoStandard(photo){
    if(photo == null){
      return "../../assets/img_post.png";
    }else{
      return `data:image/jpeg;base64,${photo}`;
    }
  }
  goToPost(id){
    console.log(`going to id:${id}`);
    this.router.navigate([`post/${id}`]);
  }
  newPost(){
    this.router.navigate([`create-post`]);
  }
  ngOnInit(){
    this.getPosts();
  }
}

import { Component } from '@angular/core';
import { PostService } from "../post.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss'],
})
export class FeedPage {

  posts=[{
    id:1,
    title:'Hellowwww',
    text:'texteofjpqwje qwpeo jqwp eojwq pe pojpojewqe jpqoejwqpojepqwoej wpqoejqwpoejqpwoje pojqwpeojqwe',
    image:"../../assets/img.jpeg",
    date:"28 de Agosto de 1999",
  }];
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
  goToPost(id){
    console.log(`going to id:${id}`);
    this.router.navigate([`post/${id}`])
  }
  ngOnInit(){
    // this.getPosts();
  }

}

import { Component } from '@angular/core';
import { PostService } from "../post.service";


@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss'],
})
export class FeedPage {

  posts;
  cardTextLength=200; //set the max length of the preview text on the card
  constructor(public postService: PostService) {}

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
  ngOnInit(){
    this.getPosts();
  }

}

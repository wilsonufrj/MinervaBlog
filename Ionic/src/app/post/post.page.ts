import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public postService: PostService, private route: ActivatedRoute) { }
  post={
    title:"Um Titulo bem bonito",
    image:"../../assets/img.jpeg",
    date:"28 de Agosto de 1999",
    text:"Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem num gosta di mim que vai caçá sua turmis! Detraxit consequat et quo num tendi nada. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis"
  }
  
  getPost(id): void{
    this.postService.getPost(id).subscribe(
      (res) => {
        console.log(res);
        this.post = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {

    this.route.params.subscribe(
      params =>{
        console.log(params['id']);
        // this.getPost(params['id']);
      }
    );
  }

}

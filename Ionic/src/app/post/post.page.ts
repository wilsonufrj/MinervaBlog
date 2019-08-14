import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public postService: PostService, private route: ActivatedRoute,private router: Router) { }
  // post={
  //   title:"Um Titulo bem bonito",
  //   image:"../../assets/img.jpeg",
  //   date:"28 de Agosto de 1999",
  //   text:"Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem num gosta di mim que vai caçá sua turmis! Detraxit consequat et quo num tendi nada. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis"
  // }
  post={id:'',title:'',text:'',image:'',date:''};
  dateFormatHelper;

  getPost(id): void{
    this.postService.getPost(id).subscribe(
      (res) => {
        console.log(res);
        this.post.id = res.data.id;
        this.post.title = res.data.title;
        this.post.text = res.data.text;
        this.post.image = res.data.image;
        this.dateFormatHelper =new Date(res.data.updated_at);
        this.post.date = `${this.dateFormatHelper.getDate()}/${this.dateFormatHelper.getMonth()}/${this.dateFormatHelper.getFullYear()}`;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  back(){
    this.router.navigate([`feed`]);
  }
  ngOnInit() {

    this.route.params.subscribe(
      params =>{
        console.log(params['id']);
        this.getPost(params['id']);
      }
    );
  }

}

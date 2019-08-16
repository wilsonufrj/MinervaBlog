import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import { UsersService } from '../services/users.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor(public postService: PostService,public usersService: UsersService, private route: ActivatedRoute,private router: Router) { }
  // post={
  //   title:"Um Titulo bem bonito",
  //   image:"../../assets/img.jpeg",
  //   date:"28 de Agosto de 1999",
  //   text:"Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem num gosta di mim que vai caçá sua turmis! Detraxit consequat et quo num tendi nada. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis"
  // }
  post={id:'',title:'',content:'',photos:'',date:''};
  dateFormatHelper;
  userId;
  creatorId
  isBlogger;

  getPost(id): void{
    this.postService.getPost(id).subscribe(
      (res) => {
        console.log(res);
        this.post.id = res.id;
        this.creatorId = res.user_id;
        this.post.title = res.title;
        this.post.content = res.content;
        this.post.photos = res.photos;
        this.dateFormatHelper =new Date(res.updated_at);
        this.post.date = `${this.dateFormatHelper.getDate()}/${this.dateFormatHelper.getMonth()+1}/${this.dateFormatHelper.getFullYear()}`;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUserId(){
    this.usersService.getDetails().subscribe(
      (res)=>{
        console.log(res);
        this.userId=res.success.id;
        this.isBlogger = res.success.is_blogger;
    },
    (error) => {
      console.log(error);
    });
  }

  canEdit(){
    if (this.creatorId==this.userId && this.isBlogger) {
      return true;
    } else {
      return false;
    }
  }

  photoStandard(photo){
    if(photo == null){
      return "../../assets/img_post.png";
    }else{
      return `data:image/jpeg;base64,${photo}`;
    }
  }

  back(){
    this.router.navigate([`feed`]);
  }
  editPost(){
    if (this.canEdit()) {
      console.log('indo para edição');
      this.router.navigate([`edit-post/${this.post.id}`]);  
    }
  }
  // debuga(){
  //   console.log(this.canEdit());
  //   console.log(this.userId  );
  //   console.log( this.creatorId);
  //   console.log( this.isBlogger);
  // }
  ngOnInit() {

    this.route.params.subscribe(
      params =>{
        console.log(params['id']);
        this.getPost(params['id']);
      }
    );
    this.getUserId();
  }

}

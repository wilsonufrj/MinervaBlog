import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { PostService } from '../services/post.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})

export class EditPostPage implements OnInit {
  newPostForm:FormGroup;
  image;
  post={id:'',title:'',text:'',image:'',date:''};

  constructor(public formbuilder:FormBuilder, private router: Router,private camera: Camera,public postService: PostService,private route: ActivatedRoute,public alertController: AlertController) {
    this.newPostForm= this.formbuilder.group({
      id: null,//atualizar para id do user
      image: [null, this.image],     
      title:[null, [Validators.required, Validators.minLength(10)]],
      text:[null, [Validators.required, Validators.minLength(10)]],
    });
  }
  
  OpenGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        this.image =  imageData;
        console.log('data:image/jpeg;base64,' + imageData);
    },
    (error) => {
      console.log(error);
    });
  }
  async confirmDelete() {
    console.log("deletando");
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Você tem certeza que quer deletar essa postagem ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: (blah) => {
            console.log('Cancelado');
          }
        }, {
          text: 'Sim',
          handler: () => {
            this.deletePost();
          }
        }
      ]
      });
  
      await alert.present();
  }
  

  deletePost(){
    this.postService.deletePost( this.post.id ).subscribe(
      ( res ) => {
        console.log( res );
        this.router.navigate([`post/${this.post.id}`]);
      }
    );
  }

  onSubmit( form ) { 
    console.log ('id:'+this.post.id);
    let id=this.post.id;
    console.log(form);
    if ( form.status == "VALID" ) {
      this.postService.updatePost( form.value,id ).subscribe(
        ( res ) => {
          console.log( res );
          this.router.navigate([`post/${id}`]);
        }
      );
    }
  }

  getPost(id): void{
    this.postService.getPost(id).subscribe(
      (res) => {
        console.log(res);
        this.post.id = res.data.id;
        this.post.title = res.data.title;
        this.post.text = res.data.text;
        this.image = res.data.image;
        // this.dateFormatHelper =new Date(res.data.updated_at);
        // this.post.date = `${this.dateFormatHelper.getDate()}/${this.dateFormatHelper.getMonth()}/${this.dateFormatHelper.getFullYear()}`;
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
        this.getPost(params['id']);
      }
    );
    console.log(this.post.id);
  }

}

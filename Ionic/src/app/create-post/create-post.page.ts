import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  newPostForm:FormGroup;
  photos;

  OpenGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        this.photos =  imageData;
        console.log('data:image/jpeg;base64,' + imageData);
    },
    (error) => {
      console.log(error);
    });
  }
  

  constructor(public formbuilder:FormBuilder, private router: Router,private camera: Camera,public postService: PostService) {
    this.newPostForm= this.formbuilder.group({
      id: null,//atualizar para id do user
      photos: [null, this.photos],     
      title:[null, [Validators.required, Validators.minLength(10)]],
      content:[null, [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit( form ) { 
    console.log(form);
    if ( form.status == "VALID" ) {
      this.postService.createPost( form.value ).subscribe(
        ( res ) => {
          console.log( res );
          this.router.navigate([`post/${res[0].id}`]);
        }
      );
    }
  }

  ngOnInit() {
  }

}

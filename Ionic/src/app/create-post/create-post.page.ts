import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  newPostForm:FormGroup;
  image;

  OpenGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        this.image = 'data:image/jpeg;base64,' + imageData;
        console.log('data:image/jpeg;base64,' + imageData);
    },
    (error) => {
      console.log(error);
    });
  }
  
  onSubmit(form){
    console.log(form);

  }

  constructor(public formbuilder:FormBuilder, private router: Router,private camera: Camera) {
    this.newPostForm= this.formbuilder.group({
      // image: [null, this.image],     
      title:[null, [Validators.required, Validators.minLength(10)]],
      text:[null, [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { UsersService } from '../services/users.service';
import { templateSourceUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile;
  myPhoto;
  profileForm: FormGroup;
  constructor(
    private camera:Camera, public formbuilder:FormBuilder, private router: Router, public usersService: UsersService, private route: ActivatedRoute 
  ) 
  {
    this.profileForm= this.formbuilder.group({
      id:[],
      name:[null, [Validators.required, Validators.minLength(10)]],
      email:[null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.minLength(8)]],
      password: [null,[Validators.required, Validators.minLength(8)]],
      photos:[this.myPhoto],
      birthday:[null],
      CEP: [null,[Validators.pattern("^[0-9]{5}-[\\d]{3}$")]],
      
    });
  }

  showUser(id):void{
    console.log(id);
    this.usersService.showUser(id).subscribe(
      (res)=>{
        this.profileForm.value.id=res.data.id;
        this.profileForm.value.name=res.data.name;
        this.profileForm.value.email= res.data.email;
        this.profileForm.value.username= res.data.email;
        this.profileForm.value.password= res.data.password;
        this.profileForm.value.photos= res.data.photos;
        this.profileForm.value.birthday = res.data.birthday;
        this.profileForm.value.CEP= res.data.CEP;
        console.log(this.profileForm);
    },
    (error) => {
      console.log(error);
    }
    );
  }

  onClickAtualizar(){
    this.usersService.updateUser(this.profileForm.value.id, this.profile).subscribe(
      (res)=>{console.log(res);}
      );
  }
  onClickDeletar(){
    this.usersService.deleteUser(this.profileForm.value.id).subscribe(
      (res)=>{console.log(res);}
      );
  }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
 
    this.camera.getPicture(options).then(
      (imageData) => {
        this.myPhoto = 'data:image/jpeg;base64,' + imageData;
        console.log('data:image/jpeg;base64,' + imageData);
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
        this.showUser(params['id']);
      }
    );
    // this.myPhoto='/assets/user.png';
  }

}

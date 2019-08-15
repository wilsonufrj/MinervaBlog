import { Component, OnInit } from '@angular/core';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import { UsersService } from '../services/users.service';
import { templateSourceUrl } from '@angular/compiler';


@Component({
  selector: 'app-register-optional',
  templateUrl: './register-optional.page.html',
  styleUrls: ['./register-optional.page.scss'],
})
export class RegisterOptionalPage implements OnInit {
  photos;
  registerOpForm: FormGroup;
  tempUser;

  constructor(private camera:Camera, public formbuilder:FormBuilder, public alertController:AlertController, private router: Router, public usersService: UsersService  ) {
  this.registerOpForm= this.formbuilder.group({
      name:[],
      email:[],
      username: [],
      password: [],
      photos:[this.photos],
      birthday:[null],
      CEP: [null,[Validators.pattern("^[0-9]{5}-[\\d]{3}$")]],
      });
    }

  back(){
    this.router.navigate([`register`]);
  }

  formatDate(date){
    let helperDate = new Date(Date.parse(date));
    console.log(helperDate);
    let helperDay:string;
    let helperMonth:string;
    helperMonth=`${helperDate.getMonth()+1}`;
    if (helperDate.getMonth()<9) {
      helperMonth=`0${helperDate.getMonth()+1}`;
    }
    helperDay=`${helperDate.getDate()}`;
    if (helperDate.getDate()<9){
      helperDay=`0${helperDate.getDate()}`;
    }

    return `${helperDay}/${helperMonth}/${helperDate.getFullYear()}`;
  }

  createUser( form ) {
    console.log('trying');
    if ( form.status == "VALID" ) {
      form.value.name=this.tempUser.name;
      form.value.email=this.tempUser.email;
      form.value.username=this.tempUser.username;
      form.value.password=this.tempUser.password;
      form.value.photos=this.photos;
      // console.log('formato atual'+form.value.birthday);
      // 
      // form.value.birthday=`${helperDate.getDate()}/${helperDate.getMonth()}/${helperDate.getFullYear()}`;
      form.value.birthday=this.formatDate(form.value.birthday);
      console.log('posted form:');
      console.log(form);
    
      this.usersService.createUser( form.value ).subscribe(
        ( res ) => {
          console.log( res );
          this.alertDone();
        }
      );
    }else{console.log('erro de validacao')}
  }

  async alertDone(){
    const alert= await this.alertController.create({ 
      header:'Cadastro realizado!',
      message:'Agora você pode ter todos os beneficios de um usuário ',
      buttons:[{
        text: 'OK',
        handler: () => {
          console.log('Confirm Okay');
          this.router.navigateByUrl('/feed');
        }
      }] 
    });
    await alert.present();
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
        this.photos =  imageData;
        console.log('data:image/jpeg;base64,' + imageData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getUser(){
    this.tempUser=this.usersService.getUser();
    console.log("temp:")
    console.log(this.tempUser);
    
  }

  ngOnInit() {
    this.getUser();
  }

}

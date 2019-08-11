import { Component, OnInit } from '@angular/core';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-register-optional',
  templateUrl: './register-optional.page.html',
  styleUrls: ['./register-optional.page.scss'],
})
export class RegisterOptionalPage implements OnInit {
  myPhoto;
  registerOpForm: FormGroup;

  constructor(private camera:Camera, public formbuilder:FormBuilder, public alertController:AlertController, private router: Router, public usersService: UsersService  ) {
  this.registerOpForm= this.formbuilder.group({
       photos:[this.myPhoto],
       date:[null],
       CEP: [null,[Validators.required,Validators.minLength(8)]],
     });
   }

   cancel(){
    this.router.navigate([`feed`]);
   }
    submitForm(form){
     console.log(form);
     this.alerta();

   }

  registrarUsuario( form ) {

    
    if ( form.status == "VALID" ) {
        console.log(form);
     //Mandaremos a requisição para a API
      this.usersService.atualizarUsuario( form.value,id ).subscribe(
          ( res ) => {
        console.log( res );
        this.alerta();
         }
        );
  
      }
  
  }

  async alerta(){
    const alert= await this.alertController.create(
      { header:'Cadastro realizado!',
        message:'Agora você pode ter todos os beneficios de um usuário ',
        buttons:[
        {
         text: 'OK',
         handler: () => {
          console.log('Confirm Okay');
          this.router.navigateByUrl('/home');

          
        }
      
        }
      ]

     
      });
      await alert.present();
    }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
 
    this.camera.getPicture(options).then(
      (imageData) => {
        this.myPhoto= 'data:image/jpeg;base64,' + imageData;
        console.log('data:image/jpeg;base64,' + imageData);
      },
      (error) => {
        console.log(error);
      }
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
    this.myPhoto='/assets/user.png';
  }

}

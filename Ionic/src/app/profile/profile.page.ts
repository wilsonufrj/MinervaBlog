import { Component, OnInit } from '@angular/core';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { UsersService } from '../services/users.service';
import { templateSourceUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile;
  photos;
  profileForm: FormGroup;
  constructor(
    private camera:Camera, public formbuilder:FormBuilder, private router: Router, public usersService: UsersService, private route: ActivatedRoute, public alertController:AlertController
  ) 
  {
    this.profileForm= this.formbuilder.group({
      id:['1'],
      name:[, [Validators.required, Validators.minLength(10)]],
      email:[null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.minLength(8)]],
      password: [null,[Validators.required, Validators.minLength(8)]],
      photos:[this.photos],
      birthday:[null],
      CEP: [null,[Validators.pattern("^[0-9]{5}-[\\d]{3}$")]],
      
    });
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

  // onClickAtualizar(){
  //   this.usersService.updateUser(this.profileForm.value.id, this.profile).subscribe(
  //     (res)=>{
  //       console.log(res);
  //       this.alertDone();
  //     }
  //     );
  // }

  updateUser( form ) { 
    console.log ('id:'+this.profileForm.value.id);
    let id=this.profileForm.value.id;
    form.value.birthday=this.formatDate(form.value.birthday);
    console.log('userItem'+form);
    if ( form.status == "VALID" ) {
      this.usersService.updateUser( id, form.value ).subscribe(
        ( res ) => {
          console.log( res );
          this.alertDone();
          
        }
      );
    }
  }

  async alertDone(){
    const alert= await this.alertController.create({ 
      header:'Perfil alterado!',
      message:'Agradecemos por manter suas insformações atualizadas.',
      buttons:[{
        text: 'OK',
        handler: () => {
          console.log('Confirm Okay');

        }
      }] 
    });
    await alert.present();
  }
  // onClickDeletar(){
  //   this.usersService.deleteUser(this.profileForm.value.id).subscribe(
  //     (res)=>{console.log(res);}
  //     );
  // }

  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
 
    this.camera.getPicture(options).then(
      (imageData) => {
        this.photos = imageData;
        console.log('data:image/jpeg;base64,' + imageData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  

  ngOnInit() {
    
    // this.myPhoto='/assets/user.png';
  }

}

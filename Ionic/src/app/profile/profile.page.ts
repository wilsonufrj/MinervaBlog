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
  user={id:'',name:'',email:'',username:'',photos:'',birthday:'',CEP:''};
  constructor(
    private camera:Camera, public formbuilder:FormBuilder, private router: Router, public usersService: UsersService, private route: ActivatedRoute, public alertController:AlertController
  ) 
  {
    this.profileForm= this.formbuilder.group({
      id:['',this.user.id],
      name:[null, [Validators.required, Validators.minLength(10)]],
      email:[null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.minLength(8)]],
      // password: [null],
      photos:[null,this.photos],
      birthday:[null],
      CEP: [null,[Validators.pattern("^[0-9]{5}-[\\d]{3}$")]],
      
    });
  }
  // formartDateForm(){
  //   let dateString = "22-04-2017"; //whatever date string u have
  //   let dateObject = this.moment.format("DD-MM-YYYY");

  // }

  // parse(value: any): Date | null {
  //   if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
  //     const str = value.split('/');

  //     const year = Number(str[2]);
  //     const month = Number(str[1]) - 1;
  //     const date = Number(str[0]);

  //     return new Date(year, month, date);
  //   } else if((typeof value === 'string') && value === '') {
  //     return new Date();
  //   }
  //   const timestamp = typeof value === 'number' ? value : Date.parse(value);
  //   console.log(new Date(timestamp));
  //   return isNaN(timestamp) ? null : new Date(timestamp);
  // }

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
    if (helperDate.getDate()<10){
      helperDay=`0${helperDate.getDate()}`;
    }

    return `${helperDay}/${helperMonth}/${helperDate.getFullYear()}`;
  }
  getDetails():void{
  
    this.usersService.getDetails().subscribe(
      (res)=>{
        console.log(res);
        this.user.id=res.success.id;
        this.user.name=res.success.name;
        this.user.username=res.success.username;
        this.user.email=res.success.email;
        // this.profileForm.value.password= res.success.password; //não muda nessa pagina
        this.user.photos= res.success.photos;
        // this.user.birthday = res.success.birthday; 
        this.user.CEP= res.success.CEP;
        console.log('form:');
        console.log(this.profileForm);
        console.log(this.user);
    },
    (error) => {
      console.log(error);
      this.router.navigate(['login']);
    }
    );
  }

  updateUser( form ) { 
    console.log ('id:'+this.user.id);
    let id=this.user.id;
    form.value.id=this.user.id;
    if(form.value.birthday!=null){
      form.value.birthday=this.formatDate(form.value.birthday);
    }
    form.value.photos=this.photos;
    console.log('userItem');
    console.log(form);
    if ( form.status == "VALID" ) {
      this.usersService.updateUser( id, form.value ).subscribe(
        ( res ) => {
          console.log( res );
          this.alertDone();
          
        }
      );
    }
  }

  logout() {
    this.usersService.deslogarUsuario().subscribe(
      (res) => {
        // console.log( res.message );
        localStorage.removeItem( 'userToken' )
        localStorage.removeItem( 'userLogged' );
        this.router.navigate(['feed']);
      }
    );
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
    this.getDetails();
    // this.formartDateForm();
    // this.parse('13/04/2000')
    // this.myPhoto='/assets/user.png';
  }

}

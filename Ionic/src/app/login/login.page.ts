import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  //declarar  public usersService: UsersService no construtor
  constructor(public formbuilder:FormBuilder, private router: Router, public alertController:AlertController, public usersService: UsersService ) { 
    this.loginForm = this.formbuilder.group({
  		username: [null, [Validators.required]],
  		password: [null, [Validators.required, Validators.minLength(8)]],
  	});
  }
   loginUsuario( form ) {

  	if ( form.status == "VALID" ) {
      console.log(form);

  	this.usersService.loginUser( form.value ).subscribe(
  			(res) => {
				console.log( res.message );
  			localStorage.setItem( 'userToken', res.data.token );
        this.alerta();
				

  			}
   		);

   	}

   }
  submitForm(form){
    console.log(form);
    this.alerta();

  }


  async alerta(){
    const alert= await this.alertController.create(
      { header:'Login realizado!',
        message:'Agora vamos navegar',
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

    fazerConta(){
      this.router.navigateByUrl('/register');

    }
  ngOnInit() {
  }

}

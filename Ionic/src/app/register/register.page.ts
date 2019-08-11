import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { UsersService } from '../services/users.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor( public formbuilder:FormBuilder, private router: Router,  public usersService: UsersService ) { 
    this.registerForm= this.formbuilder.group({
      name:[null, [Validators.required, Validators.minLength(10)]],
      email:[null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.minLength(8)]],
      password: [null,[Validators.required, Validators.minLength(8)]],
      c_password: [null,[Validators.required, Validators.minLength(8)]],
      


    });
  }

   registrarUsuario( form ) {

    
    if ( form.status == "VALID" ) {
        console.log(form);
     //Mandaremos a requisição para a API
      this.usersService.registrarUsuario( form.value ).subscribe(
          ( res ) => {
        console.log( res );
           this.router.navigateByUrl('/register-optional');
         }
        );
  
      }
  
  }

  // submitForm(form){
  //     console.log(form);
  //    this.router.navigateByUrl('/register-optional');

  //  }

  ngOnInit() {
  }

}

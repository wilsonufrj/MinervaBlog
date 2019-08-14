import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder,Validators, ValidatorFn, AbstractControl} from '@angular/forms';
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
      password: ['',[Validators.required, Validators.minLength(8)]],
      c_password: ['',[Validators.required, Validators.minLength(8), this.equalto('password') ]],

      //TODO:adicionar validator garantindo a igualdade dos campos de password
    });
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let input = control.value;
        let isValid = control.root.value[field_name] == input;
        if (!isValid)
            return {'equalTo': {isValid}};
        else
            return null;
    };
}

  createUser( form ) {
    if ( form.status == "VALID" ) {
      //Mandaremos a requisição para a API
      // this.usersService.registrarUsuario( form.value ).subscribe(
      //     ( res ) => {
      //   console.log( res );
      //      this.router.navigateByUrl('/register-optional');
      //    }
      //   );
  
      // }

      //Enviando dados para armazenamento temporario na service
      console.log(form);
      this.usersService.setUser( form.value );
      this.router.navigateByUrl('/register-optional');
           
      }
  
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor( public formbuilder:FormBuilder, private router: Router ) { 
    this.registerForm= this.formbuilder.group({
      name:[null, [Validators.required, Validators.minLength(10)]],
      email:[null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.minLength(8)]],
      password: [null,[Validators.required, Validators.minLength(8)]],
      c_password: [null,[Validators.required, Validators.minLength(8)]],
      


    });
  }

  submitForm(form){
    console.log(form);
    this.router.navigateByUrl('/register-optional');

  }

  ngOnInit() {
  }

}

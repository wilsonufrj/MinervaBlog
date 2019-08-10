import { Component, OnInit } from '@angular/core';
import{FormGroup ,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
// import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  //declarar  public usersService: UsersService no construtor
  constructor(public formbuilder:FormBuilder, private router: Router  ) { 
    this.loginForm = this.formbuilder.group({
  		username: [null, [Validators.required]],
  		password: [null, [Validators.required, Validators.minLength(8)]],
  	});
  }
  // loginUsuario( form ) {

  // 	if ( form.status == "VALID" ) {

  // 		this.userService.logarUsuario( form.value ).subscribe(
  // 			(res) => {
	// 			console.log( res.message );
	// 			localStorage.setItem( 'userToken', res.data.token );
	// 			this.router.navigate(['reservas']);
  // 			}
  // 		);

  // 	}

  // }
  ngOnInit() {
  }

}

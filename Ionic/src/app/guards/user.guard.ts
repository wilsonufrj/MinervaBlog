import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  is_blogger='0';
  constructor(public usersService: UsersService, private router: Router, public alertController:AlertController) {}

  getDetails():void{
  
    this.usersService.getDetails().subscribe(
      (res)=>{
        this.is_blogger= res.success.is_blogger;
        console.log(this.is_blogger);
    },
    (error) => {
      console.log(error);
    }
    );
  }
  async alertDone(){
    const alert= await this.alertController.create({ 
      header:'Acesso bloqueado!',
      message:'Apenas bloggers credenciados podem criar posts',
      buttons:[{
        text: 'OK',
        handler: () => {
          console.log('Confirm Okay');
        }
      }] 
    });
    await alert.present();
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.getDetails();
    let data = localStorage.getItem('userToken');
    if ( data && this.is_blogger=='1')
      return true;
    else
    if(data && this.is_blogger=='0')
    {
      this.alertDone();
    }
      else
      {
        this.router.navigateByUrl('/login');
        return false;

      }
  }
}

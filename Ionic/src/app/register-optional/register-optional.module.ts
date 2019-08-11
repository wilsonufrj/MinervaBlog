import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import{Camera} from '@ionic-native/camera/ngx';

import { IonicModule } from '@ionic/angular';

import { RegisterOptionalPage } from './register-optional.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterOptionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [RegisterOptionalPage],
  providers:[Camera]
})
export class RegisterOptionalPageModule {}

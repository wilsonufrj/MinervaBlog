import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreatePostPage } from './create-post.page';

import { ReactiveFormsModule } from '@angular/forms';

import { Camera } from '@ionic-native/camera/ngx'

const routes: Routes = [
  {
    path: '',
    component: CreatePostPage
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
  declarations: [CreatePostPage],
  providers: [Camera],

})
export class CreatePostPageModule {}

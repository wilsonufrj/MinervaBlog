import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPostPage } from './edit-post.page';

import { ReactiveFormsModule } from '@angular/forms';

import { Camera } from '@ionic-native/camera/ngx'

const routes: Routes = [
  {
    path: '',
    component: EditPostPage
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
  declarations: [EditPostPage],
  providers: [Camera],
})
export class EditPostPageModule {}

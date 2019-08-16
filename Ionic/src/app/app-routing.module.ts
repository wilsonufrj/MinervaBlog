import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed',
    // redirectTo: 'create-post',
    pathMatch: 'full'
  },
  { path: 'feed', loadChildren: './feed/feed.module#FeedPageModule' },
  // {
  //   path: 'list',
  //   loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  // },
  { path: 'post/:id', loadChildren: './post/post.module#PostPageModule' },
  { path: 'edit-post/:id', loadChildren: './edit-post/edit-post.module#EditPostPageModule' },  
  { path: 'create-post', loadChildren: './create-post/create-post.module#CreatePostPageModule', canActivate: [UserGuard] },

  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'register-optional', loadChildren: './register-optional/register-optional.module#RegisterOptionalPageModule' },
  { path: 'edit-post', loadChildren: './edit-post/edit-post.module#EditPostPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {}

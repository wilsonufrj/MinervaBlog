import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'feed',
    redirectTo: 'create-post',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'post/:id', loadChildren: './post/post.module#PostPageModule' },
  { path: 'create-post', loadChildren: './create-post/create-post.module#CreatePostPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

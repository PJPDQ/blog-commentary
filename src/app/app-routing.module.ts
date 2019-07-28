import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostAddComponent } from './post-add/post-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog-post',
    pathMatch: 'full'
  },
  { path: 'add', component: PostAddComponent},
  { path: 'posts',  component: PostsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

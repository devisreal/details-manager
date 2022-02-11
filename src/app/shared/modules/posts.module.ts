import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { PostsComponent } from 'src/app/posts/posts.component';
import { PostsService } from '../posts.service';




@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {path: 'posts', component: PostsComponent }
    ])
  ],
  providers: [
    PostsService
  ]
})
export class PostsModule { }

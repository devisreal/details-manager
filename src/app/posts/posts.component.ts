import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Posts } from '../shared/interface/posts';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'dm-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  url = ' assets/camera.jpg';
  errorMessage: string = '';
  posts: Posts[] = [];
  sub!: Subscription;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.sub = this.postService.getAllPosts().subscribe({
      next: posts => {
        this.posts = posts;
      },
      error: err => this.errorMessage = err,
    })
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }
}

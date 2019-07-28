import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Observable } from 'rxjs';
import { blogPost, commentary } from '../posts.module';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})

export class PostsListComponent implements OnInit {
  posts$: Observable<blogPost[]>;
  commentForm;
  constructor(
    private postService: PostServiceService,
    private fb: FormBuilder,
  ) { 
    this.commentForm = this.fb.group ( {
      commentContent: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    // this.posts$ = this.postService.getPostsfromHttp();
    this.posts$ = this.postService.getPosts();
  }

  deletePost(post: blogPost): void {
    this.postService.deletePost(post);
  }

  addingComment(post: blogPost, newComment: commentary): void {
    this.postService.addingComment(post, newComment);
    this.commentForm.reset();
    // this.newComment = this.comment;
  }
}

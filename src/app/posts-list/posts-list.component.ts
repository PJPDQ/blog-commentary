import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Observable, of } from 'rxjs';
import { BlogPost, Commentary } from '../posts.module';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})

export class PostsListComponent implements OnInit {
  posts$: Observable<BlogPost[]>;
  editPost;
  commentForm;
  constructor(
    private postService: PostServiceService,
    private fb: FormBuilder,
  ) { this.commentForm = this.fb.group ( {
      commentContent: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

  deletePost(post: BlogPost): void {
    this.postService.deletePost(post);
  }

  addingComment(post: BlogPost, newComment: Commentary): void {
    this.postService.addingComment(post, newComment);
    this.commentForm.reset();
  }
}

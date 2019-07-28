import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { posts, blogPost } from '../posts.module';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  posts$: Observable<blogPost[]>;
  editForm;
  constructor(
    private router: Router,
    private postService: PostServiceService,
    private formBuilder: FormBuilder
  ) { 
    this.editForm = this.formBuilder.group ( {
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }  

  editingPost(post: blogPost, newPost: blogPost): blogPost {
    return this.postService.editingPost(post, newPost);
    this.editForm.reset();
      // .subscribe(res => {
      //   this.postForm.reset();
      //   this.router.navigate(['/'])
      // });
  }      
}

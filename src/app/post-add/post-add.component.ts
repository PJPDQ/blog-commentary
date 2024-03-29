import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { BlogPost } from '../posts.module';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  postForm;
  posts: BlogPost[] = [];
  constructor(
    private router: Router,
    private postService: PostServiceService,
    private formBuilder: FormBuilder
  ) { this.postForm = this.formBuilder.group ( {
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  addingPost(newPost: BlogPost): void {
    this.postService.addingPost(newPost);
    this.postForm.reset();
  }
}

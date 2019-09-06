import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../posts.module';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  posts$: Observable<BlogPost[]>;
  constructor(
    private route: ActivatedRoute,
    private postService: PostServiceService
  ) { }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

}

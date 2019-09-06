import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { posts, BlogPost, comments, Commentary } from './posts.module';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  comment: Commentary;
  resetComment: Commentary;
  constructor(private http: HttpClient) { }

  getPosts() {
    return of(posts);
  }

  post(id: number) {
    return of(posts.find(post => +post.id === +id));
  }

  addingPost(newPost: BlogPost): void {
    newPost.id = posts.length + 1;
    newPost.comment = [];
    posts.push(newPost);
  }

  addingComment(post: BlogPost, newComment: Commentary): void {
    post.comment.push(newComment);
    console.log(post);
  }

  editingPost(post: BlogPost, newPost: BlogPost): BlogPost {
    post = newPost;
    return post;
  }

  deletePost(post: BlogPost): void {
    posts.splice(posts.indexOf(post), 1);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { posts, blogPost, comments, commentary } from './posts.module';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  comment: commentary;
  resetComment: commentary;
  constructor(private http: HttpClient) { }

  getPosts() {
    return of(posts);
  }

  post(id: number) {
    return of(posts.find(post => +post.id === +id));
  }

  addingPost(newPost: blogPost): void {
    newPost.id = posts.length + 1;
    newPost.comment = [];
    posts.push(newPost);
  }

  addingComment(post: blogPost, newComment: commentary): void {
    post.comment.push(newComment);
    console.log(post);
  }

  editingPost(post: blogPost, newPost: blogPost): blogPost {
    post = newPost;
    return post;
  }

  deletePost(post: blogPost): void {
    var delPost = posts.indexOf(post);
    posts.splice(delPost, 1);
  }
}

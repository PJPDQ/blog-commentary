import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { posts, blogPost, comments, commentary } from './posts.module';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private postUrl = '/posts.module';
  comment: commentary;
  resetComment: commentary;
  constructor(private http: HttpClient) { }

  // getPostsfromHttp() {
  //   return this.http.get<blogPost[]>(this.postUrl);
  // }

  // addingPostfromHttp(post: blogPost) {
  //   return this.http.post(this.postUrl, post);
  // }

  swapPosts() {
    posts.sort();
  }
  getPosts() {
    posts.sort();
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

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}

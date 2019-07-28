import { PipeTransform, Pipe } from '@angular/core';
import { posts, blogPost } from './posts.module';
import { PostServiceService } from './post-service.service';

@Pipe({
    name: 'sortArrayPipe'
})
export class sortArrayPipe implements PipeTransform {

    // constructor(
    //     private postService: PostServiceService
    // ) {

    // }
    transform(posts: blogPost[]): blogPost[] {
        // if (!posts || posts === undefined || posts.length === 0) return null;

        posts.sort((postA: blogPost, postB: blogPost) =>
        {
            if (postA.id < postB.id) return -1;
            else if (postA.id > postB.id) return 1;
            else return 0;
        });
        return posts;
    }
}
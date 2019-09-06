import { PipeTransform, Pipe } from '@angular/core';
import { posts, BlogPost } from './posts.module';
import { PostServiceService } from './post-service.service';

@Pipe({
    name: 'sortArrayPipe'
})
export class SortArrayPipe implements PipeTransform {
    transform(posts: BlogPost[]): BlogPost[] {

        posts.sort((postA: BlogPost, postB: BlogPost) => {
            if (postA.id < postB.id) {
                return -1;
            } else if (postA.id > postB.id) {
                return 1;
            } else {
                return 0;
            }
        });
        return posts;
    }
}
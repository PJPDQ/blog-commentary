export interface blogPost {
    id: number;
    title: string;
    description: string;
    comment: commentary[];
}

export interface commentary {
    commentContent: string;
}
export const posts: blogPost[] = [];
export const comments: commentary[] = [];


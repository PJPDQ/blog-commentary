export interface BlogPost {
    id: number;
    title: string;
    description: string;
    comment: Commentary[];
}

export interface Commentary {
    commentContent: string;
}
export const posts: BlogPost[] = [];
export const comments: Commentary[] = [];


// defind type of post for typesctipt wordpress rest api

export interface Post {
    id: number;
    date: string;
    title:{
        rendered : string;
    };
    slug: string;
    excerpt: {
        rendered: string;
    };
    link: string;
    author: string;
    _embedded: any;
    content:{
        rendered: string;
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get<Post[]>('http://localhost:3000/posts')
    }

    savePost(post: Post) {
        return this.http.post<Post>('http://localhost:3000/posts', post)
    }
}

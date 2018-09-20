import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private http:HttpClient) { }

  public getPosts(){
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  public getPostWithId(id:number){
    return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts?id="+id);
  }

}

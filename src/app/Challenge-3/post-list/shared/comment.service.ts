import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentService {

  constructor(private http:HttpClient) { }

  public getComments(){
    return this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments");
  }

  public getCommentsWithPostId(id:number){
    return this.http.get<Comment[]>("https://jsonplaceholder.typicode.com/comments?postId="+id);
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from './shared/post.model';
import { PostService } from './shared/post.service';
import { CommentService } from './shared/comment.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  comments:Comment[];

  constructor(private postService: PostService,
    private commentService: CommentService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      res => {
        this.posts = res;
        console.log("Web servisten veriler alındı.");
      },
      error => {
        console.error("Web servisten veri alınamadı.");
        console.error(error);
      }
    );

    this.commentService.getComments().subscribe(
      res => {
        this.comments = res;
        console.log("Web servisten veriler alındı.");
      },
      error => {
        console.error("Web servisten veri alınamadı.");
        console.error(error);
      }
    )

  }

}

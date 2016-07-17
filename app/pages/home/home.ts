import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { CommentsProvider } from '../../providers/comments-provider/comments-provider';
import { PostsProvider } from '../../providers/posts-provider/posts-provider'
import { Comment} from '../../typings/comment';
import { Post } from '../../typings/post';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [CommentsProvider, PostsProvider]
})
export class HomePage {

  comments: Comment[];
  posts: Post[];
  showComments: boolean = true;
  showPosts: boolean;

  constructor(private navController: NavController, private commentsProvider: CommentsProvider, private postsProvider: PostsProvider) {
  
  }

  getComments(){
    this.showComments = true;
    this.showPosts = false;

    this.commentsProvider.get().then((response: Comment[])=>{
      this.comments = response;
    })
  }

  getPosts(){
    this.showPosts = true;
    this.showComments = false;

    this.postsProvider.get().then((response: Post[])=>{
      this.posts = response;
    });
  }
}

import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { PostsProvider } from '../../providers/posts-provider/posts-provider'
import { Post } from '../../typings/post';

@Component({
  templateUrl: 'build/pages/about/about.html',
  providers: [PostsProvider]
})
export class AboutPage {
  
  posts: Post[];
  
  constructor(private navController: NavController, private postsProvider: PostsProvider) {
  }

  getPosts(){
    this.postsProvider.get().then((response: Post[])=>{
      this.posts = response;
    });
  }
}

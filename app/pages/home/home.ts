import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { CommentsProvider } from '../../providers/comments-provider/comments-provider';
import { Comment} from '../../typings/comment';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [CommentsProvider]
})
export class HomePage {

  comments: Comment[];

  constructor(private navController: NavController, private commentsProvider: CommentsProvider) {
  
  }

  getComments(){
    this.commentsProvider.get().then((response: Comment[])=>{
      this.comments = response;
    })
  }

  
}

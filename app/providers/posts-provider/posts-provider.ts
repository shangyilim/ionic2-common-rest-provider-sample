import { Injectable } from '@angular/core';
import { Http, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { CommonRestProvider } from '../common-rest-provider/common-rest-provider'
import {NavController} from 'ionic-angular';

/*
  Generated class for the UserPostsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostsProvider extends CommonRestProvider{


  constructor(protected http: Http, protected nav: NavController) {
    super(http, nav);
  }

  get(){
    return this.getHttpGetRequest('http://jsonplaceholder.typicode.com/posts');
  }


}


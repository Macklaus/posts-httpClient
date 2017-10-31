import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPost } from './ipost.interface';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private httpClient : HttpClient) { }

  getPosts() : Observable<{}>{
    //return this.httpClient.get(this.url).pluck('title');
    return this.httpClient.get(this.url).map((Post : IPost) => {
      return Post.title;
    });
  }

}

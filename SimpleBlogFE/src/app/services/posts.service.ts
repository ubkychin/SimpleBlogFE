import { HttpClient } from '@angular/common/http';
import { Injectable, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Config } from '../models/Config';
import { NewPost, Post } from '../models/post';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  config?: Config;
  posts?: Observable<Post[]>;

  constructor(private configService: ConfigService, private _http: HttpClient) {
    this.getConfig();
  }

  async getConfig() {
    let data = await this.configService.getConfig().toPromise();


    // .subscribe((data: Config) =>
      //   this.config = {
      //     url: (data as any).url
      //   }
      // )

    this.config = data;
  }

  async getAllPostsAsync() {
    await this.getConfig();

    if (this.config)
      this.posts = this._http.get<Post[]>(this.config.url);

    return this.posts;
  }

  async addNewPostAsync(newPost: NewPost) {
    await this.getConfig();

    if (this.config) {
      console.log('posting', this.config.url);
      let resp = this._http.post(this.config.url, newPost).toPromise();
      return resp;
    }

    return;

  }

  addNewPost(newPost: NewPost): Observable<any> {
    let resp = this.addNewPostAsync(newPost);
    return from(resp);
    //return this._http.post<Post>('https://localhost:5001/api/Posts', newPost);
  }

  getAllPosts(): Observable<Post[]> {
    this.getAllPostsAsync();
    //console.log(this.config);

    if(this.posts) {
      return this.posts;
    } else {
      return new Observable<Post[]>();
    }
  }
}

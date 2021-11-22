import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../models/Config';
import { Post } from '../models/post';
import { ConfigService } from '../services/config.service';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  post: Post = new Post("Test", "Test Post", "content", "2021-11-22T00:58:15.772Z");
  @Input() postsList?: Post[];
  config?: Config;

  constructor(private _configService: ConfigService, private _postsService: PostsService) { }

  ngOnInit(): void {
    //this.getPosts();

  }

  async getPosts() {
    console.log("Getting Posts");
    let data = await this._postsService.getAllPostsAsync();

    console.log(data);
    if (data) {
      data.subscribe(
        unpackedPosts => {
        this.postsList = unpackedPosts;
        console.log(unpackedPosts);
      })
    }
  }


}

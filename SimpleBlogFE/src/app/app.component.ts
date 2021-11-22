import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  postsList?: Post[];
  title = 'Blog-FE';

  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
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

  addPost(newPost: Post) {
    this.postsList?.unshift(newPost);
  }
}

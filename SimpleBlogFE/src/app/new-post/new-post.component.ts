import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NewPost, Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @ViewChild('input_title') title?: ElementRef;
  @ViewChild('input_content') content?: ElementRef;
  @Output() newPostEvent = new EventEmitter<Post>();

  constructor(private _postService: PostsService) { }

  ngOnInit(): void {
  }

  clickHandler() {
    let title: string;
    let content: string;
    let newPost: NewPost;

    this.title ? title = this.title.nativeElement.value : title = '';

    this.content ? content = this.content.nativeElement.value: content = '';

    console.log('click', content, title);

    if (title != '' && content != '') {
      console.log('adding post')
      let post: Post;
      newPost = new NewPost(title, content);
      this._postService.addNewPost(newPost).subscribe(
        resp => {
          console.log('post response', resp);
          post = resp;
          this.newPostEvent.emit(resp);
        }
      );
    }
  }
}

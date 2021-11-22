import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

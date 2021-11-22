export class Post {
  id: string;
  title: string;
  content: string;
  time: Date;

  constructor(id: string, title: string, content: string, time:string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.time = new Date(time);
  }
}

export class NewPost{
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

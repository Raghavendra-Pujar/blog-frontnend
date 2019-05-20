import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  public currentBlog;
  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "admin",
      "bodyHtml": "Blog1 here",
      "description": "this is the description of blog1",
      "title": "Blog1 title"

    },
    {
      "blogId": "2",
      "lastModified": "2016-10-20T12:20:47.854Z",
      "created": "2016-10-20T12:20:47.854Z",
      "tags": [],
      "author": "admin",
      "bodyHtml": "Blog2 here",
      "description": "this is the description of blog2",
      "title": "Blog2 title"

    }
  ]

  constructor() {
    console.log("service constructor is called");
   }

//
  public getAllBlogs(){
    return this.allBlogs;
  }


  public getCurrentBlog(currentBlogId){
    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId)
      this.currentBlog = blog;
      return this.currentBlog;
    }
    console.log(this.currentBlog.blogId);
  }

  

  
}

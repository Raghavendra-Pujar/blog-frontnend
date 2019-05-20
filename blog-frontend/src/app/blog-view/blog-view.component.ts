import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  constructor(private _route: ActivatedRoute,private router: Router,public blogService: BlogService, public blogHttpService: BlogHttpService) { 
    console.log("Constructor is called");
  }

  ngOnInit() {
    console.log("ngOnit is called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.currentBlog = this.blogHttpService.getCurrentBlog(myBlogId).subscribe(
      data=>{
        this.currentBlog = data["data"];
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }

  public deleteThisBlog(blogId): any{
    this.blogHttpService.deleteBlog(blogId);
    setTimeout(() => {
      this.router.navigate(['home'])
    }, 1000);
  
      
    }

  
   

}

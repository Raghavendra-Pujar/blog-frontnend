import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService: BlogHttpService, private toastr: ToastrService, private _route: ActivatedRoute, private router: Router ) {
    //this.toastr.setRootViewContainerRef(vcr);
  }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ['Comedy', 'Horror', 'Thriller', 'Fictional'];

  ngOnInit() {
  }

  

  public createBlog(): any {
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }

    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("Blog created successfully");
        console.log(data);
        this.toastr.success('Blog Creation Successfull','Sucess!!');
        setTimeout(() => {
          this.router.navigate(['blog',data["data"].blogId])
        }, 1000);
      },
        error => {
          console.log("Some error occured");
          console.log(error.errorMessage);
          alert("Some error occured");
        }
    )
  }

}

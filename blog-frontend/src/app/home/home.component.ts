import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import {BlogHttpService} from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBlogs;
  constructor(public blogService:BlogService,public blogHttpService: BlogHttpService) { 
    
  }

  ngOnInit() {
     this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
       data=> {
          this.allBlogs = data["data"];
       },

       error =>{
         console.log(error.errorMessage);
       }
     );
  
     console.log("Home Oninit Called");

  }

}

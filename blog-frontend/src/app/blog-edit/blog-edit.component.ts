import { Component, OnInit } from '@angular/core';
import { BlogHttpService} from '../blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(private bloghttpService: BlogHttpService) { }

  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ['Comedy', 'Horror', 'Thriller', 'Fictional'];


  ngOnInit() {
  }

  public editBlog(): any{
    let blogData ={
      
    }
  }

}

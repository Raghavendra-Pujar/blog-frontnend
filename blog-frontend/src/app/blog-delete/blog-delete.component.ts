import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router, private httpService: BlogHttpService) { }

  ngOnInit() {
  }

  

    
  }



import { Injectable } from '@angular/core';

//importing http client
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

//import Observable related libraries
import { Observable } from "rxjs";
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  public allBlogs;
  public currentBlogs;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs/';
  public authToken = 'YzBmMzIxMGZhYzc5MDA4NjU1ZWIwNjk0ODdmZWE4YzAwNmJlZjMwMDI3YjRmNzQ1YmE5NWZkMjI3NzM2ODk5YmI0OTcxYzJhMDg1ZGUxMGZkOGU1NThjYjU1OTZlNGE1MzAxYTZmNDU5YmVlMDQ2NmY5ZmM5MTgwYTFmNDU1ZTc5ZQ==';
  constructor(private _http:HttpClient) { 
    console.log("Http Service is called");
  }

  public getAllBlogs(): any{
    let myResponse = this._http.get(this.baseUrl+'all?authToken='+ this.authToken);
    console.log(myResponse);
    return myResponse;
    
  }

  public getCurrentBlog(currentBlogId){
    let myResponse = this._http.get(this.baseUrl + "view/"+ currentBlogId + "?authToken=" + this.authToken);
    return myResponse;
    
    
  }

  public deleteBlog(currentBlogId){
    let data ={}
    let myResponse = this._http.post(this.baseUrl + currentBlogId + '/delete'+ "?authToken="+ this.authToken,data);
    return myResponse;

  }

  public editBlog(currentBlogId){

  }

  public createBlog(blogData){
    let myResponse = this._http.post(this.baseUrl + 'create' + '?authToken=' + this.authToken,blogData);
    return myResponse;

  }
}

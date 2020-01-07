import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { User, Post, StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {
  createPostUrl = new StateService().ServerBaseUrl+"/api/post";
  GetAllPostUrl = new StateService().ServerBaseUrl+"/api/post/getall";
  posts: Post[] = [];
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem("token")
    })
  };

  ngOnInit(){
    this.GetAllPostData();
  }

  SavePost(post){
    return this.http.post<any>(this.createPostUrl, post, this.httpOptions);
  }
  GetAllPost(){
    return this.http.get<Post[]>(this.GetAllPostUrl, this.httpOptions);
  }
  GetAllPostData(){
    this.GetAllPost().subscribe(
      res=>{
        res.forEach(r=> this.posts.push(r))
        //this.posts = res;
      },
      err=>{

      }
    )
  }
}
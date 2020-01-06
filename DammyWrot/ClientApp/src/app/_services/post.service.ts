import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'
import { User, Post, StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  createPostUrl = new StateService().BaseUrl+"/api/post";
  constructor(private http: HttpClient) { }



  SavePost(post){
    console.log("Alert!! view url", this.createPostUrl)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem("token")
      })
    };
    console.log(httpOptions);
    return this.http.post<any>(this.createPostUrl, post, httpOptions);
  }
}

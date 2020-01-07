import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Post } from '../_services/state.service';

@Component({
  selector: 'app-posted-tweet-section',
  templateUrl: './posted-tweet-section.component.html',
  styleUrls: ['./posted-tweet-section.component.css']
})
export class PostedTweetSectionComponent implements OnInit {

  @Input() posts: Post[];
  constructor(private _post: PostService) { }

  ngOnInit() {
    //this.GetAllPost();
    this._post.GetAllPostData();
    this.posts = [];
    this.posts = this._post.posts;
  }
  // GetAllPost(){
  //   this._post.GetAllPost().subscribe(
  //     res=>{
  //       this.posts = res;
  //       console.log("res:: ",res, "posts", this.posts)
  //       debugger;
  //     },
  //     err=>{

  //     }
  //   )
  // }
}
import { Component, OnInit } from '@angular/core';
import { Post } from '../_services/state.service';
import { PostService } from '../_services/post.service';
@Component({
  selector: 'app-post-tweet-section',
  templateUrl: './post-tweet-section.component.html',
  styleUrls: ['./post-tweet-section.component.css']
})
export class PostTweetSectionComponent implements OnInit {
  post = {};
  constructor(private _post: PostService) { }

  ngOnInit() {

  }

  Submit(){
    this._post.SavePost(this.post).subscribe(
      res=>{
        console.log(res);
        debugger;
      },
      err=>{

      }
    )
  }

}

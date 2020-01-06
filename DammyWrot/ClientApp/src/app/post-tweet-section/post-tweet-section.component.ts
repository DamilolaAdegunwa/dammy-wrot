import { Component, OnInit } from '@angular/core';
import { Post } from '../_services/state.service';

@Component({
  selector: 'app-post-tweet-section',
  templateUrl: './post-tweet-section.component.html',
  styleUrls: ['./post-tweet-section.component.css']
})
export class PostTweetSectionComponent implements OnInit {
  post: Post;
  constructor() { }

  ngOnInit() {
    
  }

  OnSubmit(){

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(){

  }
  ngOnInit(){
    //localStorage.removeItem('token');
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { StateService, User } from '../_services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @Input() User: User;
  constructor(private stateService: StateService){

  }
  ngOnInit() {
    console.log("***from home comp***");
    console.log(this.stateService.User);
    debugger;
    this.User = this.stateService.User;
  }
}

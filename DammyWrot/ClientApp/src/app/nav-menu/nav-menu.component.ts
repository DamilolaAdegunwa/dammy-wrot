import { Component, OnInit, Input } from '@angular/core';
import { StateService, User } from '../_services/state.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  @Input() User: User;
  @Input() MyName: string = "Westley Smith M";
  constructor(private stateService: StateService) {

  }

  ngOnInit(){
    console.log("From nav bar .ts file!! :: Name ",this.stateService.User.Name);
    debugger;
    this.MyName = this.stateService.User.Name;
    console.log(this.MyName);
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

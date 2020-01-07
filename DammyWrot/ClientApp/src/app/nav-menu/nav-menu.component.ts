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
  @Input() MyName: string = "";
  constructor(private stateService: StateService) {

  }

  ngOnInit(){
    this.MyName = this.stateService.User.name;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

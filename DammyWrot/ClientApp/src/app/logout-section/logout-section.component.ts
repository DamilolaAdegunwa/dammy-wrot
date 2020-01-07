import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-section',
  templateUrl: './logout-section.component.html',
  styleUrls: ['./logout-section.component.css']
})
export class LogoutSectionComponent implements OnInit {

  constructor(private _auth: AuthService,private _router: Router) { }

  ngOnInit() {
    this._auth.logoutUser();
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
    debugger;
  }
}

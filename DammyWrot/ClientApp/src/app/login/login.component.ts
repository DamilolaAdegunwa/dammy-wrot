import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
import { StateService } from '../_services/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router,
              private stateService: StateService) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.stateService.User = res;
        console.log("from the login", this.stateService.User);
        debugger;
        this._router.navigate(['/home'])
      },
      err => console.log(err)
    ) 
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { StateService } from '../_services/state.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData = {}
  constructor(private _auth: AuthService,
              private _router: Router,
              private stateService: StateService) { }

  ngOnInit() {
  }
  registerUser(){
    console.log(this.registerUserData);
    debugger;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.stateService.User = res;
        this._router.navigate(['/home'])
      },
      err => console.log(err)
    ) 
  }
}

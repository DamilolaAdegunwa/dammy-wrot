import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component'
// import { RegisterComponent } from './register/register.component'
// import { EventsComponent } from './events/events.component';
// import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  ,
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
//   {
//     path: 'special',
//     canActivate: [AuthGuard],
//     component: SpecialEventsComponent
//   },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'register',
//     component: RegisterComponent
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

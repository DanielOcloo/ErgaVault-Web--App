import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './main-pages/login-page/login-page.component';
import { SignupPageComponent } from './main-pages/signup-page/signup-page.component';
import { ForgotPasswordComponent } from './main-pages/forgot-password/forgot-password.component';
import { DashboardComponent } from './main-pages/dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:LoginPageComponent},
  {path:"signup", component:SignupPageComponent},
  {path:"login/forgotpassword", component:ForgotPasswordComponent},
  {path:"login/dashboard", component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

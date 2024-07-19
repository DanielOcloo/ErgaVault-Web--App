import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './main-pages/login-page/login-page.component';
import { SignupPageComponent } from './main-pages/signup-page/signup-page.component';
import { ForgotPasswordComponent } from './main-pages/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './main-pages/email-verification/email-verification.component';
import { EmailVerificationNewuserComponent } from './main-pages/email-verification-newuser/email-verification-newuser.component';
import { ResetPasswordComponent } from './main-pages/reset-password/reset-password.component';
import { DashboardComponent } from './main-pages/dashboard/dashboard.component';
import { WalletsPageComponent } from './main-pages/wallets-page/wallets-page.component';
import { MarketsPageComponent } from './main-pages/markets-page/markets-page.component';
import { ExplorePageComponent } from './main-pages/explore-page/explore-page.component';
import { ProfilePageComponent } from './main-pages/profile-page/profile-page.component';

const routes: Routes = [
  {path:"", component:LoginPageComponent},
  {path:"signup", component:SignupPageComponent},
  {path:"login/forgotpassword", component:ForgotPasswordComponent},
  {path:"email-verification", component:EmailVerificationComponent},
  {path:"sign-up/emailverification-newuser", component:EmailVerificationNewuserComponent},
  {path:"forgotpassword/reset-password", component:ResetPasswordComponent},
  {path:"login/dashboard", component:DashboardComponent},
  {path:"wallets-page",component:WalletsPageComponent},
  {path:"markets-page",component:MarketsPageComponent},
  {path:"explore-page",component:ExplorePageComponent},
  {path:"profile-page",component:ProfilePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

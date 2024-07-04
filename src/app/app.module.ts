import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './main-pages/login-page/login-page.component';
import { TextFieldComponent } from './reusable-components/text-field/text-field.component';
import { AuthCarouselComponent } from './reusable-components/auth-carousel/auth-carousel.component';
import { PasswordFieldComponent } from './reusable-components/password-field/password-field.component';
import { EmailTextFieldComponent } from './reusable-components/email-text-field/email-text-field.component';
import { SignupPageComponent } from './main-pages/signup-page/signup-page.component';
import { ForgotPasswordComponent } from './main-pages/forgot-password/forgot-password.component';
import { DashboardComponent } from './main-pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TextFieldComponent,
    AuthCarouselComponent,
    PasswordFieldComponent,
    EmailTextFieldComponent,
    SignupPageComponent,
    ForgotPasswordComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

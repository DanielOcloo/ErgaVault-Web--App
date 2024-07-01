import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { TextFieldComponent } from './reusable-components/text-field/text-field.component';
import { AuthCarouselComponent } from './reusable-components/auth-carousel/auth-carousel.component';
import { PasswordFieldComponent } from './reusable-components/password-field/password-field.component';
import { EmailFieldComponent } from './email-field/email-field.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TextFieldComponent,
    AuthCarouselComponent,
    PasswordFieldComponent,
    EmailFieldComponent,
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

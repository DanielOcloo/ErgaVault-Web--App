import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { TextFieldComponent } from './reusable-components/text-field/text-field.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TextFieldComponent
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

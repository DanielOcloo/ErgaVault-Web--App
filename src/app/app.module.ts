import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ChartsModule } from 'ng-charts'; 
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
import { EmailVerificationComponent } from './main-pages/email-verification/email-verification.component';
import { ResetPasswordComponent } from './main-pages/reset-password/reset-password.component';
import { EmailVerificationNewuserComponent } from './main-pages/email-verification-newuser/email-verification-newuser.component';
import { PortfolioValueCardComponent } from './card-components/portfolio-value-card/portfolio-value-card.component';
import { CoinsDistributionSummaryCardComponent } from './card-components/coins-distribution-summary-card/coins-distribution-summary-card.component';
import { AccountVerificationCardComponent } from './card-components/account-verification-card/account-verification-card.component';
import { CoinsSummaryCardComponent } from './card-components/coins-summary-card/coins-summary-card.component';
import { MarketsSummaryCardComponent } from './card-components/markets-summary-card/markets-summary-card.component';
import { PrimaryButtonComponent } from './reusable-components/primary-button/primary-button.component';
import { CoinSummaryCardItemComponent } from './reusable-components/coin-summary-card-item/coin-summary-card-item.component';
import { CoinDetailsItemComponent } from './reusable-components/coin-details-item/coin-details-item.component';

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
    EmailVerificationComponent,
    ResetPasswordComponent,
    EmailVerificationNewuserComponent,
    PortfolioValueCardComponent,
    CoinsDistributionSummaryCardComponent,
    AccountVerificationCardComponent,
    CoinsSummaryCardComponent,
    MarketsSummaryCardComponent,
    PrimaryButtonComponent,
    CoinSummaryCardItemComponent,
    CoinDetailsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

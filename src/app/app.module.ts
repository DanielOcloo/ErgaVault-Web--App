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
import { TopBarComponent } from './reusable-components/top-bar/top-bar.component';
import { SideNavComponent } from './reusable-components/side-nav/side-nav.component';
import { WalletsPageComponent } from './main-pages/wallets-page/wallets-page.component';
import { SendMenuComponent } from './menus/send-menu/send-menu.component';
import { WalletBalanceDistributionComponent } from './card-components/wallet-balance-distribution/wallet-balance-distribution.component';
import { CoinsCardComponent } from './card-components/coins-card/coins-card.component';
import { CoinsDistributionCardComponent } from './card-components/coins-distribution-card/coins-distribution-card.component';
import { GameAdComponent } from './card-components/game-ad/game-ad.component';
import { PrimaryButtonWithIconComponent } from './reusable-components/primary-button-with-icon/primary-button-with-icon.component';
import { MarketsPageComponent } from './main-pages/markets-page/markets-page.component';
import { ExplorePageComponent } from './main-pages/explore-page/explore-page.component';
import { ProfilePageComponent } from './main-pages/profile-page/profile-page.component';
import { ProfileInformationComponent } from './card-components/profile-information/profile-information.component';
import { SecondaryButtonWithIconComponent } from './reusable-components/secondary-button-with-icon/secondary-button-with-icon.component';
import { ProfileWalletCardComponent } from './card-components/profile-wallet-card/profile-wallet-card.component';
import { ButtonOutlineBlueComponent } from './reusable-components/button-outline-blue/button-outline-blue.component';
import { ButtonOutlineOrangeComponent } from './reusable-components/button-outline-orange/button-outline-orange.component';
import { AccountVerificationCard2Component } from './card-components/account-verification-card-2/account-verification-card-2.component';

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
    TopBarComponent,
    SideNavComponent,
    WalletsPageComponent,
    SendMenuComponent,
    WalletBalanceDistributionComponent,
    CoinsCardComponent,
    CoinsDistributionCardComponent,
    GameAdComponent,
    PrimaryButtonWithIconComponent,
    MarketsPageComponent,
    ExplorePageComponent,
    ProfilePageComponent,
    ProfileInformationComponent,
    SecondaryButtonWithIconComponent,
    ProfileWalletCardComponent,
    ButtonOutlineBlueComponent,
    ButtonOutlineOrangeComponent,
    AccountVerificationCard2Component,
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

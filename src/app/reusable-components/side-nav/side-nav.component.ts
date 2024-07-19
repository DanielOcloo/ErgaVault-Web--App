import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @Input() activePage: string = 'Home';
  @Input() activeIcon: string = '/assets/Home_icon_blue.svg';

  navItems = [
    { name: 'Home', icon: '/assets/Home_icon.svg', link: '/login/dashboard' },
    { name: 'Wallets', icon: '/assets/wallet_icon.svg', link: '/wallets-page' },
    { name: 'Markets', icon: '/assets/Website_icon.svg', link: '/markets-page' },
    { name: 'Explore', icon: '/assets/explore_icon.svg', link: '/explore-page' },
    { name: 'Profile', icon: '/assets/Profile_icon.svg', link: '/profile-page' },
    { name: 'Transactions', icon: '/assets/history_icon.svg', link: '/transactions' },
    { name: 'Settings', icon: '/assets/setting-icon.svg', link: '/settings' }
  ];
}

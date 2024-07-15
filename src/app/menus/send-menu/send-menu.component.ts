import { Component } from '@angular/core';

@Component({
  selector: 'app-send-menu',
  templateUrl: './send-menu.component.html',
  styleUrl: './send-menu.component.css'
})
export class SendMenuComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

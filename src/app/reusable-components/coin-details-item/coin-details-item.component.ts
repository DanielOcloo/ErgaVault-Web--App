import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coin-details-item',
  templateUrl: './coin-details-item.component.html',
  styleUrl: './coin-details-item.component.css'
})
export class CoinDetailsItemComponent {
  @Input() imageSrc: string = '/assets/bitcoin.png';
  @Input() coinAbbreviation: string = 'BTC';
  @Input() coinName: string = 'Bitcoin';
  @Input() coinPrice: number = 41628;
  @Input() indicator: number = 0;
}

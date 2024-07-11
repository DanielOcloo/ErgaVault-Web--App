import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coin-summary-card-item',
  templateUrl: './coin-summary-card-item.component.html',
  styleUrl: './coin-summary-card-item.component.css',
})
export class CoinSummaryCardItemComponent {
  @Input() imageSrc: string = '/assets/bitcoin.png';
  @Input() coinAbbreviation: string = 'BTC';
  @Input() coinName: string = 'Bitcoin';
  @Input() coinAmount: number = 0.001245;
  @Input() coinValueUSD: number = 204.43;
  @Input() coinPrice: number = 41628;
}
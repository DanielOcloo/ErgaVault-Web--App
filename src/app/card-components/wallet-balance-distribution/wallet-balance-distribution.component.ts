import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-wallet-balance-distribution',
  templateUrl: './wallet-balance-distribution.component.html',
  styleUrl: './wallet-balance-distribution.component.css'
})
export class WalletBalanceDistributionComponent {
  constructor() { }

  ngOnInit(): void {
    this.RenderChart();
  }
  
  RenderChart() {
    new Chart("linechart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Earnings',
          data: [12, 19, 3, 5, 2, 3, 21, 14, 15, 32, 12, 23],
          borderColor: '#7EA0B7',
          backgroundColor:'#D8E3E9',
          borderWidth: 2,
          fill: false,
          
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            type: 'category',
            display: true,
          },
          y: {
            beginAtZero: true,
            display: true,
          },
        },
      },
    });
  }
}

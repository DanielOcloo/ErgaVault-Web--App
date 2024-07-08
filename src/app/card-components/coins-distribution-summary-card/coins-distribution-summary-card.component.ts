import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-coins-distribution-summary-card',
  templateUrl: './coins-distribution-summary-card.component.html',
  styleUrl: './coins-distribution-summary-card.component.css'
})
export class CoinsDistributionSummaryCardComponent {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }
  
  renderChart() {
    new Chart("doughnutchart", {
      type: 'doughnut',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',],
        datasets: [{
          label: 'Earnings',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            '#0C8CE9', // Color for Jan
            '#CEE8FB', // Color for Feb
            '#55AFF0', // Color for Mar
            '#4BC0C0', // Color for Apr
            '#9966FF', // Color for May
            '#FEA37B', // Color for Jun
            '#D8E3E9'  // Color for Jul
          ],
          borderWidth: 2,
          
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

}

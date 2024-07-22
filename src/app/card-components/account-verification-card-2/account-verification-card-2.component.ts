import { Component, OnInit } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-account-verification-card-2',
  templateUrl: './account-verification-card-2.component.html',
  styleUrl: './account-verification-card-2.component.css'
})
export class AccountVerificationCard2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderChart();
  }
  
  renderChart() {
    const centerTextPlugin = {
      id: 'centerText',
      afterDraw: (chart: any) => {
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;
        
        ctx.restore();
        const fontSize = 12; // Set a fixed font size to 14px
        ctx.font = `600 ${fontSize}px sans-serif`;
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillStyle = "#4D4D4D";
        
        const text = "70%";
        const textX = width / 2;
        const textY = height / 2;
  
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    };
  
    new Chart("doughnutchart", {
      type: 'doughnut',
      data: {
        datasets: [{
          label: 'Earnings',
          data: [70, 30],
          backgroundColor: [
            '#0C8CE9', // Color for completed
            '#FEA37B', // Color for remaining
          ],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '50%',
        plugins: {
          legend: {
            display: false
          }
        }
      },
      plugins: [centerTextPlugin]
    } as ChartConfiguration);
  }
  
}
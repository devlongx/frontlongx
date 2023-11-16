import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ChartComponent,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexMarkers,
  ApexPlotOptions,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
};

export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-clip-wallet',
  templateUrl: './clip-wallet.component.html',
  styleUrls: ['./clip-wallet.component.scss'],
})
export class ClipWalletComponent {
  IsSearch = false;
  portfolioList = [
    {
      name: 'Tether',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/usdt.svg',
      url: '/billetera/usdt',
    },
    {
      name: 'Tronix',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/tronix.svg',
      url: '',
    },
    {
      name: 'Bitcoin',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/bitcoin.svg',
      url: '',
    },
    {
      name: 'Injective',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/Injective.svg',
      url: '',
    },
    {
      name: 'Ethereum',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/ethereum.svg',
      url: '',
    },
  ];
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions2>;

  constructor(private router: Router) {
    this.chartOptions = {
      series: [60, 40],
      chart: {
        type: 'donut',
        width: '250px',
        height: '250px',
      },
      legend: {
        show: false,
      },
      stroke: {
        colors: ['transparent', 'transparent'],
      },
      tooltip: {
        enabled: false,
      },
      labels: ['Vender', 'Comprar'],
      fill: {
        colors: ['rgba(45, 45, 60, 1)', '#C20505'],
      },
    };
    this.chartOptions2 = {
      series: [
        {
          name: '$',
          data: [650, 680, 690, 750, 400, 500, 300, 200, 500],
        },
      ],
      fill: {
        type: 'gradient',
        colors: ['green'],
        gradient: {
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 0,
        },
      },
      chart: {
        height: 600,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: 'circle',
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
      },
      stroke: {},
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'April',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }
  retirar() {
    this.router.navigate(['/billetera/retirar']);
  }
  deposit() {
    this.router.navigate(['/billetera/deposit']);
  }
}

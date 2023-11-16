import { Component, ViewChild } from '@angular/core';
import { ApexStroke, ApexTooltip, ChartComponent } from 'ng-apexcharts';
import {Clipboard} from '@angular/cdk/clipboard';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
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

@Component({
  selector: 'app-otc',
  templateUrl: './otc.component.html',
  styleUrls: ['./otc.component.scss'],
})
export class OTCComponent {
  checkbox = false;
  clipboardText="RED TRON TRC-20"
  OTCstep1=false
  OTCstep2=true
  OTCstep3=false
  Method={name:"Seleccionar método", pic:"assets/flag/chile.svg"}
  isOpen=false;
  MethodList =[
    {name:"Seleccionar método", pic:"assets/flag/chile.svg"},
    {name:"Usdt",pic:"assets/logos/usdt.svg"},
   ]
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  constructor(private clipboard: Clipboard, private fb:FormBuilder) {
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
        colors: ['rgba(45, 45, 60, 1)', 'rgba(8, 132, 50, 1)'],
      },
    };
  }
  OtcOne = this.fb.group({
    ValueUSDTConfirmed:["", Validators.required],
    TotalUSDT:["", Validators.required],
    Total:["", Validators.required],
    DepositTotalAddress:["", Validators.required],
    confirm:["", Validators.required]
  })
  OtcTwo = this.fb.group({
    ValueUSDTConfirmed:["", Validators.required],
    TotalUSDT:["", Validators.required],
    Total:["", Validators.required],
    DepositTotalAddress:["", Validators.required],
    confirm:["", Validators.required]
  })
  history = [
    {
      id: 1,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Buy',
      typeBg: 'buyC',
      state: 'Canceled',
      stateC: 'canceledC',
      time: '06.01 AM',
    },
    {
      id: 2,
      flag: 'assets/logos/usdt.svg',
      coinName: 'USDT',
      type: 'Sell',
      typeBg: 'sellC',
      state: 'Pending',
      stateC: 'pendingC',
      time: '06.01 AM',
    },
    {
      id: 3,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Exchange',
      typeBg: 'exchangeC',
      state: 'Done',
      stateC: 'doneC',
      time: '06.01 AM',
    },
    {
      id: 4,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Exchange',
      typeBg: 'exchangeC',
      state: 'Canceled',
      stateC: 'canceledC',
      time: '06.01 AM',
    },
    {
      id: 5,
      flag: 'assets/logos/usdt.svg',
      coinName: 'USDT',
      type: 'Sell',
      typeBg: 'sellC',
      state: 'Pending',
      stateC: 'pendingC',
      time: '06.01 AM',
    },
    {
      id: 6,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Exchange',
      typeBg: 'exchangeC',
      state: 'Done',
      stateC: 'doneC',
      time: '06.01 AM',
    },
    {
      id: 7,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Buy',
      typeBg: 'buyC',
      state: 'Canceled',
      stateC: 'canceledC',
      time: '06.01 AM',
    },


  ];

  MethodChange(event:any){
    this.Method.name=event.name;
    this.Method.pic=event.pic;
    this.isOpen=false;
  }
}

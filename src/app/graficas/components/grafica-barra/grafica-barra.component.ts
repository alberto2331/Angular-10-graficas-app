import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input()haceloHorizontal:boolean=false;
  public barChartOptions: ChartOptions = {
    responsive: true, //esto lo hace responsive
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  @Input() barChartLabels: Label[] = [];
  //['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  public barChartType: ChartType = 'bar'; //aca puedo poner el grafico de barra horizontal
  public barChartLegend = true; //si lo pongo el false no aparecen las referencias del grafico
  @Input() barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' , backgroundColor:"#FA524E" , hoverBackgroundColor:"#7AFF94"},
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' ,backgroundColor:"#FFF05C"  , hoverBackgroundColor:"#90E6FA"},
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Columna 3',backgroundColor:"#F5B164"  , hoverBackgroundColor:"#9687FF"},
  ];
  constructor() { }

  ngOnInit(): void {
    if(this.haceloHorizontal){
      this.barChartType = "horizontalBar"; //horizontalBar: es el nombre de la propiedad establecida por librería
    }
  }
}

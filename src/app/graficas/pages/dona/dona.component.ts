import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Campo agregado manualmente'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,200], //circulo de afuera
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public coloresSelccionados:Color[]=[
    {
      backgroundColor:[
        '#98BD58',
        '#47717A',
        '#90E6FA',
        '#10E6FA',
      ] 
    }
  ];
}

import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    //  'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Campo agregado manualmente'
  ];
  public doughnutChartData: MultiDataSet = [
    
      //[350, 450, 100,200]
    
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
  constructor(private donaService: GraficasService) { }

  ngOnInit(): void {
    this.donaService.getUsuariosRedesSociales()
        .subscribe(resultado=>{
          console.log(resultado);
          //Extraemos las llaves:
          const label= Object.keys(resultado);
          //---------------Object: es una propiedad de JS que, entre otras, me permite acceder a las llaves
          this.doughnutChartLabels= label;
          //Extraemos las valores:
          const valores= Object.values(resultado);
          //---------------Object: es una propiedad de JS que, entre otras, me permite acceder a las valores de un
          this.doughnutChartData.push(valores); //uso el push porque los valores son un array dentro de un array
        })
  }
}

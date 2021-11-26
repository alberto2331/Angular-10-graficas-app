import { Component } from '@angular/core';

interface MenuItem{
  ruta: string,
  nombre: string,
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
  li{
    cursor: pointer;
  }`
  ]
})
export class MenuComponent  {

  menu:MenuItem[]=[
    {ruta:'graficas/barra', nombre:'Barra'},
    {ruta:'graficas/barra-doble', nombre:'Barra Doble'},
    {ruta:'graficas/dona', nombre:'Dona'},
    {ruta:'graficas/dona-http', nombre:'Dona Http'}
  ]
}
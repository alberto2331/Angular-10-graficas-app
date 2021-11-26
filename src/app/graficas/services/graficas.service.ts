import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private httpDona:HttpClient) { }
  getUsuariosRedesSociales(){
    return this.httpDona.get('http://localhost:3000/grafica');
  }
}

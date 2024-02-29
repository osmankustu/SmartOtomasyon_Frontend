import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
//productionDomain:string="https://antalyasmartotomasyon.somee.com/Data/api/";
  //testDomain:string="";
  productionDomain:string="https://localhost:7115/api/";
  constructor() { }
}

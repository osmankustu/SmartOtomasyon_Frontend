import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  //testDomain:string="";
  productionDomain:string="https://localhost:7115/api/";
  constructor() { }
}

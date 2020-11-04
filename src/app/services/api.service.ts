import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  RATE_A = 'http://api.nbp.pl/api/exchangerates/tables/a';
  RATE_B = 'http://api.nbp.pl/api/exchangerates/tables/b';
  RATE_C = 'http://api.nbp.pl/api/exchangerates/tables/c';

  getRateA(){
    return this.httpClient.get(this.RATE_A)
  }
  getRateB(){
    return this.httpClient.get(this.RATE_B)
  }
  getRateC(){
    return this.httpClient.get(this.RATE_C)
  }
}

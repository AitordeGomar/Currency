import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  RATE_A = 'https://api.nbp.pl/api/exchangerates/tables/a/2020-11-04';
  RATE_B = 'https://api.nbp.pl/api/exchangerates/tables/b/2020-11-04';
  RATE_C = 'https://api.nbp.pl/api/exchangerates/tables/c/2020-11-04';

  getRateA() {
    return this.httpClient.get(this.RATE_A);
  }
  getRateB() {
    return this.httpClient.get(this.RATE_B);
  }
  getRateC() {
    return this.httpClient.get(this.RATE_C);
  }
}

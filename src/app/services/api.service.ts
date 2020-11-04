import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  API_KEY = 'http://api.nbp.pl/api/exchangerates/tables/a';

  getData(){
    return this.httpClient.get(this.API_KEY)
  }
}

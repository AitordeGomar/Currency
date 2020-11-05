import { Component, OnInit} from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  rateListA;
  rateListB;
  rateListC;
  searchInput;
  currencySearched;

  constructor(private ApiService: ApiService) {}
  ngOnInit() {
    this.ApiService.getRateA().subscribe((data) => {
      this.rateListA = data[0].rates;
    });
    this.ApiService.getRateB().subscribe((data) => {
      this.rateListB = data[0].rates;
    });
    this.ApiService.getRateC().subscribe((data) => {
      this.rateListC = data[0].rates;
    });
    this.ApiService.getUSD().subscribe((data) => {
      this.currencySearched = data;
      console.log(this.currencySearched + 'usd');
    });
  }

  search(){
    this.searchInput = document.getElementById('searchInput');
    if(this.searchInput.value.length !== 3){
      alert('error');
    }else{
      console.log(this.currencySearched);
    }



    // console.log(this.searchInput.value);
  }
  }
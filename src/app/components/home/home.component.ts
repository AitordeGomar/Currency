import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favList=[];
  rateListA;
  rateListB;
  rateListC;
  searchInput;
  usdSearched;
  eurSearched;
  currencySearched = 'USD';

  constructor(private ApiService: ApiService, private data:DataService) {}
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
      this.usdSearched = data;
    });
    this.ApiService.getEUR().subscribe((data) => {
      this.eurSearched = data;
    });

    this.favList = this.data.getData();

  }

  // search(){
  //   this.searchInput = document.getElementById('searchInput');
  //   if(this.searchInput.value.length !== 3){
  //     alert('error');
  //   }else{
  //     switch(this.searchInput.value.toUpperCase()){
  //       case 'USD':
  //       this.currencySearched = this.usdSearched;
  //       break;
  //       case 'EUR':
  //         this.currencySearched = this.eurSearched;
  //         break;
  //       default:
  //         alert('We do not find your currency');
  //     }
  //   }

  search(){
    this.searchInput = document.getElementById('searchInput');
    this.favList.push(this.searchInput.value);
    console.log(this.favList);
  }



    // console.log(this.searchInput.value);
  }
  

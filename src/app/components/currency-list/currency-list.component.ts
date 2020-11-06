import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
})
export class CurrencyListComponent implements OnInit {
  rateListA;
  rateListB;
  rateListC;
  isAVisible: boolean = false;
  isBVisible: boolean = false;
  isCVisible: boolean = false;
  i = 0;
  j =0;
  l;
  favList=[];
  inputs = document.getElementsByTagName('input');

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

    this.favList = this.data.getData();
  }

  showA = function () {
    this.isAVisible = true;
    this.isBVisible = false;
    this.isCVisible = false;
  };
  showB() {
    this.isAVisible = false;
    this.isBVisible = true;
    this.isCVisible = false;
  }
  showC() {
    this.isAVisible = false;
    this.isBVisible = false;
    this.isCVisible = true;
  }

  addFavA() {
    for (this.i = 0; this.i < this.rateListA.length; this.i++) {
      if(this.inputs[this.i].checked && this.favList.includes(this.rateListA[this.i].code)){
        continue;
      }else{
      if (this.inputs[this.i].checked) {
        this.favList.push(this.rateListA[this.i].code);
      }
    }
    }
    console.log(this.favList);
    this.i =0;
  }
  addFavB() {
    for (this.j = 0; this.j < this.rateListB.length; this.j++) {
      this.l = this.j + this.rateListA.length;
      if(this.inputs[this.l].checked && this.favList.includes(this.rateListB[this.j].code)){
        continue;
      }else{
        if(this.inputs[parseInt(this.rateListA.length)+ this.j].checked){
        this.favList.push(this.rateListB[this.j].code);
      }
    }
  }
  console.log(this.favList);
    this.j=0;
  }
}
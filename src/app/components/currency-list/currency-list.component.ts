import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
})
export class CurrencyListComponent implements OnInit {
  rateListA;
  rateListB;
  rateListC;
  isAVisible = false;
  isBVisible = false;
  isCVisible = false;
  i = 0;
  j = 0;
  l;

  constructor(private Api: ApiService) {}
  ngOnInit(): void {
    this.Api.getRateA().subscribe((data) => {
      this.rateListA = data[0].rates;
    });
    this.Api.getRateB().subscribe((data) => {
      this.rateListB = data[0].rates;
    });
    this.Api.getRateC().subscribe((data) => {
      this.rateListC = data[0].rates;
    });
  }

  showA(): void{
    this.isAVisible = true;
    this.isBVisible = false;
    this.isCVisible = false;
  }
  showB(): void{
    this.isAVisible = false;
    this.isBVisible = true;
    this.isCVisible = false;
  }
  showC(): void{
    this.isAVisible = false;
    this.isBVisible = false;
    this.isCVisible = true;
  }
}

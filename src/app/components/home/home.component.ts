import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  favList = [];
  rateListC;
  usdSearched;
  audSearched;
  cadSearched;
  eurSearched;
  hufSearched;
  chfSearched;
  gbpSearched;
  jpySearched;
  czkSearched;
  dkkSearched;
  nokSearched;
  sekSearched;
  xdrSearched;
  searchInput;
  currencySearched;
  i;
  r;

  constructor(private Api: ApiService) {}
  ngOnInit(): void {

    this.Api.getRateC().subscribe((data) => {
      this.rateListC = data[0].rates;
    });
    this.Api.getRateC().subscribe((data) => {
      this.usdSearched = data[0].rates[0];
    });
    this.Api.getRateC().subscribe((data) => {
      this.audSearched = data[0].rates[1];
    });
    this.Api.getRateC().subscribe((data) => {
      this.cadSearched = data[0].rates[2];
    });
    this.Api.getRateC().subscribe((data) => {
      this.eurSearched = data[0].rates[3];
    });
    this.Api.getRateC().subscribe((data) => {
      this.hufSearched = data[0].rates[4];
    });
    this.Api.getRateC().subscribe((data) => {
      this.chfSearched = data[0].rates[5];
    });
    this.Api.getRateC().subscribe((data) => {
      this.gbpSearched = data[0].rates[6];
    });
    this.Api.getRateC().subscribe((data) => {
      this.jpySearched = data[0].rates[7];
    });
    this.Api.getRateC().subscribe((data) => {
      this.czkSearched = data[0].rates[8];
    });
    this.Api.getRateC().subscribe((data) => {
      this.dkkSearched = data[0].rates[9];
    });
    this.Api.getRateC().subscribe((data) => {
      this.nokSearched = data[0].rates[10];
    });
    this.Api.getRateC().subscribe((data) => {
      this.sekSearched = data[0].rates[11];
    });
    this.Api.getRateC().subscribe((data) => {
      this.xdrSearched = data[0].rates[12];
    });
  }

  add(): void {
    this.searchInput = document.getElementById('searchInput');

    switch (this.searchInput.value.toUpperCase()) {
      case 'USD':
        this.currencySearched = this.usdSearched;
        break;
      case 'AUD':
        this.currencySearched = this.audSearched;
        break;
      case 'CAD':
        this.currencySearched = this.cadSearched;
        break;
      case 'EUR':
        this.currencySearched = this.eurSearched;
        break;
      case 'HUF':
        this.currencySearched = this.hufSearched;
        break;
      case 'CHF':
        this.currencySearched = this.chfSearched;
        break;
      case 'GBP':
        this.currencySearched = this.gbpSearched;
        break;
      case 'JPY':
        this.currencySearched = this.jpySearched;
        break;
      case 'CZK':
        this.currencySearched = this.czkSearched;
        break;
      case 'DKK':
        this.currencySearched = this.dkkSearched;
        break;
      case 'NOK':
        this.currencySearched = this.nokSearched;
        break;
      case 'SEK':
        this.currencySearched = this.sekSearched;
        break;
      case 'XDR':
        this.currencySearched = this.xdrSearched;
        break;
    }

    this.searchInput = document.getElementById('searchInput');
    if (this.favList.includes(this.currencySearched)) {
    } else {
      this.favList.push(this.currencySearched);
    }
  }

  remove(e): void {
    this.r = window.confirm(
      'Do you want to remove ' + e.path[1].children[0].innerText + '?'
    );

    if (this.r === true) {
      for (this.i = 0; this.i <= this.favList.length; this.i++) {
        if (this.favList.length === 0) {
          break;
        } else if (
          e.path[1].children[0].innerText !== this.favList[this.i].code
        ) {
          continue;
        } else {
          this.favList.splice(this.favList.indexOf(this.favList[this.i]), 1);
        }
      }
      this.r = null;
    } else {
    }
  }

  removeAll(): void {
    this.r = window.confirm(
      'Do you want to remove all currencies from your favourite list?'
    );

    if (this.r === true) {
      this.favList = [];
      this.r = null;
    } else {
    }
  }
}

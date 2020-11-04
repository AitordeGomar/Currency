import { Component, OnInit} from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  insideData;
  constructor(private ApiService:ApiService){}
  ngOnInit(){
    this.ApiService.getData().subscribe((data)=>{
      console.log(data[0].rates);
      this.insideData = data[0].rates;
    })
  }
}
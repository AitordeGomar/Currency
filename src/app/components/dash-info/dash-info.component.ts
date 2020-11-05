import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';

@Component({
  selector: 'app-dash-info',
  templateUrl: './dash-info.component.html',
  styleUrls: ['./dash-info.component.css']
})
export class DashInfoComponent implements OnInit {
@Input() currencySearched;
  constructor() { }

  ngOnInit(): void {
  }

}

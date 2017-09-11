import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent implements OnInit {
  @Input() weather: any;
  public env: any;
  
  constructor() { 
    this.env = environment;
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs/Subscription";
import {ForecastItemComponent} from "../forecast/forecast-item/forecast-item.component";


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  private subscriptions: Subscription [] = [];
  private forecast: any;
  @Output() forecastEvent = new EventEmitter<any>();
  constructor(private dataService: DataService) { }


  ngOnInit() {
    this.dataService.getPosition().subscribe((res) => {
    this.handlePosition(res);
  });}

  fireForecast(val){
    this.forecastEvent.emit(val);
  }

handlePosition(position: Position) {
  const sub = this.dataService.getForecastByPositions(position).subscribe(forecast => {
  this.forecast = forecast;
  console.log(forecast);
  });
  this.subscriptions.push(sub);
}

ngOnDestroy() {
  for (const sub of this.subscriptions) {
    if (sub) {
      sub.unsubscribe();
    }
  }}
}

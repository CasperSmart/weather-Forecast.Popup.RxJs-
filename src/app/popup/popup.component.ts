import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Popup } from './popup';
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  public popUp : Popup;
  public message: string;
  public alertType: string;
  private subscriptions: Subscription [] = [];

  constructor(private dataService: DataService) { 
    this.popUp = new Popup(false);
  }

  ngOnInit() {
    const sub =  this.dataService.listenPopUp().subscribe(popUp  => {
        this.popUp = popUp;
        setTimeout(()=> {
           this.popUp.destruct();
        },2000);
      });
      this.subscriptions.push(sub);
  }
  ngOnDestroy() {
    for (const sub of this.subscriptions) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }

}

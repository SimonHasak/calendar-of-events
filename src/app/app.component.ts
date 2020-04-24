import { Component } from '@angular/core';
import {SchedulledEvent} from './model/schedulled-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public schedulledEvent: SchedulledEvent;

  childSchedulledEventEmitting(event: SchedulledEvent) {
    console.log('in parent', event);
    this.schedulledEvent = event;
  }


}

import { Component } from '@angular/core';
import {SchedulledEvent} from './model/schedulled-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public schedulledEvent: SchedulledEvent;
  public messageId: number;

  childSchedulledEventEmitting(event: SchedulledEvent) {
    console.log('in parent', event);
    this.schedulledEvent = event;
  }

  childMessageIdEventEmitting(event: number) {
    console.log('in parent', event);
    this.messageId = event;
  }


}

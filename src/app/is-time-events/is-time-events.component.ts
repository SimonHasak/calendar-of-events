import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {SchedulledEvent} from '../model/schedulled-event';
import {IsTimeService} from '../service/is-time.service';

@Component({
  selector: 'app-is-time-events',
  templateUrl: './is-time-events.component.html',
  styleUrls: ['./is-time-events.component.css']
})
export class IsTimeEventsComponent implements OnInit {

  @Input() schedulledEventEmitted: SchedulledEvent;
  @Input() messageIdEmitted: number;

  schedulledEvents: SchedulledEvent[] = [];

  constructor(private isTimeService: IsTimeService) { }

  ngOnInit(): void {

    this.isTimeService.getSchedulledEvents()
      .subscribe( data => this.schedulledEvents = data,
        error => this.schedulledEvents = []);
  }

  addToList(event: SchedulledEvent) {
    if (this.schedulledEvents.indexOf(event) === -1) {
      // console.log('pushed into ', event);
      this.schedulledEvents.push(event);
    }
    // console.log('not pushed');
  }

  removeFromListByMessageId(messageId: number) {
    var indexToRemove = -1;
    for (var element of this.schedulledEvents) {
      ++indexToRemove;
      if (element.messageId === messageId) {
        break;
      }
    }
    if (indexToRemove < this.schedulledEvents.length) {
      this.schedulledEvents.splice(indexToRemove, 1);
    }
    console.log(messageId);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on change', changes);
    if (!(changes['schedulledEventEmitted'] === undefined || changes['schedulledEventEmitted'].isFirstChange())) {
      this.addToList(this.schedulledEventEmitted);
    }

    if (!(changes['messageIdEmitted'] === undefined || changes['messageIdEmitted'].isFirstChange())) {
      this.removeFromListByMessageId(this.messageIdEmitted);
    }
  }

}

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

  schedulledEvents: SchedulledEvent[];

  constructor(private isTimeService: IsTimeService) { }

  ngOnInit(): void {

    this.isTimeService.getSchedulledEvents()
      .subscribe( data => this.schedulledEvents = data,
        error => this.schedulledEvents = []);
  }

  addToList(event: SchedulledEvent) {
    console.log('pushed ', event);
    this.schedulledEvents.push(event);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on change', changes);
    if (!changes.schedulledEventEmitted.isFirstChange()) {
      this.addToList(this.schedulledEventEmitted);
    }

  }

}

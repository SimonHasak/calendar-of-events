import { Component, OnInit } from '@angular/core';

import { Event } from '../model/Event';
import {EnterEventsService} from '../service/enter-events.service';
import {EventModel} from '../model/event-model';

@Component({
  selector: 'app-enter-events',
  templateUrl: './enter-events.component.html',
  styleUrls: ['./enter-events.component.css']
})
export class EnterEventsComponent implements OnInit {

  event: EventModel;

  nowTime: Date;
  choosedTime: Date;
  email: string;
  message: string;

  constructor(private enterEventsService: EnterEventsService) {
    this.event = new EventModel();
  }

  ngOnInit(): void {
    this.nowTime = new Date();
  }

  save() {
    if (this.isValidInput()) {
      this.saveDataToEvent();
      this.sendDataToBackend();
      this.clear();
    }
    console.log(this.event);
  }

  saveDataToEvent() {
    this.event = {
      name: 'simon',
      number: 23
      // id: 1,
      // email: this.email,
      // message: this.message,
      // time: this.choosedTime
    };
  }

  sendDataToBackend() {
    console.log('Saving');
    this.enterEventsService.saveEvent(this.event).subscribe(e => console.log('Saved: ', e));
  }

  clear() {
    this.choosedTime = null;
    this.email = '';
    this.message = '';
    this.enterEventsService.getAll();
  }

  private isValidInput(): boolean {
    let errorMessage = '';

    if (this.email == '') {
      errorMessage += 'Email cannot be empty.\n';
    }
    if (this.message == '') {
      errorMessage += 'Message cannot be empty.\n';
    }
    if (this.choosedTime == null) {
      errorMessage += 'Date cannot be empty.\n';
    }

    if (errorMessage != '') {
      alert(errorMessage);
      return false;
    }

    return true;
  }

}

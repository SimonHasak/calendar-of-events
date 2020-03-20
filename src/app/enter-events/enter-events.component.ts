import { Component, OnInit } from '@angular/core';
import { Event } from '../model/Event';
import { HttpClient } from '@angular/common/http';
import {EnterEventsService} from '../service/EnterEventsService';

@Component({
  selector: 'app-enter-events',
  templateUrl: './enter-events.component.html',
  styleUrls: ['./enter-events.component.css']
})
export class EnterEventsComponent implements OnInit {

  event: Event;

  nowTime: Date;
  choosedTime: Date;
  email: string;
  message: string;


  constructor(private enterEventsService: EnterEventsService) { }

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
      email: this.email,
      message: this.message,
      time: this.choosedTime
    };
  }

  sendDataToBackend() {

  }

  clear() {
    this.choosedTime = null;
    this.email = '';
    this.message = '';
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

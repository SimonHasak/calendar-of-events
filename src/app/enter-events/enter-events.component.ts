import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { SavedEvent } from '../model/saved-event';
import {EnterEventsService} from '../service/enter-events.service';
import {SchedulledEvent} from '../model/schedulled-event';
import {Notification} from '../model/notification';
import {IsTimeService} from '../service/is-time.service';
import {NotificationService} from '../service/notification.service';

@Component({
  selector: 'app-enter-events',
  templateUrl: './enter-events.component.html',
  styleUrls: ['./enter-events.component.css']
})
export class EnterEventsComponent implements OnInit {

  @Output() eventSchedulledEvent = new EventEmitter<SchedulledEvent>();

  savedEvent: SavedEvent;
  schedulledEvent: SchedulledEvent;
  notification: Notification;

  currentTime: Date;
  choosedTime: Date;
  email: string;
  text: string;
  messageId: number;
  schedulledId: number;

  constructor(private enterEventsService: EnterEventsService,
              private isTimeService: IsTimeService,
              private notificationService: NotificationService) {
    this.savedEvent = new SavedEvent();
    this.schedulledEvent = new SchedulledEvent();
    this.notification = new Notification();
    this.messageId = 0;
    this.schedulledId = 0;
  }

  ngOnInit(): void {
    this.currentTime = new Date();
  }

  async save() {
    if (this.isValidInput()) {
      this.saveSavedEvent();

      await this.sendSavedEventToBackend();

      this.saveNotification();

      await this.sendNotificationToBackend();

      this.saveSchedulledEvent();

      await this.sendSchedulledEventToBackend();

      this.emitToSchedulledComponent();

      this.clear();
    } else {
      alert("Input is not valid!");
    }
  }

  saveSavedEvent() {
    console.log('[Enter Events] Saved FE.');
    this.savedEvent = {
      text: this.text
    };
  }

  saveSchedulledEvent() {
    console.log('[Is Time] Saved FE.');
    this.schedulledEvent = {
      schedulledId: this.schedulledId,
      messageId: this.messageId,
      schedulledTime: this.choosedTime,
    };
  }

  saveNotification() {
    console.log('[Notification] Saved FE.');
    this.notification = {
      messageId: this.messageId,
      email: this.email
    };
  }

  async sendSavedEventToBackend() {
    let result = await this.enterEventsService.save(this.savedEvent);
    this.messageId = result.messageId;
    console.log('[Enter Event] Saved: ', result);
  }

  async sendSchedulledEventToBackend() {
    let result = await this.isTimeService.save(this.schedulledEvent);
    this.schedulledEvent.schedulledId = result.schedulledId;
    console.log('[Is Time] Saved: ', this.schedulledEvent);
  }

  async sendNotificationToBackend() {
    await this.notificationService.save(this.notification).then(e => console.log('[Notification] Saved: ', e));
  }

  emitToSchedulledComponent() {
    this.eventSchedulledEvent.emit(this.schedulledEvent);
    console.log('emited', this.schedulledEvent);
  }

  clear() {
    this.choosedTime = null;
    this.email = '';
    this.text = '';
  }

  private isValidInput(): boolean {
    let errorMessage = '';

    if (this.email == '') {
      errorMessage += 'Email cannot be empty.\n';
    }
    if (this.text == '') {
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

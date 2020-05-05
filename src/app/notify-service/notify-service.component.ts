import {Component, EventEmitter, OnInit, Output, SimpleChanges} from '@angular/core';
import {NotificationService} from '../service/notification.service';
import {Notification} from '../model/notification';
import {SchedulledEvent} from '../model/schedulled-event';

@Component({
  selector: 'app-notify-service',
  templateUrl: './notify-service.component.html',
  styleUrls: ['./notify-service.component.css']
})
export class NotifyServiceComponent implements OnInit {

  @Output() eventMessageIdEvent = new EventEmitter<number>();

  text: string = '';

  notification: Notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNewNotification().subscribe(event => {
      this.notification = JSON.parse(event.data);
      console.log('Received ', this.notification);
      this.text = 'Sending email to ' + this.notification.email;
      this.emitToSchedulledComponent();
    });
  }

  emitToSchedulledComponent() {
    this.eventMessageIdEvent.emit(this.notification.messageId);
    console.log('emited', this.notification.messageId);
  }

}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NotificationService} from '../service/notification.service';
import {Notification} from '../model/notification';

@Component({
  selector: 'app-notify-service',
  templateUrl: './notify-service.component.html',
  styleUrls: ['./notify-service.component.css']
})
export class NotifyServiceComponent implements OnInit {

  @Output() eventMessageIdEvent = new EventEmitter<number>();

  text: string = '';

  isTextShowable: boolean = true;

  notifications: Notification[] = [];

  notification: Notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNewNotification().subscribe(event => {
      this.notification = JSON.parse(event.data);
      // this.notifications.push(this.notification);
      this.isTextShowable = true;
      console.log('Received ', this.notification);

      this.text = 'Sending message to ' + this.notification.email;

      // this.notifications.push(this.notification);

      setTimeout(() => {
          this.isTextShowable = false;
        }, 2000);

      this.emitToSchedulledComponent();
    });
  }

  emitToSchedulledComponent() {
    this.eventMessageIdEvent.emit(this.notification.messageId);
    console.log('emited', this.notification.messageId);
  }

}

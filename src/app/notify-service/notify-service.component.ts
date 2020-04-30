import {Component, OnInit, SimpleChanges} from '@angular/core';
import {NotificationService} from '../service/notification.service';
import {Notification} from '../model/notification';

@Component({
  selector: 'app-notify-service',
  templateUrl: './notify-service.component.html',
  styleUrls: ['./notify-service.component.css']
})
export class NotifyServiceComponent implements OnInit {

  text: string = '';

  notification: Notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNewNotification().subscribe(event => {
      this.notification = JSON.parse(event.data);
      console.log('Received ', this.notification);
      this.text += 'Sending email to ' + this.notification.email + '\n';
    });
    // let source = new EventSource('http://localhost:8081/notification/new_notification');
    // source.addEventListener('message', message =>  {
    //   this.text = JSON.parse(message.data);
    //   console.log(this.text);
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Change in notification component');
  }

}

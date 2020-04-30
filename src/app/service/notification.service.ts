import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notification} from '../model/notification';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationUrl: string;

  constructor(private http: HttpClient, private zone: NgZone) {
    this.notificationUrl = 'http://localhost:8081/notification';
  }

  save(notification: Notification) {
    return this.http.post<Notification>(this.notificationUrl, notification).toPromise();
  }

  getNewNotification() {
    return Observable.create(observer => {
      const eventSource = new EventSource(this.notificationUrl + '/new_notification');

      eventSource.onmessage = event => {
        this.zone.run(() => {
          observer.next(event);
        });
      };

      eventSource.onerror = error => {
        this.zone.run(() => {
          observer.error(error);
          eventSource.close();
        });
      };
    });
  }

}

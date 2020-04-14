import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notification} from '../model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationUrl: string;

  constructor(private http: HttpClient) {
    this.notificationUrl = 'http://localhost:8081/notification';
  }

  save(notification: Notification) {
    return this.http.post<Notification>(this.notificationUrl, notification);
  }

}

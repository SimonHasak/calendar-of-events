import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SchedulledEvent} from '../model/schedulled-event';
import {SchedulledEventResponse} from '../model/schedulled-event-response';
import {catchError, filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsTimeService {

  private isTimeUrl: string;

  constructor(private http: HttpClient) {
    this.isTimeUrl = 'http://localhost:8082/is-time';
  }

  save(schedulledEvent: SchedulledEvent) {
    return this.http.post<Notification>(this.isTimeUrl, schedulledEvent).toPromise();
  }

  getSchedulledEvents(): Observable<SchedulledEvent[]> {
    return this.http.get<SchedulledEventResponse>(this.isTimeUrl)
      .pipe(
        filter(r => r.),
        map(response => response._embedded.schedulledEventList),
      );
  }

}

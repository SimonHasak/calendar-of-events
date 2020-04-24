import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {SchedulledEvent} from '../model/schedulled-event';
import {SchedulledEventResponse} from '../model/schedulled-event-response';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IsTimeService {

  private isTimeUrl: string;

  constructor(private http: HttpClient) {
    this.isTimeUrl = 'http://localhost:8082/is-time';
  }

  save(schedulledEvent: SchedulledEvent) {
    return this.http.post<SchedulledEvent>(this.isTimeUrl, schedulledEvent).toPromise();
  }

  // getSchedulledEvents(): Observable<SchedulledEvent[]> {
  //   return this.http.get<SchedulledEventResponse>(this.isTimeUrl)
  //     .pipe(
  //       map(response => response._embedded.schedulledEventList),
  //       tap(message => message),
  //       catchError(this.handleError('getSchedulledEvents', []))
  //     );
  // }

  getSchedulledEvents (): Observable<SchedulledEvent[]> {
    return this.http.get<SchedulledEventResponse>(this.isTimeUrl)
      .pipe(
        map(response => response._embedded.schedulledEventList),
        catchError(error => { return Observable.throw(error); })
      );
  }

  // private handleError(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || "Empty array.");
  // }

}

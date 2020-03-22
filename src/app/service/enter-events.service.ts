import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {EventModel} from '../model/event-model';
import {IsTime} from '../model/is-time';

@Injectable({
  providedIn: 'root'
})
export class EnterEventsService {

  private eventUrl: string;

  constructor(private http: HttpClient) {
    this.eventUrl = 'http://localhost:8080/enter-events';
  }

  saveEvent(event: EventModel) {
    console.log('Service:', event);
    return this.http.post<EventModel>(this.eventUrl, event);
      // .pipe(catchError(Console)));
  }

  getAll()  {
    console.log("Service: geet");
    return this.http.get<String>('http://localhost:8082/is-time/angular').subscribe( d => console.log(d));
  }

}

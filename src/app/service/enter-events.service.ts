import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SavedEvent} from '../model/saved-event';

@Injectable({
  providedIn: 'root'
})
export class EnterEventsService {

  private eventUrl: string;

  constructor(private http: HttpClient) {
    this.eventUrl = 'http://localhost:8080/enter-events';
  }

  save(event: SavedEvent) {
    return this.http.post<SavedEvent>(this.eventUrl, event).toPromise();
  }

}

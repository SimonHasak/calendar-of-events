import {SchedulledEvent} from './schedulled-event';

export interface SchedulledEventResponse {
  _embedded: {
    schedulledEventList: SchedulledEvent[];
    _links: {self: {href: string}};
  }
}

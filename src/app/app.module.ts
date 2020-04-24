import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { EnterEventsComponent } from './enter-events/enter-events.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { IsTimeEventsComponent } from './is-time-events/is-time-events.component';
import { NotifyServiceComponent } from './notify-service/notify-service.component';
import {EnterEventsService} from './service/enter-events.service';
import { DateTimeFormatPipe } from './pipe/date-time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EnterEventsComponent,
    IsTimeEventsComponent,
    NotifyServiceComponent,
    DateTimeFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    EnterEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

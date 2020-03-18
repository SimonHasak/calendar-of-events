import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-events',
  templateUrl: './enter-events.component.html',
  styleUrls: ['./enter-events.component.css']
})
export class EnterEventsComponent implements OnInit {

  nowTime: Date;
  choosedTime: Date;

  constructor() { }

  ngOnInit(): void {
    this.nowTime = new Date();
  }

}

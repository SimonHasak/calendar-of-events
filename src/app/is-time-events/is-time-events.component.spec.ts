import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTimeEventsComponent } from './is-time-events.component';

describe('IsTimeEventsComponent', () => {
  let component: IsTimeEventsComponent;
  let fixture: ComponentFixture<IsTimeEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsTimeEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTimeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

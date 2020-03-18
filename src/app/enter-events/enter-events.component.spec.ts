import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterEventsComponent } from './enter-events.component';

describe('EnterEventsComponent', () => {
  let component: EnterEventsComponent;
  let fixture: ComponentFixture<EnterEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

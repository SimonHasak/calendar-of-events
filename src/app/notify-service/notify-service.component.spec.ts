import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyServiceComponent } from './notify-service.component';

describe('NotifyServiceComponent', () => {
  let component: NotifyServiceComponent;
  let fixture: ComponentFixture<NotifyServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

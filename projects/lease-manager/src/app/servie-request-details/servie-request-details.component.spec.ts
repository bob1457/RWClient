import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServieRequestDetailsComponent } from './servie-request-details.component';

describe('ServieRequestDetailsComponent', () => {
  let component: ServieRequestDetailsComponent;
  let fixture: ComponentFixture<ServieRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServieRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServieRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

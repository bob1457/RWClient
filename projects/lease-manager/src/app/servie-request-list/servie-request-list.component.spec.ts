import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServieRequestListComponent } from './servie-request-list.component';

describe('ServieRequestListComponent', () => {
  let component: ServieRequestListComponent;
  let fixture: ComponentFixture<ServieRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServieRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServieRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

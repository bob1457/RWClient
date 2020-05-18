import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseHomeComponent } from './lease-home.component';

describe('LeaseHomeComponent', () => {
  let component: LeaseHomeComponent;
  let fixture: ComponentFixture<LeaseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

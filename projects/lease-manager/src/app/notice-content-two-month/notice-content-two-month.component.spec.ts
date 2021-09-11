import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeContentTwoMonthComponent } from './notice-content-two-month.component';

describe('NoticeContentTwoMonthComponent', () => {
  let component: NoticeContentTwoMonthComponent;
  let fixture: ComponentFixture<NoticeContentTwoMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeContentTwoMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeContentTwoMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

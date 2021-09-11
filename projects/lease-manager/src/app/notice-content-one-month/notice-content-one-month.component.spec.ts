import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeContentOneMonthComponent } from './notice-content-one-month.component';

describe('NoticeContentOneMonthComponent', () => {
  let component: NoticeContentOneMonthComponent;
  let fixture: ComponentFixture<NoticeContentOneMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeContentOneMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeContentOneMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

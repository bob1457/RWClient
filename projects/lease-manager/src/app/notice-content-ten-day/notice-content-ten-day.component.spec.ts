import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeContentTenDayComponent } from './notice-content-ten-day.component';

describe('NoticeContentTenDayComponent', () => {
  let component: NoticeContentTenDayComponent;
  let fixture: ComponentFixture<NoticeContentTenDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeContentTenDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeContentTenDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

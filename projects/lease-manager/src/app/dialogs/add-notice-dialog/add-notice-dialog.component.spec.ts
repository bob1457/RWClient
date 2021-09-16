import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNoticeDialogComponent } from './add-notice-dialog.component';

describe('AddNoticeDialogComponent', () => {
  let component: AddNoticeDialogComponent;
  let fixture: ComponentFixture<AddNoticeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoticeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoticeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

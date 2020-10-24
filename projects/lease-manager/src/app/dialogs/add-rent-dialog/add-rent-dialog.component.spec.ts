import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentDialogComponent } from './add-rent-dialog.component';

describe('AddRentDialogComponent', () => {
  let component: AddRentDialogComponent;
  let fixture: ComponentFixture<AddRentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

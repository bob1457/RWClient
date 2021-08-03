import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStrataDialogComponent } from './add-strata-dialog.component';

describe('AddStrataDialogComponent', () => {
  let component: AddStrataDialogComponent;
  let fixture: ComponentFixture<AddStrataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStrataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStrataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

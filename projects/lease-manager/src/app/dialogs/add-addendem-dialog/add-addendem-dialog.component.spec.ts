import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddendemDialogComponent } from './add-addendem-dialog.component';

describe('AddAddendemDialogComponent', () => {
  let component: AddAddendemDialogComponent;
  let fixture: ComponentFixture<AddAddendemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAddendemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddendemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

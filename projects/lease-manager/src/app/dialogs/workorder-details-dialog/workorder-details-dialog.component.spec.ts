import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkorderDetailsDialogComponent } from './workorder-details-dialog.component';

describe('WorkorderDetailsDialogComponent', () => {
  let component: WorkorderDetailsDialogComponent;
  let fixture: ComponentFixture<WorkorderDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkorderDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkorderDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

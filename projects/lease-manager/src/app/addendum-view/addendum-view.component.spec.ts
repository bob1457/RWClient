import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddendumViewComponent } from './addendum-view.component';

describe('AddendumViewComponent', () => {
  let component: AddendumViewComponent;
  let fixture: ComponentFixture<AddendumViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddendumViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddendumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

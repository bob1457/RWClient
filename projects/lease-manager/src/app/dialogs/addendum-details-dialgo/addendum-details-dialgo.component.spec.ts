import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddendumDetailsDialgoComponent } from './addendum-details-dialgo.component';

describe('AddendumDetailsDialgoComponent', () => {
  let component: AddendumDetailsDialgoComponent;
  let fixture: ComponentFixture<AddendumDetailsDialgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddendumDetailsDialgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddendumDetailsDialgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsMainComponent } from './listing-details-main.component';

describe('ListingDetailsMainComponent', () => {
  let component: ListingDetailsMainComponent;
  let fixture: ComponentFixture<ListingDetailsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

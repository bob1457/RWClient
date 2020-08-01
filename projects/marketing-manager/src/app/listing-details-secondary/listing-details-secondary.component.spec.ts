import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsSecondaryComponent } from './listing-details-secondary.component';

describe('ListingDetailsSecondaryComponent', () => {
  let component: ListingDetailsSecondaryComponent;
  let fixture: ComponentFixture<ListingDetailsSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailsSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailsSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

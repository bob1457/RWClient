import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetailsSideComponent } from './listing-details-side.component';

describe('ListingDetailsSideComponent', () => {
  let component: ListingDetailsSideComponent;
  let fixture: ComponentFixture<ListingDetailsSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDetailsSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetailsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

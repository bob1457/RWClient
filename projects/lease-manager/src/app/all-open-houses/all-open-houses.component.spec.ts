import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOpenHousesComponent } from './all-open-houses.component';

describe('AllOpenHousesComponent', () => {
  let component: AllOpenHousesComponent;
  let fixture: ComponentFixture<AllOpenHousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllOpenHousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOpenHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrataDetailsComponent } from './strata-details.component';

describe('StrataDetailsComponent', () => {
  let component: StrataDetailsComponent;
  let fixture: ComponentFixture<StrataDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrataDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

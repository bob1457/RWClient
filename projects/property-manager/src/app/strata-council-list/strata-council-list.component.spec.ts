import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrataCouncilListComponent } from './strata-council-list.component';

describe('StrataCouncilListComponent', () => {
  let component: StrataCouncilListComponent;
  let fixture: ComponentFixture<StrataCouncilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrataCouncilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrataCouncilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

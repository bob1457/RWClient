import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContractClauseComponent } from './custom-contract-clause.component';

describe('CustomContractClauseComponent', () => {
  let component: CustomContractClauseComponent;
  let fixture: ComponentFixture<CustomContractClauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomContractClauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomContractClauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

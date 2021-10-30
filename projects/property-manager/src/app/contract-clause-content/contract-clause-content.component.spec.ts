import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractClauseContentComponent } from './contract-clause-content.component';

describe('ContractClauseContentComponent', () => {
  let component: ContractClauseContentComponent;
  let fixture: ComponentFixture<ContractClauseContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractClauseContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractClauseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

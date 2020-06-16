import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractHeaderComponent } from './contract-header.component';

describe('ContractHeaderComponent', () => {
  let component: ContractHeaderComponent;
  let fixture: ComponentFixture<ContractHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

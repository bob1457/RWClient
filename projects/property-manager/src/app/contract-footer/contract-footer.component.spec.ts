import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFooterComponent } from './contract-footer.component';

describe('ContractFooterComponent', () => {
  let component: ContractFooterComponent;
  let fixture: ComponentFixture<ContractFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

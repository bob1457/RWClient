import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLeaseAgreementComponent } from './full-lease-agreement.component';

describe('FullLeaseAgreementComponent', () => {
  let component: FullLeaseAgreementComponent;
  let fixture: ComponentFixture<FullLeaseAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLeaseAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLeaseAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

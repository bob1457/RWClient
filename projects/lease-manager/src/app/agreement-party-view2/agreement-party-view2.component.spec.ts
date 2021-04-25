import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementPartyView2Component } from './agreement-party-view2.component';

describe('AgreementPartyView2Component', () => {
  let component: AgreementPartyView2Component;
  let fixture: ComponentFixture<AgreementPartyView2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementPartyView2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementPartyView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

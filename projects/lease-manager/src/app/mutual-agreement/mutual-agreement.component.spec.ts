import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualAgreementComponent } from './mutual-agreement.component';

describe('MutualAgreementComponent', () => {
  let component: MutualAgreementComponent;
  let fixture: ComponentFixture<MutualAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutualAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutualAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

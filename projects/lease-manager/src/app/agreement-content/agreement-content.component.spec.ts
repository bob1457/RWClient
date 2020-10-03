import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementContentComponent } from './agreement-content.component';

describe('AgreementContentComponent', () => {
  let component: AgreementContentComponent;
  let fixture: ComponentFixture<AgreementContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

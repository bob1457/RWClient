import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractContentEditorComponent } from './contract-content-editor.component';

describe('ContractContentEditorComponent', () => {
  let component: ContractContentEditorComponent;
  let fixture: ComponentFixture<ContractContentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractContentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractContentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

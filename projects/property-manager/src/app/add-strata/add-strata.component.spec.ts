import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStrataComponent } from './add-strata.component';

describe('AddStrataComponent', () => {
  let component: AddStrataComponent;
  let fixture: ComponentFixture<AddStrataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStrataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStrataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

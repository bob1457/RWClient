import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import * as PropertyActions from '../store/actions/property.actions';
import { PropertyState } from '../store/property.state';
import { addProperty } from '../store/actions/property.actions';
import { Property } from '@lib/app-core';

@Component({
  selector: 'app-add-property-finish',
  templateUrl: './add-property-finish.component.html',
  styleUrls: ['./add-property-finish.component.scss']
})
export class AddPropertyFinishComponent implements OnInit {

  @Input() addForm: FormGroup

  constructor(private location: Location,
              private store: Store<PropertyState>) { }

  ngOnInit() {
  }

  submit(formValue) { // Add validation here...for all fields if any
    debugger;
    console.log(this.addForm);
    console.log(formValue);
    this.store.dispatch(PropertyActions.addProperty({payload: formValue}));
    this.location.back();
  }

}

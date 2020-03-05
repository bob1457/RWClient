import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { getPropertyDetails } from '../store/actions/property.actions';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  detailsForm: FormGroup;

  constructor(private store: Store<PropertyState>,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder) { 
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
              }

  propertyId: any = 1;
  id: number;

  ownersForProperty: any[] ;

  ngOnInit() {
    // debugger;
    // return this.store.dispatch(getPropertyDetails(this.propertyId))

    this.detailsForm = this.formBuilder.group({
      propertyName: ['']
    })
  }

  submit() {

  }

  goBack() {

  }

}

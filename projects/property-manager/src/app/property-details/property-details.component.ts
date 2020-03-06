import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { getPropertyDetails } from '../store/actions/property.actions';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Property } from '@lib/app-core';
import { Observable } from 'rxjs';
import { propertyDetrails } from '../store/reducers';

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
  property$: Observable<Property[]>;

  ownersForProperty: any[] ;

  ngOnInit() {
    // debugger;
    // return this.store.dispatch(getPropertyDetails(this.propertyId))
    this.GetPropertyDetails(this.id);
    this.detailsForm = this.formBuilder.group({
      propertyName: ['']
    })
  }

  GetPropertyDetails(id: any) {
    debugger;
    this.store.dispatch(getPropertyDetails({payload: id}));
    // this.property$ = 
    this.store.pipe(select(propertyDetrails))
    .subscribe(property => {
      console.log(property);
    });    
  }

  submit() {

  }

  goBack() {

  }

}

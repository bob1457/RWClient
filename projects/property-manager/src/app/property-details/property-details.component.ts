import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { getPropertyDetails } from '../store/actions/property.actions';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private store: Store<PropertyState>) { }

  propertyId: any = 1;

  ngOnInit() {
    // debugger;
    // return this.store.dispatch(getPropertyDetails(this.propertyId))
  }

}

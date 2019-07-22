import { PropertyState } from './../store/property.state';
import { PropertyService } from '@lib/app-core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPropertyDetails } from '../store/actions/property.actions';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  propertyId: any = 1;

  constructor(private store: Store<PropertyState>) { }

  ngOnInit() {
  }

  GetPropertyDetails(id: any) {
    debugger;
    return this.store.dispatch(getPropertyDetails({payload: id}));
  }

}

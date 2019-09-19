import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropertyListingState } from '../store/marketing.state';
import { getPropertyListing, getPropertyListingDetails } from '../store/actions/marketing.actions';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss']
})
export class PropertyListingComponent implements OnInit {

  constructor(private store: Store<PropertyListingState>) { }

  ngOnInit() {
    debugger;
    // return this.propertyService.getPropertyList().subscribe((pList: Property[]) => {this.list = pList; console.log(pList)});
    return this.store.dispatch(getPropertyListing())  ;
  }

  GetPropertyListingDetails(id: number) {
    debugger;
    return this.store.dispatch(getPropertyListingDetails({payload: id}));
  }

}

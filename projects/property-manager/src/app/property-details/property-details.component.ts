import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { getPropertyDetails } from '../store/actions/property.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private store: Store<PropertyState>,
              private actRoute: ActivatedRoute) { 
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
              }

  propertyId: any = 1;
  id: number;

  ownersForProperty: any[] ;

  ngOnInit() {
    // debugger;
    // return this.store.dispatch(getPropertyDetails(this.propertyId))
  }

}

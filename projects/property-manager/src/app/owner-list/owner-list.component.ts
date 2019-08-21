import { PropertyService, PropertyOwner } from '@lib/app-core';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { getPropertyOwnerList, getPropertyOwnerDetails, addPropertyOwner } from '../store/actions/property.actions';
import {ownerList } from '../store/reducers/property.reducer';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  constructor(
    private propertyService: PropertyService,
    private store: Store<PropertyState>) { }

  list: PropertyOwner[];

  ngOnInit() {
    debugger;
    return this.store.dispatch(getPropertyOwnerList());
  }

  getOwnerList() {
    debugger;
    // return this.propertyService.getPropertyOwnerList()
    // .subscribe((oList: PropertyOwner[]) => {this.list = oList; console.log(this.list); });

    return this.store.pipe(select(ownerList)).subscribe(olist => {this.list = olist; console.log(this.list); });
  }

  getOwnerDetails(id: number) {
    debugger;
    return this.store.dispatch(getPropertyOwnerDetails({payload: id}));
  }

  addOwner() { // owner: PropertyOwner
    const owner: PropertyOwner = {
      propertyOwnerId: 0,
      propertyId: 1004,
      userName: 'NotSet',
      firstName: 'Janny',
      lastName: 'Lu',
      contactEmail: 'jannylu@gmail.com',
      contactTelephone1: '604-976-1235',
      contactTelephone2: '',
      onlineAccessEnbaled: false,
      userAvartaImgUrl: '',
      isActive: true,
      roleId: 2,
      notes: 'New ower added',
      streetNumber: '234 Main Street',
      city: 'Vancouver',
      stateProv: 'BC',
      zipPostCode: 'V3V 2V2',
      country: 'Canada'
    };

    debugger;

    return this.store.dispatch(addPropertyOwner({payload: owner}));
  }

}

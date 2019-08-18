import { PropertyService, PropertyOwner } from '@lib/app-core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { getPropertyOwnerList } from '../store/actions/property.actions';

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
    return this.propertyService.getPropertyOwnerList().subscribe((oList: PropertyOwner[]) => {this.list = oList; console.log(this.list); });
  }

}

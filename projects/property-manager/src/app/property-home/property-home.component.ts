import { PropertyState } from './../store/property.state';
import { Subscription } from 'rxjs';
import { PropertyService, Property } from '@lib/app-core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPropertyList } from '../store/actions/property.actions';

@Component({
  selector: 'app-property-home',
  templateUrl: './property-home.component.html',
  styleUrls: ['./property-home.component.scss']
})
export class PropertyHomeComponent implements OnInit {

  constructor(private propertyService: PropertyService,
              private store: Store<PropertyState>) { }

  list: Property[];

  ngOnInit() {
    debugger;
    // return this.propertyService.getPropertyList().subscribe((pList: Property[]) => {this.list = pList; console.log(pList)});
    return this.store.dispatch(getPropertyList())  ;
    // propertyService.getPropertyList().subscribe((pList: Property[]) => {this.list = pList; console.log(pList)});
  }

  getPropertyList() {
    debugger;
    return this.propertyService.getPropertyList().subscribe((pList: Property[]) => {this.list = pList; });
  }

}

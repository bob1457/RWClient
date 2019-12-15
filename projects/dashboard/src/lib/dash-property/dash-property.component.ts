
// import { propertyList } from './../../../../property-manager/src/app/store/reducers/property.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DashState } from '../store/dash.state';
import { getPropertyList, getContractList } from '../store/dash.actions';
import { Property } from '../models/property.model';
import { PropertyList } from '../store/dash.reducer';

@Component({
  selector: 'lib-dash-property',
  templateUrl: './dash-property.component.html',
  styleUrls: ['./dash-property.component.css']
})
export class DashPropertyComponent implements OnInit {

  breakpoint: number;

  $propertyList: Observable<Property[]>;  //Property[];

  constructor(private store: Store<DashState>) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 640) ? 2 : 1;
    debugger;
    // this.store.dispatch(getPropertyList()) ;
    this.store.dispatch(getContractList());
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 640) ? 2 : 1;
  }

  getPropertyList() {
    this.$propertyList = this.store.select(PropertyList);
    // this.store.pipe(select(getPropertyList)).subscribe((pList:Property[]) => {
    //   this.propertyList = pList;
    // });
  }

  getContractList() {

  }

}

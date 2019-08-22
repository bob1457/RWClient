import { PropertyState } from './../store/property.state';
import { Component, OnInit } from '@angular/core';
import { getContractList } from '../store/actions/property.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  constructor(private store: Store<PropertyState>) { }

  ngOnInit() {
    debugger;
    return this.store.dispatch(getContractList());
  }

  getContractList() {

  }

}

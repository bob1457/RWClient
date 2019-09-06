import { ManagementContract } from '@lib/app-core';
import { ManagementContractService } from './../../../../app-core/src/lib/property/services/management-contract.service';
import { PropertyState } from './../store/property.state';
import { Component, OnInit } from '@angular/core';
import { getContractList, getContractDetails, addManagementContract, updateContract } from '../store/actions/property.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  constructor(private store: Store<PropertyState>,
              private contractService: ManagementContractService) { }

  ngOnInit() {
    debugger;
    return this.store.dispatch(getContractList());
  }

  getContractList() {

  }

  getContractDetails(id: number) {
    this.store.dispatch(getContractDetails({payload: id}));
  }

  addContract() {
    const contract: ManagementContract = {
      id: 0,
      ManagementContractTitle: 'New contract',
      StartDate: '2019-08-01T19:50:09.124Z',
      EndDate: '2020-08-31T19:50:09.124Z',
      PlacementFeeScale: '199%',
      ManagementFeeScale: '10%',
      ContractSignDate: '2019-08-23T19:50:09.124Z',
      PropertyId: 1,
      ManagementContractDocUrl: '',
      ManagementContractType: 1,
      IsActive: true,
      Notes: 'just a new management contract'
    };

    debugger;

    return this.store.dispatch(addManagementContract({payload: contract}));
  }

  updateContract() {
    const contract: any = {
      id: 1,
      ManagementContractTitle: 'Newly Updated contract',
      StartDate: '2019-09-15T19:50:09.124Z',
      EndDate: '2020-10-15T19:50:09.124Z',
      PlacementFeeScale: '100%',
      ManagementFeeScale: '10%',
      // ContractSignDate: '2019-08-23T19:50:09.124Z',
      // PropertyId: 1,
      // ManagementContractDocUrl: '',
      // ManagementContractType: 1,
      // IsActive: true,
      Notes: 'just a updated management contract'
    };

    debugger;

    return this.store.dispatch(updateContract({payload: contract}));

  }

}

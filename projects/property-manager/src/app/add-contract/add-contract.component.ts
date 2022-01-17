import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Property } from '@lib/app-core';
import { PropertyState } from '../store/property.state';
import { Store, select } from '@ngrx/store';
import { propertyList } from '../store/reducers';
import { Location } from '@angular/common';
import { addManagementContract } from '../store/actions/property.actions';

import * as ContractClause from '../content-templates/contract-clause.json';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {

  contractClauseText: any = (ContractClause as any).default;

  addForm: FormGroup;
  loadTemp = false;

  properties: Property[];
  // properties: any = [
  //   { id: '1', propertyName: '621 Coquitlam'},
  //   { id: '2', propertyName: '1307 Surrey'}
  // ];
  edit = false;

  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private store: Store<PropertyState>) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      managementContractTitle: ['', Validators.required],
      managementContractType: ['New'],
      startDate: [''],
      endDate: [''],
      propertyId: [],
      placementFeeScale: [''],
      managementFeeScale: [''],
      solicitingOnly: [false],
      signDate: [''],
      notes: [''],
      contract: ['']
    });

    this.store.pipe(select(propertyList))
    .subscribe(data => this.properties = data);
  }

  onChange(id) {
    console.log(id);
    this.addForm.get('propertyId').setValue(id);
    console.log(this.addForm.get('propertyId').value);

    // this.store.pipe(select(propertyList))
    //     .subscribe(res => {
    //       const property = this.properties.filter( p => p.id === id);
    //     });
  }

  EditContent() {

    this.edit = !this.edit;
  }

  submit() { // Add validation here...for all fields if anyformValue
    debugger;
    console.log(this.addForm.value);

    this.store.dispatch(addManagementContract({payload: this.addForm.value}));
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

  loadTemplate(event) {
    console.log('load template', event.checked);
    this.loadTemp = event.checked;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Property } from '@lib/app-core';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {

  addForm: FormGroup;

  // properties: Property[];
  properties: any = [
    { value: '1', viewValue: '621 Coquitlam'},
    { value: '2', viewValue: '1307 Surrey'}
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      managementContractTitle: ['', Validators.required],
      managementContractType: ['New'],
      startDate: [''],
      endDate: [''],
      placementFeeScale: [''],
      managementFeeScale: [''],
      signDate: [''],
      notes: ['']


    });
  }

}

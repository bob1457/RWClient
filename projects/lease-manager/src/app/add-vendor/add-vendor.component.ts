import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addVendor } from '../store/actions/lease.actions';
import { PropertyLeaseState } from '../store/lease-state';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private store: Store<PropertyLeaseState>) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      vendorBusinessName: [''],
      firstName: [''],
      lastName: [''],
      vendorDesc: [''],
      vendorSpecialty: [''],
      vendorContactTelephone1: [''],
      vendorContactOthers: [''],
      vendorContactEmail: [''],
      isActive: [true],
      userName: ['NotSet'],
      roleId: [3],
      onlineAccessEnbaled: [false],
      userAvartaImgUrl: ['']
    });
  }


  submit() {
    debugger;

    console.log('vensor form', this.addForm.value);
    this.store.dispatch(addVendor({payload: this.addForm.value}));
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

}

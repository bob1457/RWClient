import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { addVendor } from '../store/actions/lease.actions';
import { PropertyLeaseState } from '../store/lease-state';
import { Location } from '@angular/common';
import { getUserInfo } from '@lib/auth';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  addForm: FormGroup;
  currentUser;

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
      userAvartaImgUrl: [''],
      createdBy: [''],
      updatedBy: ['']
    });

    this.store.pipe(select(getUserInfo))
    .subscribe(user => {
      if (!user) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
      } else {
        this.currentUser = user;
      }
        console.log('current user', this.currentUser);
      });

      this.addForm.get('createdBy').setValue(this.currentUser.username);
      this.addForm.get('updatedBy').setValue(this.currentUser.username);
  }


  submit() {
    debugger;

    console.log('vendor form', this.addForm.value);
    this.store.dispatch(addVendor({payload: this.addForm.value}));
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

}

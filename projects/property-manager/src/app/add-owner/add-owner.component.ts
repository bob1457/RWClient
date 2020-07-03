import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PropertyState } from '../store/property.state';
import { Store, select } from '@ngrx/store';
import { Property, PropertyOwner } from '@lib/app-core';
import { propertyList, ownerList } from '../store/reducers';
import { Location } from '@angular/common';
import * as PropertyActions from '../store/actions/property.actions';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.scss']
})
export class AddOwnerComponent implements OnInit {

  addForm: FormGroup;

  ownerOption = 'existing';
  owners: PropertyOwner[];
  ownerAddress: any = {
    street: '',
    city: '',
    provState: '',
    postZipCoe: '',
    country: ''
  };

  properties: Property[];
  // properties: any = [
  //   { id: '1', propertyName: '621 Coquitlam'},
  //   { id: '2', propertyName: '1307 Surrey'}
  // ];
  address: any = {
    street: '',
    city: '',
    provState: '',
    postZipCoe: '',
    country: ''
  };

  selected = false;
  sameAddress = false;


  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private store: Store<PropertyState>) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      firstName: [],
      lastName: [],
      contactEmail: [],
      contactTelephone1: [],
      contactTelephone2: [],
      isActive: [true],
      onlineAccessEnabled: [false],
      roleId: [2],
      userName: ['NotSet'],
      propertyId: [],
      propertyOwnerId: [0],

      ownerOption: [],
      isSameAddress: [],
      notes: [],

      streetNumber: [],
      city: [],
      stateProv: [],
      zipPostCode : [],
      country : []


    });

    this.store.pipe(select(propertyList))
        .subscribe(data => this.properties = data);

    this.store.pipe(select(ownerList))
        .subscribe(data => {
          this.owners = data;
          console.log(this.owners);
        });
  }

  onChange(id) { // select property
    this.selected = true;
    console.log(id);
    this.addForm.get('propertyId').setValue(id);
    console.log(this.addForm.get('propertyId').value);

// debugger;

    this.store.pipe(select(propertyList))
        .subscribe(res => {
          const property = this.properties.find(p => p.id === id);
          this.address.street = property.propertyNumber + ' ' + property.propertyStreet;
          this.address.city = property.propertyCity;
          this.address.provState = property.propertyStateProvince;
          this.address.postZipCode = property.propertyZipPostCode;
          this.address.country = property.propertyCountry;


          console.log(this.address);
        });
  }

  onOwnerChange(id) { // select existing owner
    debugger;
    this.store.pipe(select(ownerList))
    .subscribe(res => {
      const owner = this.owners.find(o => o.id === id); // const owner: any = this.owners.find(o => o.id === id);
      this.addForm.get('propertyOwnerId').setValue(owner.id);
      this.addForm.get('firstName').setValue(owner.firstName);
      this.addForm.get('lastName').setValue(owner.lastName);
      this.addForm.get('contactEmail').setValue(owner.contactEmail);
      this.addForm.get('contactTelephone1').setValue(owner.contactTelephone1);
      // this.ownerAddress.street = owner.streetNumber;
      // this.ownerAddress.city = owner.city;
      // this.ownerAddress.provState = owner.stateProv;
      // this.ownerAddress.postZipCode = owner.zipPostCode;
      // this.ownerAddress.country = owner.country;

    });
  }

  statusChange(e) {
    console.log(e.checked);
    this.sameAddress = e.checked;
  }

  submit() { // Add validation here...for all fields if anyformValue
    debugger;
    console.log(this.addForm.value);
    if(this.addForm.get('ownerOption').value === 'new') { // may not be necessary, they are initilized in form group
      this.addForm.get('isActive').setValue(true);
      this.addForm.get('onlineAccessEnabled').setValue(false);
      this.addForm.get('userName').setValue('NotSet');
      this.addForm.get('roleId').setValue(2);
    }
    // console.log(formValue);
    this.store.dispatch(PropertyActions.addPropertyOwner({payload: this.addForm.value}));

    this.location.back();
  }

}

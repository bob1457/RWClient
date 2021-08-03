import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PropertyState } from '../store/property.state';
import { Store, select } from '@ngrx/store';
import { Property, PropertyOwner, PropertyService } from '@lib/app-core';
import { propertyList, ownerList } from '../store/reducers';
import { Location } from '@angular/common';
import * as PropertyActions from '../store/actions/property.actions';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

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

  emailExists = false;

  loading = false;

  constructor(private formBuilder: FormBuilder,
              private propertyService: PropertyService,
              private location: Location,
              private snackBar: MatSnackBar,
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
      // this.addForm.get('firstName').setValue(owner.firstName);
      // this.addForm.get('lastName').setValue(owner.lastName);
      // this.addForm.get('contactEmail').setValue(owner.contactEmail);
      // this.addForm.get('contactTelephone1').setValue(owner.contactTelephone1);
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

      this.propertyService.checUserkEmail(this.addForm.controls['contactEmail'].value)
          .subscribe(res => {
            let emailexists;
            emailexists = res;
            console.log('email check result', emailexists);

            if (emailexists) {
              // alert(this.addForm.controls['contactEmail'].value + ' already exists!');
              this.openSnackBar(this.addForm.controls['contactEmail'].value + ' already exists!', 'dismiss', 'error');
            } else {
              this.store.dispatch(PropertyActions.addPropertyOwner({payload: this.addForm.value})); // disabled for testing
              // alert('ok, go ahead to create owner');
              this.location.back();
            }

          });

    } else {
      // call service directly to add existing owenr
      try{
        debugger;

        this.loading = true;

        this.propertyService.addOwner(this.addForm.value)
              .subscribe((owner) => {
                this.loading = false;
                console.log('owner added', owner);
              });
        // console.log('add owner form', this.addForm.value);
        this.openSnackBar('Owner added successfully!', 'close', 'notify');
        this.location.back();
      } catch(err) {
        this.openSnackBar(err.message, 'dismiss', 'error');
      }
    }
    // console.log(formValue);


    // Check if the email already exists

    // this.propertyService.checUserkEmail(this.addForm.controls['contactEmail'].value)
    // .subscribe(res => {
    //   let emailexists;
    //   emailexists = res;
    //   console.log('email check result', emailexists);

    //   if (emailexists) {
    //     // alert(this.addForm.controls['contactEmail'].value + ' already exists!');
    //     this.openSnackBar(this.addForm.controls['contactEmail'].value + ' already exists!', 'dismiss', 'error');
    //   } else {
    //     this.store.dispatch(PropertyActions.addPropertyOwner({payload: this.addForm.value})); // disabled for testing
    //     // alert('ok, go ahead to create owner');
    //     this.location.back();
    //   }

    // });

  }

  cancel() {
    this.location.back();
  }

  // uerEmailExists(email) {

  //   console.log('incoming email', email);

  //   return this.propertyService.checUserkEmail(email)
  //   .subscribe(res => {
  //     this.emailExists = res;
  //     console.log('email check result', this.emailExists);
  //   });
  // }

  openSnackBar(message: string, action: string, type: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = [type];
    config.duration = 3000;
    this.snackBar.open(message, action, config);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyOwnerService, PropertyOwner } from '@lib/app-core';
import * as fromAuth from '@lib/auth';
import { Store, select } from '@ngrx/store';
import { getUserInfo } from '@lib/auth';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  addForm: FormGroup;

  types: any[] = [
    {value: '1', viewValue: 'New'},
    {value: '2', viewValue: 'Renewal'}
  ];
  // private ownerService: PropertyOwnerService
  constructor(private formBuilder: FormBuilder, private store: Store<fromAuth.AuthState>) { }

  owners: PropertyOwner[];
  currentUser;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      // propertyName: ['', Validators.required],
      // startDate: ['', Validators.required],
      // type: ['New']
      // propertyId: ['', Validators.required],

      propertyName: ['', Validators.required],
      propertyDesc: [''],
      propertyType1: ['', Validators.required],

      propertyLogoImgUrl: [''],
      propertyVideoUrl: [''],
      propertyBuildYear: [''],
      // isActive: [''],
      isShared: [''],
      status: [''],
      isBasementSuite: [false],

      propertySuiteNumber: [''],
      propertyNumber: ['', Validators.required],
      propertyStreet: ['', Validators.required],
      propertyCity: ['', Validators.required],
      propertyStateProvince: ['', Validators.required],
      propertyCountry: ['', Validators.required],
      propertyZipPostCode: ['', Validators.required],
      gpslongitudeValue: [''],
      gpslatitudeValue: [''],

      stove: [''],
      refrigerator: [''],
      dishwasher: [''],
      airConditioner: [''],
      laundry: [''],
      blindsCurtain: [''],
      furniture: [''],
      tvinternet: [''],
      commonFacility: [''],
      securitySystem: [''],
      utilityIncluded: [''],
      fireAlarmSystem: [''],
      others: [''],
      facilityNotes: [''],

      numberOfBedrooms: ['', Validators.required],
      numberOfBathrooms: ['', Validators.required],
      numberOfLayers: ['', Validators.required],
      numberOfParking: ['', Validators.required],
      basementAvailable: ['', Validators.required],
      totalLivingArea: ['', Validators.required],
      featureNotes: [''],

      propertyOwnerId: [0],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      contactTelephone1: ['', Validators.required],

      ownerStreetNumber: [''],
      ownerCity: [''],
      ownerStateProv: [''],
      ownerZipPostCode: [''],
      ownerCountry: [''],
      isSameAddress: [false],
      notes: [],

      propertyManagerUserName: [],

      ownerOption: []
    });

    // this.ownerService.getPropertyOwnerList()
    // .subscribe( owners => {
    //   this.owners = owners;
    //   console.log(this.owners);
    // });
debugger;
    this.store.pipe(select(getUserInfo))
    .subscribe(user => this.currentUser = user);

    this.addForm.get('propertyManagerUserName').setValue(this.currentUser.username);
  }

}

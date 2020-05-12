import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyOwnerService, PropertyOwner } from '@lib/app-core';

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

  constructor(private formBuilder: FormBuilder, private ownerService: PropertyOwnerService) { }

  owners: PropertyOwner[];

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

      ownerOption: []
    });

    // this.ownerService.getPropertyOwnerList()
    // .subscribe( owners => {
    //   this.owners = owners;
    //   console.log(this.owners);
    // });
  }

}

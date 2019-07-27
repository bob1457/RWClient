import { PropertyState } from './../store/property.state';
import { PropertyService } from '@lib/app-core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPropertyDetails, addProperty } from '../store/actions/property.actions';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  // test data

  property: any = [
    {
    //   propertyName: 'PNE Old Timer 3',
    //   propertyDesc: 'Single two layer family home in PNE area3',
    //   Type: 'Apartment',
    //   strataCouncilId: 0,
    //   propertyManagerUserName: 'bob',
    //   propertyLogoImgUrl: '',
    //   propertyVideoUrl: '',
    //   propertyBuildYear: 1909,
    //   isActive: true,
    //   isShared: true,
    //   furnishingId: null,
    //   Status: 'Rented',
    //   isBasementSuite: true,
    //   propertyOwnerId: 2,
    //   ownerStreetNumber: '15686 107 Avenue',
    //   ownerCity: 'Surrey',
    // ownerSateProv: "BC",
    // ownerZipPostCode: 'V4N 3H8',
    // ownerCountry: 'Canada',
    // isSameAddress: false,

    //   propertySuiteNumber: '',
    //   propertyNumber: 124563,
    //   propertyStreet: 'Oxford Street',
    //   propertyCity: 'Vancouver',
    //   propertyStateProvince: 'BC',
    //   propertyCountry: 'Canada',
    //   propertyZipPostCode: 'V4N 3J2',

    //   stove: true,
    //   refrigerator: true,
    //   dishwasher: false,
    //   airConditioner: false,
    //   laundry: true,
    //   blindsCurtain: true,
    //   furniture: false,
    //   tvinternet: false,
    //   commonFacility: false,
    //   securitySystem: true,
    //   utilityIncluded: false,
    //   fireAlarmSystem: true,
    //   others: null,
    //   facilityNotes: 'N/A',

    //   numberOfBedrooms: 4,
    //   numberOfBathrooms: 2,
    //   numberOfLayers: 2,
    //   numberOfParking: 2,
    //   basementAvailable: false,
    //   totalLivingArea: 2450,

    //   featureNotes: 'N/A',
    //     userName: 'notset',
    //   firstName: 'Edward',
    //   lastName: 'Yuan',
    //   contactEmail: 'edy2021@gmail.com',
    //   contactTelephone1: '613-547-7878',
    //   contactTelephone2: '',
    //   onlineAccessEnbaled: false,
    //   userAvartaImgUrl: '',

    //   roleId: 2,
    //   notes: 'added with client app'
    "propertyName": "PNE Old Timer 3",
    "propertyDesc": "Single two layer family home in PNE area3",
    "Type": "Apartment",
    "strataCouncilId": 0,
    "propertyManagerUserName": "bob",
    "propertyLogoImgUrl": "",
    "propertyVideoUrl": "",
    "propertyBuildYear": 1909,
    "isActive": true,
    "isShared": true,
    "furnishingId": null,
    "Status": "Rented",
    "isBasementSuite": true,
    "propertyOwnerId": 2,
    "ownerStreetNumber": "15686 107 Avenue",
    "ownerCity": "Surrey",
	"ownerSateProv": "BC",
	"ownerZipPostCode": "V4N 3H8",
	"ownerCountry": "Canada",
	"isSameAddress": false,

    "propertySuiteNumber": "",
    "propertyNumber": "124563",
    "propertyStreet": "Oxford Street",
    "propertyCity": "Vancouver",
    "propertyStateProvince": "BC",
    "propertyCountry": "Canada",
    "propertyZipPostCode": "V4N 3J2",

    "stove": true,
    "refrigerator": true,
    "dishwasher": false,
    "airConditioner": false,
    "laundry": true,
    "blindsCurtain": true,
    "furniture": false,
    "tvinternet": false,
    "commonFacility": false,
    "securitySystem": true,
    "utilityIncluded": false,
    "fireAlarmSystem": true,
    "others": null,
    "facilityNotes": "N/A",

    "numberOfBedrooms": 4,
    "numberOfBathrooms": 2,
    "numberOfLayers": 2,
    "numberOfParking": 2,
    "basementAvailable": false,
    "totalLivingArea": 2450,

    "featureNotes": "N/A",

    "userName": "notset",
    "firstName": "Edward",
    "lastName": "Yuan",
    "contactEmail": "edy2021@gmail.com",
    "contactTelephone1": "613-547-7878",
    "contactTelephone2": "",
    "onlineAccessEnbaled": false,
    "userAvartaImgUrl": "",

    "roleId": 2,
    "notes": ""
    }
  ];


  propertyId: any = 1;

  constructor(private store: Store<PropertyState>) { }

  ngOnInit() {
  }

  GetPropertyDetails(id: any) {
    debugger;
    return this.store.dispatch(getPropertyDetails({payload: id}));
  }

  AddProperty() {
    debugger;
    return this.store.dispatch(addProperty(this.property));
  }







}

import { PropertyState } from './../store/property.state';
import { Property } from '@lib/app-core';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPropertyDetails, addProperty } from '../store/actions/property.actions';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  baseUrl = 'http://localhost:21799';

  propertyId: any = 1;

  constructor(private store: Store<PropertyState>
              ) { }

  ngOnInit() {
  }

  GetPropertyDetails(id: any) {
    debugger;
    return this.store.dispatch(getPropertyDetails({payload: id}));
  }

  AddProperty() {

  const property: Property = {
    propertyName: 'Real Property',
    propertyDesc: 'string',
    type: 0,
    propertyManagerUserName: 'string',
    propertyLogoImgUrl: 'string',
    propertyVideoUrl: 'string',
    propertyBuildYear: 0,
    isActive: true,
    isShared: true,
    status: 0,
    isBasementSuite: true,
    createdDate: '2019-07-27T19:37:57.799Z',
    updateDate: '2019-07-27T19:37:57.799Z',
    propertyAddressId: 0,
    propertyFeatureId: 0,
    propertyFacilityId: 0,
    propertyOwnerId: 0,
    propertySuiteNumber: 'string',
    propertyNumber: 'string',
    propertyStreet: 'string',
    propertyCity: 'string',
    propertyStateProvince: 'string',
    propertyCountry: 'string',
    propertyZipPostCode: 'string',
    gpslongitudeValue: 'string',
    gpslatitudeValue: 'string',
    stove: true,
    refrigerator: true,
    dishwasher: true,
    airConditioner: true,
    laundry: true,
    blindsCurtain: true,
    furniture: true,
    tvinternet: true,
    commonFacility: true,
    securitySystem: true,
    utilityIncluded: true,
    fireAlarmSystem: true,
    others: 'string',
    facilityNotes: 'string',
    numberOfBedrooms: 0,
    numberOfBathrooms: 0,
    numberOfLayers: 0,
    numberOfParking: 0,
    basementAvailable: true,
    totalLivingArea: 0,
    featureNotes: 'string',
    userName: 'string',
    firstName: 'string',
    lastName: 'string',
    contactEmail: 'string',
    contactTelephone1: 'string',
    contactTelephone2: 'string',
    onlineAccessEnbaled: true,
    userAvartaImgUrl: 'string',
    roleId: 0,
    notes: 'string',
    ownerStreetNumber: 'string',
    ownerCity: 'string',
    ownerStateProv: 'string',
    ownerZipPostCode: 'string',
    ownerCountry: 'string',
    isSameAddress: true // ,
    // ownerAddress: {},
    // propertyAddress: {},
    // propertyFacility: {
    //   stove: true,
    //   refrigerator: true,
    //   dishwasher: true,
    //   airConditioner: true,
    //   laundry: true,
    //   blindsCurtain: true,
    //   furniture: true,
    //   tvinternet: true,
    //   commonFacility: true,
    //   securitySystem: true,
    //   utilityIncluded: true,
    //   fireAlarmSystem: true,
    //   others: 'string',
    //   notes: 'string'
    // },
    // propertyFeature: {
    //   numberOfBedrooms: 0,
    //   numberOfBathrooms: 0,
    //   numberOfLayers: 0,
    //   numberOfParking: 0,
    //   basementAvailable: true,
    //   totalLivingArea: 0,
    //   isShared: true,
    //   notes: 'string'
    // }
  };

  debugger;
  return this.store.dispatch(addProperty({payload: property}));

}







}

import { PropertyOwner } from './property-owner.model';
import { ManagementContract } from './management-contract.model';

export interface Property {
    id: number;
    propertyName: string;
    propertyDesc: string;
    type: string;
    strataCouncilId: number;
    propertyManagerUserName: string;
    propertyLogoImgUrl: string;
    propertyVideoUrl: string;
    propertyBuildYear: number;
    isActive: boolean;
    isShared: boolean;
    status: number;
    isBasementSuite: boolean;
    // createdDate: string;
    // updateDate: string;
    propertyAddressId: number;
    propertyFeatureId: number;
    propertyFacilityId: number;
    propertyOwnerId: number;
    propertySuiteNumber: string;
    propertyNumber: string;
    propertyStreet: string;
    propertyCity: string;
    propertyStateProvince: string;
    propertyCountry: string;
    propertyZipPostCode: string;
    gpslongitudeValue: string;
    gpslatitudeValue: string;
    stove: boolean;
    refrigerator: boolean;
    dishwasher: boolean;
    airConditioner: boolean;
    laundry: boolean;
    blindsCurtain: boolean;
    furniture: boolean;
    tvinternet: boolean;
    commonFacility: boolean;
    securitySystem: boolean;
    utilityIncluded: boolean;
    fireAlarmSystem: boolean;
    others: string;
    facilityNotes: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    numberOfLayers: number;
    numberOfParking: number;
    basementAvailable: boolean;
    totalLivingArea: number;
    featureNotes: string;
    userName: string;
    firstName: string;
    lastName: string;
    contactEmail: string;
    contactTelephone1: string;
    contactTelephone2: string;
    onlineAccessEnbaled: boolean;
    userAvartaImgUrl: string;
    roleId: number;
    notes: string;
    ownerStreetNumber: string;
    ownerCity: string;
    ownerStateProv: string;
    ownerZipPostCode: string;
    ownerCountry: string;
    isSameAddress: boolean;
    ownerList: PropertyOwner[];
    contractList: ManagementContract[];
}

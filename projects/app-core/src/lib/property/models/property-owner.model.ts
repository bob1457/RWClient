export interface PropertyOwner {
  id: number;
  propertyOwnerId: number;
  propertyId: number;
  userName: string;
  firstName: string;
  lastName: string;
  contactEmail: string;
  contactTelephone1: string;
  contactTelephone2: string;
  onlineAccessEnabled: false,
  userAvartaImgUrl: string;
  isActive: boolean;
  roleId: number;
  notes: string;
  address : {
    streetNumber: string;
    city: string;
    stateProvince: string;
    zipPostCode: string;
    country: string;
  }
}

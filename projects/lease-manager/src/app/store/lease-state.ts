import { PropertyLease, PropertyTenant, Vendor } from '@lib/app-core';


export interface PropertyLeaseState {
  loading: boolean | false;
  loaded: boolean | false;
  leases: PropertyLease[] | null;
  tenants: PropertyTenant[] | null;
  // owners: PropertyOwner[] | null;
  // ownersOfProperty: PropertyOwner[] | null;
  selectedLease: PropertyLease | null;
  selectedTenant: PropertyTenant | null;
  workorders: Worker[] | null;
  selectedworkorder: Worker | null;
  vendors: Vendor[] | null;
  selectedvendor: Vendor | null;
  // contracts: ManagementContract[] | null;
  // contractsForProperty: ManagementContract[] | null;
  // selectedContract: ManagementContract | null;
  errorMessage: string | null;
}

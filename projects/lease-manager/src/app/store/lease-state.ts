import { PropertyLease, PropertyTenant, Vendor, WorkOrder, ServiceRequest } from '@lib/app-core';



export interface PropertyLeaseState {
  loading: boolean | false;
  loaded: boolean | false;
  leases: PropertyLease[] | null;
  tenants: PropertyTenant[] | null;
  // owners: PropertyOwner[] | null;
  // ownersOfProperty: PropertyOwner[] | null;
  selectedLease: PropertyLease | null;
  selectedTenant: PropertyTenant | null;
  workorders: WorkOrder[] | null;
  selectedworkorder: WorkOrder | null;
  vendors: Vendor[] | null;
  selectedvendor: Vendor | null;
  servierequests: ServiceRequest[] | null;
  selectedrequest: ServiceRequest | null;
  rentPayments: any[];
  selectedPayment: any;
  invoiceList: any[];
  noticeList: any[];
  notice: any | null;
  addendumList: any[];
  addendum: any;
  // contracts: ManagementContract[] | null;
  // contractsForProperty: ManagementContract[] | null;
  // selectedContract: ManagementContract | null;
  errorMessage: string | null;
}

import { DashState } from './store/dash.state';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Property } from './models/property.model';
import { Store, select } from '@ngrx/store';
import { PropertyList, ContractList, TenantList, RentalList, OwnerList, MarketingList, RentalAppList, OpenHouseList, RentPaymentHistory, VendorList, WorkOrderList, ServiceRequestList, InvoiceList } from './store/dash.reducer';
// tslint:disable-next-line:max-line-length
import { getPropertyList, getAllLeases, getAllTenants, getContractList, getPropertyOwnerList, getRentalApplicationList, getPropertyImageList, getOpenHouseList, getRentPaymentList, getAllVendors, getAllWorkOrders, getAllServiceRequests, getAllInvoices } from './store/dash.actions';
import { PropertyService, ManagementContract, PropertyTenant, PropertyLease, RentalApplication } from '@lib/app-core';
import { PropertyOwner } from './models/property-owner.model';
import { PropertyListing } from './models/property-listing.model';
import { OpenHouse } from './models/openhouse.model';

// import { vendorList } from 'projects/lease-manager/src/app/store/reducers';


@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  breakpoint: number;
  bp: number;
  bp2: number;
  bp1: number;

  $propertyList: Observable<Property[]>;
  contractList$: Observable<ManagementContract[]>;
  tenantList$: Observable<PropertyTenant[]>;
  rentalList$: Observable<PropertyLease[]>;
  ownerList$: Observable<PropertyOwner[]>;
  marketingList$: Observable<PropertyListing[]>;
  rentalAppList$: Observable<RentalApplication[]>;
  openHouseList$: Observable<OpenHouse[]>;
  rentPaymentList$: Observable<any>;
  vendorList$: Observable<any[]>;
  workOrderList$: Observable<any[]>;
  serviceRequestList$: Observable<any[]>;
  invoiceList$: Observable<any[]>;

  loading: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
              private store: Store<DashState>,
              private propertyService: PropertyService) {
                this.$propertyList = this.store.select(PropertyList);
                this.contractList$ = this.store.select(ContractList);
                this.tenantList$ = this.store.select(TenantList);
                this.rentalList$ = this.store.select(RentalList);
                this.ownerList$ = this.store.select(OwnerList);
                this.marketingList$ = this.store.select(MarketingList);
                this.rentalAppList$ = this.store.select(RentalAppList);
                this.openHouseList$ = this.store.select(OpenHouseList);
                this.rentPaymentList$ = this.store.select(RentPaymentHistory);
                this.vendorList$ = this.store.select(VendorList);
                this.workOrderList$ = this.store.select(WorkOrderList);
                this.serviceRequestList$ = this.store.select(ServiceRequestList);
                this.invoiceList$ = this.store.select(InvoiceList);
              }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 640) ? 4 : 1;
    this.bp = (window.innerWidth <= 640) ? 4 : 2;
    this.bp2 = (window.innerWidth <= 640) ? 4 : 3;
    this.bp1 = (window.innerWidth <= 640) ? 2 : 1;

    this.store.dispatch(getPropertyList()) ;
    this.store.dispatch(getAllLeases());
    this.store.dispatch(getAllTenants());
    this.store.dispatch(getContractList());
    this.store.dispatch(getPropertyOwnerList());
    this.store.dispatch(getRentalApplicationList());

    this.store.dispatch(getPropertyImageList());

    this.store.dispatch(getOpenHouseList());
    this.store.dispatch(getRentPaymentList());

    this.store.dispatch(getAllVendors());
    this.store.dispatch(getAllWorkOrders());
    this.store.dispatch(getAllServiceRequests());
    this.store.dispatch(getAllInvoices());
    // this.getAllPropertyList();
  }

  onResize(event) {
    this.breakpoint = (window.innerWidth <= 640) ? 4 : 1;
    this.bp = (window.innerWidth <= 640) ? 4 : 2;
    this.bp2 = (window.innerWidth <= 640) ? 4 : 3;
    this.bp1 = (window.innerWidth <= 640) ? 2 : 1;
  }

  getAllPropertyList() {
    debugger;
    this.$propertyList = this.store.select(PropertyList);
    this.contractList$ = this.store.select(ContractList);
    this.tenantList$ = this.store.select(TenantList);
    this.rentalList$ = this.store.select(RentalList);
    this.ownerList$ = this.store.select(OwnerList);
    this.marketingList$ = this.store.select(MarketingList);
    this.rentalAppList$ = this.store.select(RentalAppList);


    // this.store.pipe(select(PropertyList)).subscribe((pList: Property[]) => {
    //   this.list = pList;
    //   console.log(pList);
    // });
    // this.propertyService.getPropertyList().subscribe((properties:Property[]) => {
    //   this.list = properties;
    //   console.log('All properties: ' + this.list);
    // });

  }

}

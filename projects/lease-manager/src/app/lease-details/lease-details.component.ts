import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaseService, PropertyLease } from '@lib/app-core';
import { addRentPayment, addTenant, addWorkOrder, getLeaseDetails, getRentPaymenttDetails, updateLease } from '../store/actions/lease.actions';
import { leaseDetails, loadingStatus, rentPaymentDetails, rentPaymentList, serviceRequestList,
         tenantList, vendorList, workOrderList } from '../store/reducers';
import { getAllServiceRequests, getAllVendors,
  getAllWorkOrders, getRentPaymentList, getAllTenants } from '../store/actions/lease.actions';
import { Observable } from 'rxjs';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PaymentDetailsDialogComponent } from '../dialogs/payment-details-dialog/payment-details-dialog.component';
import { AddRentDialogComponent } from '../dialogs/add-rent-dialog/add-rent-dialog.component';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lease-details',
  templateUrl: './lease-details.component.html',
  styleUrls: ['./lease-details.component.scss']
})
export class LeaseDetailsComponent implements OnInit {

  id: number;
  lease: any; //PropertyLease;
  payments: any;
  paymentDetails: any;
  addRent = false;
  addTenant = false;
  addWorkOrder = false;
  workOrders: any;
  requests: any [];
  tenants: any [];

  tabIndex = 0;
  hide = false;
  // rentAmtDue;
  // rentDueOn;

  loading$: Observable<boolean>;

  detailsForm: FormGroup;
  addForm: FormGroup; // Add rent payment
  addForm2: FormGroup; // Add work order
  addTenantForm: FormGroup;

  vendors:any [];

  months = [
    {name: 'January'},
    {name: 'February'},
    {name: 'March'},
    {name: 'April'},
    {name: 'May'},
    {name: 'June'},
    {name: 'July'},
    {name: 'August'},
    {name: 'September'},
    {name: 'October'},
    {name: 'November'},
    {name: 'December'}
  ];

  years = [
    {name: '2020'},
    {name: '2021'},
    {name: '2022'},
    {name: '2023'},
    {name: '2024'},
    {name: '2026'},
    {name: '2027'},
    {name: '2028'},
    {name: '2029'}
  ];

  payBy = [
    {name: 'Cash', key: 1},
    {name: 'Cheque', key: 2},
    {name: 'ETransfer', key: 3},
    {name: 'BankTransfer', key: 4},
    {name: 'PreAuthorized', key: 5},
    {name: 'Online', key: 6},
    {name: 'Other', key: 7}
  ];

  types = [
    {name: 'Repair'},
    {name: 'Replacement'},
    {name: 'Metenance'}
  ];

  categories = [
    {name: 'Plumbing'},
    {name: 'Electrical'},
    {name: 'Renovation'}
  ]
;
  // currentMonth;
  // currentYear;

  displayedColumns: string[] = ['icon', 'id', 'paidAmt', 'paidDate', 'payMethod', 'rentMonth', 'rentYear', 'added', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<any>();

  displayedColumns2: string[] = ['icon', 'id', 'workOrderName', 'category', 'type', 'status', 'startDate', 'endDate', 'added', 'action'];
  @ViewChild('paginator2', {static: false}) paginator2: MatPaginator;
  @ViewChild('Sort2', {static: true}) sort2: MatSort;

  dataSource2 = new MatTableDataSource<any>();

  displayedColumns3: string[] = ['icon', 'id', 'firstName', 'lastName', 'email', 'tel1', 'addDate', 'action'];
  @ViewChild('paginator3', {static: false}) paginator3: MatPaginator;
  @ViewChild('Sort3', {static: true}) sort3: MatSort;

  dataSource3 = new MatTableDataSource<any>();

  private dialogConfig;

  constructor(private store: Store<PropertyLeaseState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private propertyService: LeaseService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.GetLeaseDetails(this.id);

                this.store.select(rentPaymentDetails)
                          .subscribe(data => {
                            this.paymentDetails = data;
                            console.log('py-details', this.paymentDetails);
                          });
                this.store.select(vendorList)
                          .subscribe(vendors => {
                            this.vendors = vendors;
                          });
                // this.store.select(serviceRequestList)
                //           .subscribe(reqs => {
                //             this.requests = reqs;

                //           });
              }

  ngOnInit() {

    console.log('start tab index', this.tabIndex);
    // this.currentMonth = (new Date().getMonth() + 1).toString();
    // this.currentYear = (new Date().getFullYear).toString();

    // console.log('date', this.currentMonth);

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.dialogConfig = {
      height: '350px',
      width: '500px',
      disableClose: true,
      panelClass: 'my-custom-dialog-class',
      data: {
        leaseId: this.id,
        // py: this.paymentDetails,
        // txt: 'test'

        // rentDueAmount: this.rentAmtDue,
        // rentDue: this.rentDueOn
      }
    };

    // this.GetLeaseDetails(this.id);

    this.detailsForm = this.formBuilder.group({
      id: [0],
      leaseTitle: [''],
      leaseDesc: [''],
      rentalPropertyId: [0],
      leaseStartDate: [''],
      leaseEndDate: [''],
      term: [''],
      rentAmount: [0],
      rentFrequency: [''],

      rentDueOn: [''],
      leaseAgreementDocUrl: [false],
      // leaseEndCode: [0],
      endLeaseCode: [''],
      Regigerator: [false],

      damageDepositAmount: [0],
      petDepositAmount: [0],
      leaseSignDate: [''],
      isActive: [true],
      isAddendumAvailable: [false],
      // endLeaseCode: [''],
      renewTerm: [''],
      notes: [''],

      // rentalProperty: this.formBuilder.group({
      //   propertyName: [],
      //   address: this.formBuilder.group({
      //     streetNum: [],
      //     city: [],
      //     stateProvince: [],
      //     zipPostCode: []
      //   })
      // }),

      water: [false],
      cablevison: [false],
      electricity: [false],
      internet: [false],
      heat: [false],
      naturalGas: [false],
      sewageDisposal: [false],
      snowRemoval: [false],
      storage: [false],
      recreationFacility: [false],
      garbageCollection: [false],
      recycleServices: [false],
      kitchenScrapCollection: [false],
      laundry: [false],
      freeLaundry: [false],
      // regigerator: [false],
      dishwasher: [false],
      stoveOven: [false],
      windowCovering: [false],
      furniture: [false],
      carpets: [false],
      parkingStall: [0],
      other: [''],

      numberOfParking: [0] //,
      // rentCoverage: this.formBuilder.group({


      // }),

      // tenant: this.formBuilder.group({
      //   firstName: [],
      //   lastName: [],
      //   contactEmail: [],
      //   contactTelephone: []
      // })
    });

    this.addForm = this.formBuilder.group({ // add rent payment
      leaseId: [null],
      scheduledPaymentAmt: [0],
      actualPaymentAmt: [0],
      payMethod: [],
      paymentDueDate: [''],
      paymentReceivedDate: [''],
      isOnTime: [true],
      inChargeTenantId: [0],
      rentalForMonth: [''],
      rentalForYear: ['']
    });

    this.addForm2 = this.formBuilder.group({  // add work order
      workOrderName: [''],
      workOrderDetails: [''],
      workOrderType: [''],
      workOrderCategory: [''],
      rentalPropertyId: [],
      vendorId: [],
      startDate: [''],
      endDate: [''],
      isOwnerAuthorized: [true],
      isEmergency: [false],
      workOrderStatus: [''],
      serviceRequestId: [],
      note: ['']
    });
      // User servie directlty the first time when the compowent loads
      // this.propertyService.getPropertyDetails(id)
      //     .subscribe(data => {
      //       this.property = data;
      //       this.detailsForm.patchValue(data);
      // });

    this.addTenantForm = this.formBuilder.group({
      userNam: ['Unset'],
      firstName: [''],
      lastName: [''],
      contactEmail: [''],
      contactTelephone1: [''],
      contactTelephone2: [''],
      contatctOthers: [''],
      leaseId: [],
      onlineAccessEnbaled: [false],
      roleId: [3]

    })

    // this.store.dispatch(getRentPaymentList());
    // this.store.dispatch(getAllWorkOrders());
      // this.store.dispatch(getAllVendors());
      // this.store.dispatch(getAllServiceRequests());
    // this.store.dispatch(getAllTenants());
  }




    GetLeaseDetails(id: any) {
      debugger;
      this.store.dispatch(getLeaseDetails({payload: id}));

      this.store.pipe(select(leaseDetails))
          .subscribe(data => {
            this.lease = data;
            // this.rentAmtDue = this.lease.rentAmount;
            // this.rentDueOn = this.lease.rentDueOn;
            // console.log('amt', this.rentAmtDue);
            // console.log('due', this.rentDueOn);

            // this.detailsForm.patchValue(data);
            console.log(data);
            // this.dataSource.data = this.lease;
            // console.log('payment', this.dataSource.data);
            this.store.select(rentPaymentList)
                .subscribe(paymentList => {
                  this.payments = paymentList;
                  if(paymentList && this.lease) {
                    this.payments = paymentList.filter(l => l.leaseId == this.lease.id);
                    this.dataSource.data = this.payments;
                    // this.dataSource.sort = this.sort;
                    // this.dataSource.paginator = this.paginator;

                    setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });

                    // console.log('datasource', this.dataSource.data);
                    // console.log('leaseid', this.lease.id);
                    // console.log('py', this.payments);
                  }
                });

            this.store.select(workOrderList)
                .subscribe(orders => {
                  this.workOrders = orders;
                  if (orders && this.lease) {
                    this.workOrders = orders.filter(l => l.leaseId == this.lease.id);
                    this.dataSource2.data = this.workOrders;
                    console.log('orders', this.workOrders);

                    setTimeout(() =>  {this.dataSource2.paginator = this.paginator2; this.dataSource2.sort = this.sort2; });
                  }
                });

            this.store.select(serviceRequestList)
                      .subscribe(reqs => {
                        this.requests = reqs;
                        if (reqs && this.lease) {
                          this.requests = reqs.filter(l => l.leaseId === this.lease.id);
                          console.log('reqs for this lease', this.requests);
                        }
                      });

            this.store.select(tenantList)
                      .subscribe(tnts => {
                        if (tnts && this.lease) {
                          this.tenants = tnts.filter(l => l.leaseId === this.lease.id);
                          this.dataSource3.data = this.tenants;

                          setTimeout(() =>  {this.dataSource3.paginator = this.paginator3; this.dataSource3.sort = this.sort3; });
                        }
                      });
          });

      // this.store.pipe(select(leaseDetails))
      //     .subscribe(data => {
      //       if (data != null && data.id === this.id) { // select data from state store if data exists
      //         this.lease = data;
      //         this.detailsForm.patchValue(data);
      //       } else {
      //         this.store.dispatch(getLeaseDetails({payload: id})); // dispatch the action if state has no data

      //         this.store.pipe(select(leaseDetails)) // select date from state in store
      //         .subscribe(lease => {
      //           this.lease = lease;
      //         });
      //       }
      //       console.log(data);
      // });

  }

  tabSelected(e) {
    this.tabIndex = e.index;
    console.log('tab selected', this.tabIndex);
    // if (this.tabIndex == 1) {
    //   this.hide = false;
    // }

    // if (this.tabIndex == 0) {
    //   this.hide = false;
    // }

    // if (this.tabIndex == 1) {
    //   this.hide = false;
    // }

    switch (this.tabIndex) {
      case 0 : {
        this.hide = false;
        break;
      }
      case 1 : {
        this.hide = false;
        break;
      }
      case 2 : {
        this.hide = true;
        this.store.dispatch(getAllTenants());
        break;
      }
      case 3 : {
        this.hide = true;
        this.store.dispatch(getRentPaymentList());
        break;
      }
      case 4 : {
        this.hide = true;
        this.store.dispatch(getAllWorkOrders());
        break;
      }
        default: {
        this.hide = false;
        break;
      }
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource2.sort = this.sort2;
    this.dataSource2.paginator = this.paginator2;
  }

  viewAgreement() {
    console.log('generating agreement....');
  }

  submit() {
    debugger;
    this.detailsForm.patchValue(
      {
        rentalPropertyId: this.lease.rentalPropertyId,
        term: this.lease.term,
        endLeaseCode: this.lease.endLeaseCode
      }
      );
    console.log('form data', this.detailsForm.value);
    this.store.dispatch(updateLease({payload: this.detailsForm.value}));

  }

  getRentPaymentDetails(id: number) {
    debugger;
    let dialogRef = this.dialog.open(PaymentDetailsDialogComponent, this.dialogConfig);

    this.store.dispatch(getRentPaymenttDetails({payload: id}));

  }

  getWorkOrderDetails(id: number) {
    debugger;
  }

  getTenantDetails(id: number) {

  }

  addR() {
    this.addRent = true;
  }

  addT() {
    this.addTenant = true;
  }

  addW() {
    this.addWorkOrder = true;
  }

  cancel() {
    this.addRent = false;
  }

  cancel2() {
    this.addWorkOrder = false;
  }

  cancel3() {
    this.addTenant = false;
  }

  addRentPayment() {
    debugger;
    this.addForm.patchValue({
      leaseId: Number(this.id)
    });
    console.log('add rent form', this.addForm.value);
    // this.dialog.open(AddRentDialogComponent, this.dialogConfig);
    this.store.dispatch(addRentPayment({payload: this.addForm.value}));

    this.addForm.reset();
    this.addRent = false;
  }

  addAdditionalTenant() {
    this.addTenantForm.patchValue({
      leaseId: Number(this.id),
      onlineAccessEnbaled: false,
      roleId: 3
    });

    console.log('tenant form', this.addTenantForm.value);
    // this.store.dispatch(addTenant({payload: this.addTenantForm.value()}));
    this.addTenantForm.reset();
    this.addTenant = false;
  }

  addNewOrder() {
    debugger;
    this.addForm2.patchValue({
      workOrderStatus: 'New',
      rentalPropertyId: this.lease.id //??
    });
    console.log('order form', this.addForm2.value);
    this.store.dispatch(addWorkOrder({payload: this.addForm2.value}));
    this.addForm2.reset();
    this.addWorkOrder = false;
  }

  reset() {
    this.addForm.reset();
    this.addForm.get('').setValue('2020');
  }

  reset2() {
    this.addForm2.reset();
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public doFilter2 = (value: string) => {
    this.dataSource2.filter = value.trim().toLocaleLowerCase();
  }

  public doFilter3 = (value: string) => {
    this.dataSource3.filter = value.trim().toLocaleLowerCase();
  }

  openDialog() {

  }

  goBack() {
    this.router.navigate(['/Manage/lease/']);
  }

}

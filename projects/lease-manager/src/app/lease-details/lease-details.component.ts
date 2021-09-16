import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaseService, PropertyLease, Vendor } from '@lib/app-core';
import { addRentPayment, addTenant, addWorkOrder, getAllInvoices, getAllNoticeForLease, getLeaseDetails, getRentPaymenttDetails, getWorkOrderDetails, updateLease, updateRentPayment } from '../store/actions/lease.actions';
import { getNoticeList, invoiceList, leaseDetails, loadingStatus, noticeList, rentPaymentDetails, rentPaymentList, serviceRequestList,
         tenantList, vendorDetails, vendorList, workOrderList } from '../store/reducers';
import { getAllServiceRequests, getAllVendors,
  getAllWorkOrders, getRentPaymentList, getAllTenants } from '../store/actions/lease.actions';
import { Observable } from 'rxjs';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PaymentDetailsDialogComponent } from '../dialogs/payment-details-dialog/payment-details-dialog.component';
import { AddRentDialogComponent } from '../dialogs/add-rent-dialog/add-rent-dialog.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {Overlay} from '@angular/cdk/overlay';
import { WorkorderDetailsDialogComponent } from '../dialogs/workorder-details-dialog/workorder-details-dialog.component';

import { DashState, RentalAppList, ServiceRequestList } from '@lib/dashboard';
import { AddNoticeDialogComponent } from '../dialogs/add-notice-dialog/add-notice-dialog.component';
import { NoticeDetailsDialogComponent } from '../dialogs/notice-details-dialog/notice-details-dialog.component';
import { UpdateStatusDialogComponent } from '../dialogs/update-status-dialog/update-status-dialog.component';

@Component({
  selector: 'app-lease-details',
  templateUrl: './lease-details.component.html',
  styleUrls: ['./lease-details.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class LeaseDetailsComponent implements OnInit, AfterContentChecked {

  id: number;
  lease: any; //PropertyLease;
  payments: any;
  paymentDetails: any;
  addRent = false;
  addTenant = false;
  addWorkOrder = false;
  workOrders: any;
  requests: any [];
  tenants: any[];
  notices: any[];

  tabIndex = 0;
  hide = false;

  enableRenwal = false;
  renewStatus = 0;
  editEndDate = false;


  // rentAmtDue;
  // rentDueOn;
  addaddendum = false;
  existingCoAplicant = true;
  applicantList;
  coApplicantList$: Observable<any>;
  coAppList;

  loading$: Observable<boolean>;

  detailsForm: FormGroup;
  addForm: FormGroup; // Add rent payment
  addForm2: FormGroup; // Add work order
  addTenantForm: FormGroup;
  updateRenForm: FormGroup;
  addNoticeForm: FormGroup;
  reasonItemList: FormGroup;
  // updateWorkOrderForm: FormGroup;

  vendors:any [];
  vendors$: Observable<Vendor[]>;
  invoiceList: any[];
  chosenVendorId;
  chosenServiceRequestId;

  finalized = false;
  getFinalize = false;

  toRenew = true;

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
  ];

  isTableExpanded = false;
  // currentMonth;
  // currentYear;

  displayedColumns: string[] = ['icon', 'id', 'paidAmt', 'paymentReceivedDate', 'payMethod', 'rentalForMonth', 'rentalForYear', 'created', 'action'];
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;
  @ViewChild('Sort', {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<any>();

  displayedColumns2: string[] = ['icon', 'id', 'workOrderName', 'workOrderCategory', 'workOrderType', 'workOrderStatus', 'startDate', 'endDate', 'added', 'action'];
  @ViewChild('paginator2', {static: false}) paginator2: MatPaginator;
  @ViewChild('Sort2', {static: true}) sort2: MatSort;

  dataSource2 = new MatTableDataSource<any>();

  displayedColumns3: string[] = ['icon', 'id', 'firstName', 'lastName', 'email', 'tel1', 'created', 'action'];
  @ViewChild('paginator3', {static: false}) paginator3: MatPaginator;
  @ViewChild('Sort3', {static: true}) sort3: MatSort;

  dataSource3 = new MatTableDataSource<any>();


  displayedColumns4: string[] = ['icon', 'id', 'type', 'description', 'created', 'served', 'active', 'action'];
  @ViewChild('paginator4', { static: false }) paginator4: MatPaginator;
  @ViewChild('Sort4', { static: true }) sort4: MatSort;

  dataSource4 = new MatTableDataSource<any>();

  private dialogConfig;

  constructor(private store: Store<PropertyLeaseState>,
              private dasStore: Store<DashState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private dialog: MatDialog,
              public overlay: Overlay,
              private cdr: ChangeDetectorRef,
              private formBuilder: FormBuilder,
              private propertyService: LeaseService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                // this.vendors$ = this.store.select(vendorList);

                // this.GetLeaseDetails(this.id);

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

                  this.store.select(ServiceRequestList)
                            .subscribe(reqs => {
                              this.requests = reqs;
                              if (reqs && this.lease) {
                                this.requests = reqs.filter(l => l.leaseId === this.lease.id);
                                console.log('reqs for this lease', this.requests);
                              }
                              // else {
                              //   this.requests = JSON.parse(localStorage.getItem('servicerequests'))
                              //                   .filter(l => l.leaseId === this.lease.id);
                              //   console.log('reqs from cashe', this.requests);
                              // }
                            });

                  this.store.select(tenantList)
                            .subscribe(tnts => {
                              if (tnts && this.lease) {
                                this.tenants = tnts.filter(l => l.leaseId === this.lease.id);
                                this.dataSource3.data = this.tenants;

                                setTimeout(() =>  {this.dataSource3.paginator = this.paginator3; this.dataSource3.sort = this.sort3; });
                              }
                            });

                  this.store.select(invoiceList)
                            .subscribe(invoices => {
                              if(invoices && this.lease) {
                                this.invoiceList = invoices;
                              }
                            });

                  this.dasStore.select(RentalAppList)
                              .subscribe(applist => {
                                if (applist && this.lease) {
                                  this.applicantList = applist;
                                  console.log('co apps before', this.applicantList);
                                } else {
                                  this.applicantList = JSON.parse(localStorage.getItem('applications'));
                                }

                                // this.coApplicantList = this.coApplicantList.filter(l => l.propertyId == this.lease.rentalPropertyId);
                                // console.log('lease id', this.lease.rentalProperty.id);
                                // console.log('co apps', this.coApplicantList);

                              });

                  this.store.select(noticeList)
                    .subscribe(notices => {
                      if (notices) {
                        this.notices = notices;
                        this.dataSource4.data = notices;
                        console.log('notices', this.dataSource4.data);
                        setTimeout(() => { this.dataSource4.paginator = this.paginator4; this.dataSource4.sort = this.sort4; });
                      }
                    });
                });
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit() {

    // console.log('start tab index', this.tabIndex);
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

    this.propertyService.getNoticeReasonItems(0)
      .subscribe(items => {
        console.log('reason itemes', items);
        this.reasonItems = items;
        console.log('in reason group', this.reasonItems);
      });

    this.coApplicantList$ = this.propertyService.getAlCoApplicants();
    this.propertyService.getAlCoApplicants().subscribe(coapps => {
      this.coAppList = coapps;
      console.log('coapps', this.coAppList);
    });

    // this.GetLeaseDetails(this.id);

    this.detailsForm = this.formBuilder.group({
      id: [0],
      type: Number([0]),
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
      leaseSignDate: ['Jan 1, 2021'],
      isActive: [false],
      isAddendumAvailable: [false],
      // endLeaseCode: [''],
      renewTerm: [''],
      notes: [''],
      serviceAgent: [false],
      muutalAgreement: [false],
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

    this.updateRenForm = this.formBuilder.group({
      id: [],
      isOnTime: [],
      rentAmount: [''],
      paymentReceivedDate: [''],
      note: ['']
    });

    this.addForm2 = this.formBuilder.group({  // add work order
      workOrderName: [''],
      workOrderDetails: [''],
      workOrderType: [''],
      workOrderCategory: [''],
      rentalPropertyId: [],
      vendorId: [],
      leaseId: [], // newly added
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
      newTenantId: 0,
      userName: ['Unset'],
      firstName: [''],
      lastName: [''],
      contactEmail: [''],
      contactTelephone1: [''],
      contactTelephone2: [''],
      contactOthers: [''],
      leaseId: [],
      onlineAccessEnbaled: [false],
      userAvartaImgUrl: [''],
      roleId: [3]

    });

    this.addNoticeForm = this.formBuilder.group({

      reasonInNotice: this.formBuilder.array([]),

      leaseId: [],
      type: Number([]),
      noticeDesc: [''],
      isServed: [true],
      howIsServed: Number([]),
      serviceDate: [''],
      isActive: [true],
      outstandingRent: [0],
      outstandingUtilities: [0],
      utilityDueDate: [''],
      requiredMoveOutDate: [''],

      // The following needs to be a form array

      // reasonInNotice: this.formBuilder.group({
      //   serviceNoticeId: [],
      //   reasonCodeId: [],
      //   applied: [false]
      // })
    });



    // this.store.dispatch(getRentPaymentList());
    // this.store.dispatch(getAllWorkOrders());
      // this.store.dispatch(getAllVendors());
      // this.store.dispatch(getAllServiceRequests());
    // this.store.dispatch(getAllTenants());

    this.GetLeaseDetails(this.id);
  }

  reasonInNotice(): FormArray {
    return this.addNoticeForm.get('reasonInNotice') as FormArray;
  }

  reasonItems(): FormGroup {
    return this.formBuilder.group({
      serviceNoticeId: [],
      reasonCodeId: [],
      applied: [false]
    });
  }

  addReasonItems() {
    this.reasonInNotice().push(this.reasonItems());
  }

  GetLeaseDetails(id: any) {
    debugger;
    // Always dispatch because new detailw are not available and must be coming from server
    this.store.dispatch(getLeaseDetails({payload: id}));



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
        // if (!this.tenants) {
        this.store.dispatch(getAllTenants());
        // }
        // console.log('all app list', this.coApplicantList);
        // this.coApplicantList = this.applicantList.filter(l => l.propertyId === this.lease.rentalProperty.id);
        // console.log('selected app list', this.coApplicantList);

        // this.dasStore.select(RentalAppList) // GET LIST OF APPLICATIONS FOR RETRIEVING CO=APPLICATNT - to be considered in the future
        //                       .subscribe(applist => {
        //                         if (applist && this.lease) {
        //                           this.applicantList = applist;
        //                           console.log('co apps before', this.applicantList);
        //                         } else {
        //                           this.applicantList = JSON.parse(localStorage.getItem('applications'));
        //                         }

        //                         this.coApplicantList = this.applicantList.filter(l => l.propertyId == this.lease.rentalPropertyId);
        //                         console.log('lease id', this.lease.rentalProperty.id);
        //                         console.log('co apps', this.coApplicantList);

        //                       });

        break;
      }
      case 3 : {
        this.hide = true;
        if (!this.payments) {
          this.store.dispatch(getRentPaymentList());
        }
        break;
      }
      case 4 : {
        this.hide = true;
        if (!this.vendors) {
          this.store.dispatch(getAllVendors());
          // this.vendors$ = this.propertyService.getAllVendors();
        }

        if (!this.workOrders) {
           this.store.dispatch(getAllWorkOrders());
        }
        break;
      }
      case 5: {
        this.hide = true;
        // if (!this.vendors) {
        //   this.store.dispatch(getAllVendors());
        //   // this.vendors$ = this.propertyService.getAllVendors();
        // }
        this.store.dispatch(getAllNoticeForLease({ payload: this.id }));
        // if (!this.notices) {
        //   this.store.dispatch(getAllNoticeForLease({payload: this.id}));
        // }
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

    this.dataSource3.sort = this.sort3;
    this.dataSource3.paginator = this.paginator3;
  }

  viewAgreement() {
    console.log('generating agreement....');
  }

  submit() {
    debugger;

    let active = false;

    if (this.getFinalize) {
      active = true;
    }

    if(this.enableRenwal) {
      this.renewStatus = 1;
    }

    this.detailsForm.patchValue(
      {
        type: this.renewStatus,
        rentalPropertyId: this.lease.rentalPropertyId,
        term: this.lease.term,
        isActive: active,
        endLeaseCode: this.lease.endLeaseCode
      }
      );
    console.log('form data', this.detailsForm.value);
    this.store.dispatch(updateLease({payload: this.detailsForm.value})); // Disable for
    this.enableRenwal = false;
    this.editEndDate = false;
    this.getFinalize = false;

    if (active) {
      this.finalized = true;
    }

  }

  addNotice() {
    let dialogRef = this.dialog.open(AddNoticeDialogComponent, {
      height: '700px',
      width: '550px',
      disableClose: false, // to be reviewed later
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      panelClass: 'my-custom-dialog-class',
      data: {
        id: this.id,
        // py: this.paymentDetails,
        // txt: 'test'

        // rentDueAmount: this.rentAmtDue,
        // rentDue: this.rentDueOn
      }
    });
  }

  getNoticeDetails(id: number) {
    debugger;

    let dialogRef = this.dialog.open(NoticeDetailsDialogComponent, {
      height: '500px',
      width: '880px',
      disableClose: false,
      autoFocus: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      panelClass: 'my-custom-dialog-class',
      data: {
        id: id,
        // py: this.paymentDetails,
        // txt: 'test'

        // rentDueAmount: this.rentAmtDue,
        // rentDue: this.rentDueOn
      }
    });
  }

  updateSttus(id: any, active: any) {
    let dialogRef = this.dialog.open(UpdateStatusDialogComponent, {
      height: '180px',
      width: '250px',
      disableClose: false,
      autoFocus: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      panelClass: 'my-custom-dialog-class',
      data: {
        id: id,
        isActive:active
        // py: this.paymentDetails,
        // txt: 'test'

        // rentDueAmount: this.rentAmtDue,
        // rentDue: this.rentDueOn
      }
    });
  }

  getRentPaymentDetails(id: number) {
    debugger;
    let dialogRef = this.dialog.open(PaymentDetailsDialogComponent, {
      height: '400px',
      width: '550px',
      disableClose: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      panelClass: 'my-custom-dialog-class',
      data: {
        id: this.id,
        // py: this.paymentDetails,
        // txt: 'test'

        // rentDueAmount: this.rentAmtDue,
        // rentDue: this.rentDueOn
      }
    });

    this.store.dispatch(getRentPaymenttDetails({payload: id}));

  }

  getWorkOrderDetails(id: number) {
    debugger;

    let dialogRef = this.dialog.open(WorkorderDetailsDialogComponent, {
      height: '400px',
      width: '600px',
      disableClose: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      panelClass: 'my-custom-dialog-class',
      data: {
        id: Number(this.id),
        // py: this.paymentDetails,
        // txt: 'test'

        // rentDueAmount: this.rentAmtDue,
        // rentDue: this.rentDueOn
      }
    });

    this.store.dispatch(getWorkOrderDetails({payload: id}));
    this.store.dispatch(getAllInvoices());
  }

  getTenantDetails(id: number) {

  }

  // getCoApplicants() {

  // }

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

  // updateRentPayment() {
  //   debugger;
  //   // this.updateRenForm.patchValue({
  //   //   id: Number()
  //   // });
  //   console.log('pymt form', this.updateRenForm.value);
  //   // this.store.dispatch(updateRentPayment({payload:this.updateRenForm.value}));
  // }

  addAdditionalTenant() {
    debugger;
    this.addTenantForm.patchValue({
      newTenantId: 0,
      leaseId: Number(this.id),
      onlineAccessEnbaled: false,
      userAvartaImgUrl: '',
      roleId: 3
    });

    console.log('tenant form', this.addTenantForm.value);
    this.store.dispatch(addTenant({payload: this.addTenantForm.value}));
    this.addTenantForm.reset();
    this.addTenant = false;
  }

  addNewOrder() {
    debugger;
    this.addForm2.patchValue({
      leaseId: this.lease.id,
      vendorId: this.chosenVendorId,
      workOrderStatus: 'New',
      serviceRequestId:this.chosenServiceRequestId,
      rentalPropertyId: this.lease.rentalPropertyId //??
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
    this.dataSource.filter = value.trim().toLowerCase();
  }

  public doFilter2 = (value: string) => {
    this.dataSource2.filter = value.trim().toLowerCase();
  }

  public doFilter3 = (value: string) => {
    this.dataSource3.filter = value.trim().toLowerCase();
  }

  public doFilter4 = (value: string) => {
    this.dataSource4.filter = value.trim().toLocaleLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentDetailsDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  goBack() {
    this.router.navigate(['/Manage/lease/']);
  }

  onVendorChange(value) {
    this.chosenVendorId = value;
    console.log('vendor id', value);
  }

  onServieRequestChange(value) {
    this.chosenServiceRequestId = value;
    console.log('service req id', value);
  }

  cancelAdd() {
    this.addaddendum = false;
  }

  enableAdd() {
    this.addaddendum = true;
  }

  enableEdit() {
    this.editEndDate = !this.editEndDate;
  }

  showFinalize() {
    this.getFinalize = !this.getFinalize;
  }

  onChange(event) {
    console.log('tag', event);
    if (event.value == '1') {
      this.enableRenwal = true;
    } else {
      this.enableRenwal = false;
    }
    console.log('renewal', this.enableRenwal)
  }

  renew() {
    this.enableRenwal = true;
    this.toRenew = false;
  }

  cancel_renew() {
    this.enableRenwal = false;
    this.toRenew = true;
  }

  onAddTenantChange(event) {
    console.log('add tenant option', event.value);
    if (event.value === 1) {
      this.existingCoAplicant = true;
    } else {
      this.existingCoAplicant = false;
    }
  }

  onCpApplicantChange(event) {
    console.log('get co apps', event);

    this.addTenantForm.patchValue({
      firstName: event.firstName,
      lastName: event.lastName,
      contactEmail: event.contactEmail,
      contactTelephone1: event.contactTel,
      contactTelephone2: '',
      contactOthers: event.contactOthers
    });

  }

}


import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaseService, PropertyLease } from '@lib/app-core';
import { addRentPayment, getLeaseDetails, getRentPaymenttDetails, updateLease } from '../store/actions/lease.actions';
import { leaseDetails, loadingStatus, rentPaymentDetails, rentPaymentList, workOrderList } from '../store/reducers';
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
  workOrders: any;

  tabIndex = 0;
  hide = false;
  // rentAmtDue;
  // rentDueOn;

  loading$: Observable<boolean>;

  detailsForm: FormGroup;
  addForm: FormGroup;

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

  // currentMonth;
  // currentYear;

  displayedColumns: string[] = ['icon', 'id', 'paidAmt', 'paidDate', 'payMethod', 'rentMonth', 'rentYear', 'added', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<any>();

  displayedColumns2: string[] = ['icon', 'id', 'workOrderName', 'category', 'type', 'status', 'startDate', 'endDate', 'created', 'action'];;
  @ViewChild(MatPaginator, {static: false}) paginator2: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort2: MatSort;

  dataSource2 = new MatTableDataSource<any>();

  private dialogConfig;

  constructor(private store: Store<PropertyLeaseState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private propertyService: LeaseService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.select(rentPaymentDetails)
                          .subscribe(data => {
                            this.paymentDetails = data;
                            console.log('py-details', this.paymentDetails);
                          });
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

    this.GetLeaseDetails(this.id);

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

    this.addForm = this.formBuilder.group({
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
      // User servie directlty the first time when the compowent loads
      // this.propertyService.getPropertyDetails(id)
      //     .subscribe(data => {
      //       this.property = data;
      //       this.detailsForm.patchValue(data);
      // });
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
                    console.log('orders', this.workOrders);
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
        break;
      }
      case 3 : {
        this.hide = true;
        break;
      }
      case 4 : {
        this.hide = true;
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
  }

  viewAgreement() {

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

  addR() {
    this.addRent = true;
  }

  cancel() {
    this.addRent = false;
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

  reset() {
    this.addForm.reset();
    this.addForm.get('').setValue('2020');
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  openDialog() {

  }

  goBack() {
    this.router.navigate(['/Manage/lease/']);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaseService, PropertyLease } from '@lib/app-core';
import { getLeaseDetails, updateLease } from '../store/actions/lease.actions';
import { leaseDetails, loadingStatus } from '../store/reducers';
import { Observable } from 'rxjs';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lease-details',
  templateUrl: './lease-details.component.html',
  styleUrls: ['./lease-details.component.scss']
})
export class LeaseDetailsComponent implements OnInit {

  id: number;
  lease: any; //PropertyLease;

  loading$: Observable<boolean>;

  detailsForm: FormGroup;

  // displayedColumns: string[] = ['icon', 'id', 'rentAmtDue', 'paidAmt', 'rentMonth', 'rentYear', 'paidDate', 'payMethod', 'added', 'action'];
  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: false}) sort: MatSort;

  // dataSource = new MatTableDataSource<PropertyLease>();

  constructor(private store: Store<PropertyLeaseState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private propertyService: LeaseService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
              }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

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
            // this.detailsForm.patchValue(data);
            console.log(data);
            // this.dataSource.data = this.lease;
            // console.log('payment', this.dataSource.data);
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

  goBack() {
    this.router.navigate(['/Manage/lease/']);
  }

}

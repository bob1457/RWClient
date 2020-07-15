import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaseService, PropertyLease } from '@lib/app-core';
import { getLeaseDetails } from '../store/actions/lease.actions';
import { leaseDetails, loadingStatus } from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lease-details',
  templateUrl: './lease-details.component.html',
  styleUrls: ['./lease-details.component.scss']
})
export class LeaseDetailsComponent implements OnInit {

  id: number;
  lease: PropertyLease;

  loading$: Observable<boolean>;

  detailsForm: FormGroup;

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
      id: [''],
      leaseTitle: [''],
      leaseDesc: [''],
      leaseStartDate: [''],
      leaseEndDate: [''],
      term: [''],
      rentAmount: [''],
      rentFrequency: [],
      damageDepositAmount: [],
      petDepositAmount: [],
      leaseSignDate: [''],
      isActive: [true],
      isAddendumAvailable: [false],
      endLeaseCode: [''],
      renewTerm: [''],
      notes: [],

      rentalProperty: this.formBuilder.group({
        propertyName: [],
        address: this.formBuilder.group({
          streetNum: [],
          city: [],
          stateProvince: [],
          zipPostCode: []
        })
      }),

      water: [false],
      cablevision: [false],
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
      regigerator: [false],
      dishwasher: [false],
      stoveOven: [false],
      windowCovering: [false],
      furniture: [false],
      carpets: [false],
      parkingStall: [false],
      other: [''],

      numberOfParking: [],
      // rentCoverage: this.formBuilder.group({


      // }),

      tenant: this.formBuilder.group({
        firstName: [],
        lastName: [],
        contactEmail: [],
        contactTelephone: []
      })
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


  goBack() {
    this.router.navigate(['/Manage/lease/']);
  }

}

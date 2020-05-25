import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaseService, PropertyLease } from '@lib/app-core';
import { getLeaseDetails } from '../store/actions/lease.actions';

@Component({
  selector: 'app-lease-details',
  templateUrl: './lease-details.component.html',
  styleUrls: ['./lease-details.component.scss']
})
export class LeaseDetailsComponent implements OnInit {

  id: number;
  lease: PropertyLease;

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

    this.GetLeaseDetails(this.id);

    this.detailsForm = this.formBuilder.group({
      id: [''],
      leaseTitle: [''],
      leaseDesc: [''],
      leaseStartDate: [''],
      leaseEndDate: [''],
      term: [''],
      rentAmount: [''],
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
      // this.property$ =

      // User store to select the state

      // this.store.pipe(select(propertyDetrails))
      // .subscribe(data => {
      //   this.property = data;
      //   this.detailsForm.patchValue(data);
      //   console.log(data);
      // });

  }


  goBack() {
    this.router.navigate(['/Manage/lease/leases']);
  }

}

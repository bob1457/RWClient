import { Component, OnInit } from '@angular/core';
import { PropertyLeaseState } from '../store/lease-state';
import { Store, select } from '@ngrx/store';
import { tenantList, tenantDetails, loadingStatus } from '../store/reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyTenant, LeaseService } from '@lib/app-core';
import { getTenantDetails, updateTenant } from '../store/actions/lease.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss']
})
export class TenantDetailsComponent implements OnInit {

  id: number;
  tenant: any; // PropertyTenant;

  loading$: Observable<boolean>;

  list = true;
  grid = false;

  detailsForm: FormGroup;

  constructor(private store: Store<PropertyLeaseState>,
              private router: Router,
              private leaseService: LeaseService,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
              }

  ngOnInit() {
    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.GetTenantDetails(this.id);



    // this.store.pipe(select(tenantList))
    //     .subscribe(data => {
    //       this.tenants = data;
    //       const selected = this.tenants.find( o => o.id === this.id);
    //       this.tenant = selected;
    //       // this.tenant = selected;
    //       console.log(this.tenant);
    //     });
    // this.leaseService.getTenantDetails(this.id)
    //     .subscribe(data => {
    //       this.tenant = data;
    //       console.log(this.tenant);
    //     });

    this.detailsForm = this.formBuilder.group({
          id: [],
          leaseId: [],
          userName: [''],
          firstName: [''],
          lastName: [''],
          contactEmail: [''],
          contactTelephone1: [''],
          contactTelephone2: [''],
          contactOthers: [''],
          onlineAccessEnbaled: [false],
          isActive: [true]
        });
  }

  GetTenantDetails(id: any) {
    debugger;
    this.store.dispatch(getTenantDetails({payload: id}));
    // this.property$ =

    // User store to select the state

    this.store.pipe(select(tenantDetails))
    .subscribe(data => {
      this.tenant = data;
      console.log(data);
    });

    // this.store.pipe(select(tenantDetails))
    // .subscribe(data => {
    //   if (data != null && data.id === this.id) { // select data from state store if data exists
    //     this.tenant = data;
    //     this.detailsForm.patchValue(data);
    //   } else {
    //     this.store.dispatch(getTenantDetails({payload: id})); // dispatch the action if state has no data

    //     this.store.pipe(select(tenantDetails)) // select date from state in store
    //     .subscribe(tenant => {
    //       this.tenant = tenant;
    //     });
    //   }
    //   console.log(data);
    // });


  }

  submit() {
    this.detailsForm.get('leaseId').setValue(this.tenant.leaseId);
    console.log('form data', this.detailsForm.value);
    this.store.dispatch(updateTenant({payload: this.detailsForm.value}));
  }

  goBack() {
    this.router.navigate(['/Manage/lease/tenants']);
  }

}

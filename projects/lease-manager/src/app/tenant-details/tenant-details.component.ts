import { Component, OnInit } from '@angular/core';
import { PropertyLeaseState } from '../store/lease-state';
import { Store, select } from '@ngrx/store';
import { tenantList, tenantDetails } from '../store/reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyTenant, LeaseService } from '@lib/app-core';
import { getTenantDetails } from '../store/actions/lease.actions';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss']
})
export class TenantDetailsComponent implements OnInit {

  id: number;
  tenant: PropertyTenant;

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
          userName: [null],
          firstName: [],
          lastName: [],
          contactEmail: [],
          contactTelephone: [],
          contactTelephone2: [],
          contactOthers: [],
          onlineAccessEnabled: [false],
          isActive: [true]
        });
  }

  GetTenantDetails(id: any) {
    debugger;
    // this.store.dispatch(getTenantDetails({payload: id}));
    // this.property$ =

    // User store to select the state

    this.store.pipe(select(tenantDetails))
    .subscribe(data => {
      if (data) { // select data from state store if data exists
        this.tenant = data;
        this.detailsForm.patchValue(data);
      } else {
        this.store.dispatch(getTenantDetails({payload: id})); // dispatch the action if state has no data

        this.store.pipe(select(tenantDetails)) // select date from state in store
        .subscribe(tenant => {
          this.tenant = tenant;
        });
      }
      console.log(data);
    });


}

  goBack() {
    this.router.navigate(['/Manage/lease/tenants']);
  }

}

import { Component, OnInit } from '@angular/core';
import { PropertyLeaseState } from '../store/lease-state';
import { Store, select } from '@ngrx/store';
import { tenantList } from '../store/reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyTenant, LeaseService } from '@lib/app-core';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.component.html',
  styleUrls: ['./tenant-details.component.scss']
})
export class TenantDetailsComponent implements OnInit {

  id: number;
  tenant: PropertyTenant;

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
    // this.store.pipe(select(tenantList))
    //     .subscribe(data => {
    //       this.tenants = data;
    //       const selected = this.tenants.find( o => o.id === this.id);
    //       this.tenant = selected;
    //       // this.tenant = selected;
    //       console.log(this.tenant);
    //     });
    this.leaseService.getTenantDetails(this.id)
        .subscribe(data => {
          this.tenant = data;
          console.log(this.tenant);
        });

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

  goBack() {
    this.router.navigate(['/Manage/lease/tenants']);
  }

}

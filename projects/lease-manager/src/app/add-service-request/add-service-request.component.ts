import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LeaseService, PropertyLease, PropertyTenant } from '@lib/app-core';
import { Location }  from '@angular/common';
import { Store } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { tenantList } from '../store/reducers';

@Component({
  selector: 'app-add-service-request',
  templateUrl: './add-service-request.component.html',
  styleUrls: ['./add-service-request.component.scss']
})
export class AddServiceRequestComponent implements OnInit {

  addForm: FormGroup;

  leaseAgreemnts$: Observable<PropertyLease[]>;
  tenants$: Observable<PropertyTenant[]>;
  tenantsOnLease;
  selectedLeaseId;

  constructor(private formBuilder: FormBuilder,
              private store: Store<PropertyLeaseState>,
              private leaseService: LeaseService,
              private location: Location) { }

  ngOnInit() {

    this.leaseAgreemnts$ = this.leaseService.getAllLeases();

    this.tenants$ = this.leaseService.getAllTenants();

    // this.store.select(tenantList).subscribe(tnts => {
    //   const tenantsByLease =
    // })

    this.addForm = this.formBuilder.group({
      requestSubject: [''],
      serviceCategory: [''],
      requestDetails: [''],
      urgent: [0],
      status: [0],
      leaseId: 0,
      requestorId: [0],
      workOrderId: [0],
      notes: ['']
    });



  }


  onPLeaseChange(id) {
    this.selectedLeaseId = id;
    this.addForm.get('leaseId').setValue(id);
    console.log('select lease id', this.selectedLeaseId);

    this.store.select(tenantList).subscribe(tnts => {
      if (tnts) {
        const tenantsByLease = tnts.filter(t => t.leaseId == id);
        this.tenantsOnLease = tenantsByLease;
      } else {
        this.tenantsOnLease = JSON.parse(localStorage.getItem('tenants')).filter(t => t.leaseId == id);
      }

      console.log('teant by lease id', this.tenantsOnLease);
    });

  }

  onTenantChange (id) {
    debugger;
    // this.store.select(tenantList).subscribe(tnts => {
    //   const tenantsByLease = tnts.filter(t => t.leaseId == this.selectedLeaseId);
    //   this.tenantsOnLease = tenantsByLease;
    // });

    // this.leaseService.getAllTenants().subscribe(tnts => {
    //   const tenantsByLease = tnts.filter(t => t.leaseId === this.selectedLeaseId);
    //   this.tenantsOnLease = tenantsByLease;
    //   console.log('tenant list on lease', this.tenantsOnLease);
    // });

    console.log('select tenant id', id);
    this.addForm.get('requestorId').setValue(id);
  }

  submit() {
    this.addForm.patchValue({
      status: 1
    });
    console.log('form submitted', this.addForm.value);
  }

  cancel() {
    this.location.back();
  }


}

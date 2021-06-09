import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { loadingStatus, serviceRequestDetails, tenantList } from '../store/reducers';
import { getServiceRequestDetails } from '../store/actions/lease.actions';

@Component({
  selector: 'app-servie-request-details',
  templateUrl: './servie-request-details.component.html',
  styleUrls: ['./servie-request-details.component.scss']
})
export class ServieRequestDetailsComponent implements OnInit {

  id: number;
  loading$: Observable<boolean>;
  request;
  requestingTenant;

  detailsForm: FormGroup;


  constructor(private store: Store<PropertyLeaseState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                // this.store.pipe(select(serviceRequestDetails))
                //           .subscribe(data => {
                //             this.request = data;
                //             // this.detailsForm.patchValue(data);
                //             console.log('request', data);
                //             // this.dataSource.data = this.lease;
                //             // console.log('payment', this.dataSource.data);


                //             this.store.select(getTenantList)
                //               .subscribe(tenant => {
                //                 if (tenant) {
                //                   const requestor = tenant.filter(t => t.id == this.request.requestorId);
                //                   this.requestingTenant = requestor;
                //                   console.log('requesting tenant', this.requestingTenant);
                //                 }
                //               });
                //           });
              }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.dispatch(getServiceRequestDetails({payload: this.id}));

    // this.detailsForm = this.formBuilder.group({
    //   id: [],
    //   requestSubject: [''],
    //   serviceCategory: [''],
    //   requestDetails: ['']
    // });


    this.store.pipe(select(serviceRequestDetails))
                          .subscribe(data => {
                            if (data) {
                              this.request = data;
                            // this.detailsForm.patchValue(data);
                              console.log('request', data);

                              this.store.select(tenantList)
                              .subscribe(tenant => {
                                if (tenant) {
                                  const requestor = tenant.filter(t => t.id == this.request.requestorId);
                                  this.requestingTenant = requestor;
                                  console.log('requesting tenant', this.requestingTenant);
                                } else {
                                  const tenatlist = JSON.parse(localStorage.getItem('tenants'));
                                  this.requestingTenant = tenatlist.filter(t => t.id == this.request.requestorId);
                                }
                              });
                            }

                            // this.dataSource.data = this.lease;
                            // console.log('payment', this.dataSource.data);

                          });

  }

  goBack() {
    this.router.navigate(['/Manage/lease/servicerequests/']);
  }


}

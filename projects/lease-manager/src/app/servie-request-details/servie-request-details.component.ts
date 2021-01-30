import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { loadingStatus, serviceRequestDetails } from '../store/reducers';
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

  detailsForm: FormGroup;


  constructor(private store: Store<PropertyLeaseState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.pipe(select(serviceRequestDetails))
                          .subscribe(data => {
                            this.request = data;
                            // this.detailsForm.patchValue(data);
                            console.log('request', data);
                            // this.dataSource.data = this.lease;
                            // console.log('payment', this.dataSource.data);
                          });
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

  }

  goBack() {
    this.router.navigate(['/Manage/lease/servicerequests/']);
  }


}

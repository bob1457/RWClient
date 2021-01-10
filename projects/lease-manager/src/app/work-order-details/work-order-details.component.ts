import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { getWorkOrderDetails, updateWorkOrder } from '../store/actions/lease.actions';
import { workOrderDetails } from '../store/reducers';
import { Observable } from 'rxjs';
import { loadingStatus } from '../store/reducers';

@Component({
  selector: 'app-work-order-details',
  templateUrl: './work-order-details.component.html',
  styleUrls: ['./work-order-details.component.scss']
})
export class WorkOrderDetailsComponent implements OnInit {

  id: number;
  loading$: Observable<boolean>;
  workorder;
  detailsForm: FormGroup;

  constructor(private store: Store<PropertyLeaseState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.pipe(select(workOrderDetails))
                          .subscribe(data => {
                            this.workorder = data;
                            // this.detailsForm.patchValue(data);
                            console.log('workorder', data);
                            // this.dataSource.data = this.lease;
                            // console.log('payment', this.dataSource.data);
                          });
              }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.dispatch(getWorkOrderDetails({payload: this.id}));

    this.detailsForm = this.formBuilder.group({
      workOrderId: [],
      workOrderName: [''],
      workOrderDetails: [],
      workOrderCategory: [''],
      workOrderType: [''],
      workOrderStatus: [''],
      startDate: [''],
      endDate: [''],
      isEmergency: [false],
      isOwnerAuthorized: [''],
      notes: ['']

    });
  }

  submit() {
    debugger;
    console.log('form', this.detailsForm.value);
    this.store.dispatch(updateWorkOrder({payload: this.detailsForm.value}));
  }

  goBack() {
    this.router.navigate(['/Manage/lease/workorders']);
  }

}
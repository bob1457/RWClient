import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateWorkOrder } from '../../store/actions/lease.actions';
import { PropertyLeaseState } from '../../store/lease-state';
import { loadingStatus, workOrderDetails } from '../../store/reducers';


@Component({
  selector: 'app-workorder-details-dialog',
  templateUrl: './workorder-details-dialog.component.html',
  styleUrls: ['./workorder-details-dialog.component.scss']
})
export class WorkorderDetailsDialogComponent implements OnInit {

  workOrder;
  updateWorkOrderForm: FormGroup;

  loading$: Observable<boolean>;

  constructor(private store: Store<PropertyLeaseState>,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<WorkorderDetailsDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: {id: number}) { }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.updateWorkOrderForm = this.formBuilder.group({
      id: Number,
      endDate: [''],
      workOrderStatus: [''],
      note:['']
    });



    this.store.select(workOrderDetails)
        .subscribe(res => {
          this.workOrder = res;
          console.log('wo-in-dialog', this.workOrder);
        });
  }

  upateWorkOrder(id: number) {
    debugger;
    this.updateWorkOrderForm.patchValue({
      id: Number(this.data.id)
    });
    console.log('pymt form', this.updateWorkOrderForm.value);
    try {
      this.store.dispatch(updateWorkOrder({payload: this.updateWorkOrderForm.value}));

    } catch {

    }
  }

}

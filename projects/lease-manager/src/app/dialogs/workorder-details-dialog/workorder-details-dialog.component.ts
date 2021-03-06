import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateInvoice, updateWorkOrder } from '../../store/actions/lease.actions';
import { PropertyLeaseState } from '../../store/lease-state';
import { invoiceList, loadingStatus, workOrderDetails } from '../../store/reducers';


@Component({
  selector: 'app-workorder-details-dialog',
  templateUrl: './workorder-details-dialog.component.html',
  styleUrls: ['./workorder-details-dialog.component.scss']
})
export class WorkorderDetailsDialogComponent implements OnInit {

  workOrder;
  updateWorkOrderForm: FormGroup;
  updateInvoiceForm: FormGroup;
  invoiceList;

  loading$: Observable<boolean>;

  constructor(private store: Store<PropertyLeaseState>,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<WorkorderDetailsDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: {id: number}) {

                console.log('passed in', data.id);

                // this.store.select(invoiceList)
                //           .subscribe(list => {
                //             if (list && this.workOrder) {
                //               this.invoiceList = list.filter(i => i.workOrderId === data.id);
                //               console.log('invoice in dialog filtered', this.invoiceList);
                //             }
                //           });
              }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));



    this.updateWorkOrderForm = this.formBuilder.group({
      workOrderId: [],
      // workOrderName: [''],
      workOrderDetails: [],
      workOrderCategory: [''],
      workOrderType: [''],
      workOrderStatus: [''],
      startDate: [''],
      endDate: [''],
      // isEmergency: [false],
      // isOwnerAuthorized: [''],
      note: ['']
    });

    this.updateInvoiceForm = this.formBuilder.group({
      invoiceId: [],
      isPaid: [false],
      paymentDate: [''],
      paymentMethod:[''],
      paymentAmount: 0,
      workOrderId: [],
      note: ['']
    });

    this.store.select(workOrderDetails)
        .subscribe(res => {
          this.workOrder = res;
          console.log('wo-in-dialog', this.workOrder);

          this.store.select(invoiceList)
                    .subscribe(list => {
                      if (list && this.workOrder) {
                        this.invoiceList = list.filter(i => i.workOrderId === this.workOrder.id);
                        console.log('invoice in dialog filtered', this.invoiceList);
                      }
                    });
        });
  }

  upateWorkOrder(id: number) {
    debugger;
    this.updateWorkOrderForm.patchValue({
      workOrderId: Number(this.data.id),
      // workOrderName: this.workOrder.workOrderName,
      workOrderDetails: this.workOrder.workOrderDetails,
      workOrderCategory: this.workOrder.workOrderCategory,
      workOrderType: this.workOrder.workOrderType,
      startDate: this.workOrder.startDate//,
      // endDate: this.workOrder.endDate,
      // workOrderStatus: this.workOrder.workOrderStatus,
      // isEmergency: this.workOrder.isEmergency,
      // isOwnerAuthorized: this.workOrder.isOwnerAuthorized
    });
    console.log('wo form', this.updateWorkOrderForm.value);
    try {
      this.store.dispatch(updateWorkOrder({payload: this.updateWorkOrderForm.value}));
      this.updateWorkOrderForm.markAsPristine();
    } catch {
      console.log('error occured');
    }
  }

  upateInvoice() {
    debugger;
    this.updateInvoiceForm.patchValue({
      workOrderId:this.data.id,
      invoiceId:this.workOrder.invoice.id
    });
    console.log('invoice form', this.updateInvoiceForm.value);
    try {
      this.store.dispatch(updateInvoice({payload: this.updateInvoiceForm.value}));
      this.updateInvoiceForm.markAsPristine();
    } catch {
      console.log('error occured');
    }
  }

}

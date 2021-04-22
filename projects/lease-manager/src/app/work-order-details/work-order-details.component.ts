import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { getWorkOrderDetails, updateWorkOrder, getAllInvoices, updateInvoice } from '../store/actions/lease.actions';
import { InvoiceList } from '@lib/dashboard';
import { getInviceList, invoiceList, workOrderDetails } from '../store/reducers';
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
  invoice;
  invoiceList: any[];
  detailsForm: FormGroup;
  updateInvoiceForm: FormGroup;

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

                            this.store.select(InvoiceList)
                                .subscribe(list => {
                                  if (list && this.workorder) {
                                    this.invoiceList = list.filter(i => i.workOrderId === this.workorder.id);
                                    console.log('invoice in work order details', this.invoiceList);
                                  }
                                });
                            // this.dataSource.data = this.lease;
                            // console.log('payment', this.dataSource.data);
                          });
              }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.dispatch(getWorkOrderDetails({payload: this.id}));

    // this.store.dispatch(getAllInvoices());

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
  }

  submit() {
    debugger;
    console.log('form', this.detailsForm.value);
    this.store.dispatch(updateWorkOrder({payload: this.detailsForm.value}));
  }

  upateInvoice() {
    debugger;
    this.updateInvoiceForm.patchValue({
      workOrderId: Number(this.id),
      invoiceId: this.workorder.invoice.id
    });
    console.log('invoice form', this.updateInvoiceForm.value);
    try {
      this.store.dispatch(updateInvoice({payload: this.updateInvoiceForm.value}));
      this.updateInvoiceForm.markAsPristine();
    } catch {
      console.log('error occured');
    }
  }

  goBack() {
    this.router.navigate(['/Manage/lease/workorders']);
  }

}

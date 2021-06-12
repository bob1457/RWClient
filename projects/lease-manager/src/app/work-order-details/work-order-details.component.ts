import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { getWorkOrderDetails, updateWorkOrder, getAllInvoices, updateInvoice, addInvoice } from '../store/actions/lease.actions';
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
  invoices: any[];
  detailsForm: FormGroup;
  updateInvoiceForm: FormGroup;
  addInvoiceForm: FormGroup;

  showAdd = false;



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

                            this.store.select(invoiceList)
                                .subscribe(list => {
                                  if (list && this.workorder) {
                                    this.invoices = list.filter(i => i.workOrderId === this.workorder.id);
                                    console.log('invoice in work order details', this.invoices);
                                  }
                                });
                            // this.dataSource.data = this.lease;
                            // console.log('payment', this.dataSource.data);
                          });
              }

  ngOnInit() {

    const today = new Date()

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.dispatch(getWorkOrderDetails({payload: this.id}));

    this.store.dispatch(getAllInvoices());

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

    this.addInvoiceForm = this.formBuilder.group({
      invoiceTitle: [''],
      invoiceAmount: 0,
      invoiceDocUrl: [''],
      invoiceDate: [''],
      isPaid: [false],
      paymentDate: [''],
      paymentMethod:[''],
      paymentAmount: 0,
      workOrderId: [],
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

  showAddnvoice() {
    this.showAdd = !this.showAdd;
  }

  goBack() {
    this.router.navigate(['/Manage/lease/workorders']);
  }

  cancel() {
    this.showAdd = false;
  }

  addInvoice() {
    this.addInvoiceForm.patchValue({
      workOrderId: Number(this.id),
    });
    console.log('add form', this.addInvoiceForm.value);
    this.store.dispatch(addInvoice({payload: this.addInvoiceForm.value}));

    this.showAdd = false;
  }

}

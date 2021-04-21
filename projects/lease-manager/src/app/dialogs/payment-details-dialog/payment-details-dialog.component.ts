import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef,  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateRentPayment } from '../../store/actions/lease.actions';
import { PropertyLeaseState } from '../../store/lease-state';
import { loadingStatus, rentPaymentDetails } from '../../store/reducers';

@Component({
  selector: 'app-payment-details-dialog',
  templateUrl: './payment-details-dialog.component.html',
  styleUrls: ['./payment-details-dialog.component.scss']
})
export class PaymentDetailsDialogComponent implements OnInit {

  dataIn;
  payment;
  updateRentForm: FormGroup;


  loading$: Observable<boolean>;

  constructor( private store: Store<PropertyLeaseState>,
               private formBuilder: FormBuilder,
               public dialogRef: MatDialogRef<PaymentDetailsDialogComponent>,
               @Optional() @Inject(MAT_DIALOG_DATA) public data: {id: number}) { }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.updateRentForm = this.formBuilder.group({
      id: [],
      isOnTime: [false],
      rentAmount: [''],
      paymentReceivedDate: [''],
      note: ['']
    });

    this.store.select(rentPaymentDetails)
                          .subscribe(res => {
                            this.payment = res;
                            console.log('py-in-dialog', this.payment);
                          });

    // this.dataIn = this.data.txt;
    // this.payment = this.data.py;
    // console.log('dat in', this.data.py);
    // console.log('dat in', this.payment);
  }

  updateRentPayment() {
    debugger;
    this.updateRentForm.patchValue({
      id: Number(this.data.id)
    });
    console.log('pymt form', this.updateRentForm.value);
    try {
      this.store.dispatch(updateRentPayment({payload: this.updateRentForm.value}));
      this.updateRentForm.markAsPristine();
    } catch {
      console.log('Error occured!');
    }

  }

}

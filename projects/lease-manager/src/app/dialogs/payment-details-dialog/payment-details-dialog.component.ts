import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef,  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PropertyLeaseState } from '../../store/lease-state';
import { rentPaymentDetails } from '../../store/reducers';

@Component({
  selector: 'app-payment-details-dialog',
  templateUrl: './payment-details-dialog.component.html',
  styleUrls: ['./payment-details-dialog.component.scss']
})
export class PaymentDetailsDialogComponent implements OnInit {

  dataIn;
  payment;

  constructor( private store: Store<PropertyLeaseState>,
               public dialogRef: MatDialogRef<PaymentDetailsDialogComponent>,
               @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    this.store.select(rentPaymentDetails)
                          .subscribe(data => {
                            this.payment = data;
                            console.log('py-in-dialog', this.payment);
                          });

    // this.dataIn = this.data.txt;
    // this.payment = this.data.py;
    // console.log('dat in', this.data.py);
    // console.log('dat in', this.payment);
  }

}

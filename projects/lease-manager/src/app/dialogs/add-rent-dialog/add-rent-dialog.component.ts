import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PropertyLeaseState } from '../../store/lease-state';

@Component({
  selector: 'app-add-rent-dialog',
  templateUrl: './add-rent-dialog.component.html',
  styleUrls: ['./add-rent-dialog.component.scss']
})
export class AddRentDialogComponent implements OnInit {

  addForm: FormGroup;

  months = [
    {name: 'January'},
    {name: 'February'},
    {name: 'March'},
    {name: 'April'},
    {name: 'May'},
    {name: 'June'},
    {name: 'July'},
    {name: 'August'},
    {name: 'September'},
    {name: 'October'},
    {name: 'November'},
    {name: 'December'}
  ];

  years = [
    {name: 2020},
    {name: 2021},
    {name: 2022},
    {name: 2023},
    {name: 2024},
    {name: 2026},
    {name: 2027},
    {name: 2028},
    {name: 2029}
  ];

  constructor(private store: Store<PropertyLeaseState>,
              private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddRentDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      leaseId: [null],
      scheduledPaymentAmt: [''],
      actualPaymentAmt: [''],
      payMethod: [],
      paymentDueDate: [''],
      paymentReceivedDate: [''],
      isOnTime: [true],
      inChargeTenantId: [0],
      rentalForMonth: [''],
      rentalForYear: ['']
    });

    console.log('lease id', this.data.leaseId);
  }

  addRent() {
    debugger;
    this.addForm.get('leaseId').setValue(Number(this.data.leaseId));
    this.addForm.patchValue({
      // leaseId: this.data.leaseId,
      // scheduledPaymentAmt: this.data.rentDueAmount,
      // paymentDueDate: this.data.rentDue
    });

    console.log('form data', this.addForm.value);
    // this.dialogRef.close(this.addForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}

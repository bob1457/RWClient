import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateNoticeStatus } from '../../store/actions/lease.actions';
import { PropertyLeaseState } from '../../store/lease-state';
import { loadingStatus } from '../../store/reducers/lease.reducers';

@Component({
  selector: 'app-update-status-dialog',
  templateUrl: './update-status-dialog.component.html',
  styleUrls: ['./update-status-dialog.component.scss']
})
export class UpdateStatusDialogComponent implements OnInit {

  statusForm: FormGroup;

  loading$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder,
              private store: Store<PropertyLeaseState>,
              public dialogRef: MatDialogRef<UpdateStatusDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: { id: number , isActive: number}) { }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    // console.log('notice id in dialog', this.data.id);
    // console.log('satus in dialog', this.data.isActive);

    this.statusForm = this.formBuilder.group({
      id: Number([]) ,
      // leaseId: Number([]),
      // // type: Number([]),
      // type: Number([]),
      // noticeDesc: [''],
      // isServed: [true],
      // howIsServed: Number([]),
      // serviceDate: [''],
      isActive: []
      // outstandingRent: Number([0]),
      // outstandingUtilities: Number([0]),
      // utilityDueDate: [''],
      // rentDueDate: [''],
      // requiredMoveOutDate: [''],
    });
  }

  update() {
    debugger;
    this.statusForm.patchValue({
      id: this.data.id,
      isActive: !this.data.isActive
    });
    console.log('form to update status', this.statusForm.value);


    try {
      this.store.dispatch(updateNoticeStatus({ payload: this.statusForm.value }));
      this.dialogRef.close();
    } catch (err) {
      console.log('error occured', err.message);
    }
  }

  cancel() {

  }

}

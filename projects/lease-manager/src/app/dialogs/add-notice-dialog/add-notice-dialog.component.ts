import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LeaseService } from '@lib/app-core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addNotice } from '../../store/actions/lease.actions';
import { PropertyLeaseState } from '../../store/lease-state';
import { loadingStatus } from '../../store/reducers/lease.reducers';

@Component({
  selector: 'app-add-notice-dialog',
  templateUrl: './add-notice-dialog.component.html',
  styleUrls: ['./add-notice-dialog.component.scss']
})
export class AddNoticeDialogComponent implements OnInit {

  addNoticeForm: FormGroup;

  reasons = new FormControl();
  reasonList; // = [];
  noticeType;
  methodType;

  loading$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder,
              private store: Store<PropertyLeaseState>,
              public dialogRef: MatDialogRef<AddNoticeDialogComponent>,
              private leaseService: LeaseService,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: { id: number }) { }

  ngOnInit() {

    this.loading$ = this.store.select(loadingStatus);

    debugger;
    // Note, the following API call should be implemented on Dropdown box of notice type is selected (so that type is available)
    // this.leaseService.getNoticeReasonItems(0) // now the type code is hard-codded for testing ONLY!!!
    //   .subscribe(items => {
    //     console.log('reason list', items);
    //     this.reasonList = items;
    //     console.log('reason list in dialog', this.reasonList);
    //     this.addReasonItems();
    //   });

    this.addNoticeForm = this.formBuilder.group({
      reasonInNotice: this.formBuilder.array([
        // this.reasonItems(),
        // this.reasonItems()
      ]),

      leaseId: Number([]),
      // type: Number([]),
      type: Number([]),
      noticeDesc: [''],
      isServed: [true],
      howIsServed: Number([]),
      serviceDate: [''],
      isActive: [true],
      outstandingRent: Number([0]),
      outstandingUtilities: Number([0]),
      utilityDueDate: [''],
      requiredMoveOutDate: [''],
    });

    // this.addReasonItems();
  }

  reasonInNotice(): FormArray {
    return this.addNoticeForm.get('reasonInNotice') as FormArray;
  }

  reasonItems(): FormGroup {
    return this.formBuilder.group({
      serviceNoticeId: Number([0]),
      reasonCodeId: [],
      applied: [false],
      // reasonClause: ['']
    });
  }

  addReasonItems() {
    // for (const item of Object.keys(this.reasonList)) {
    //   // this.reasonInNotice().push(this.reasonItems());
    //   this.reasonInNotice().push(this.formBuilder.group({
    //       serviceNoticeId: 0,
    //       reasonCodeId: item[0],
    //       applied: false,
    //       reasonClause: item[2]
    //     })
    //   );
    // }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.reasonList.length; i++) {
      this.reasonInNotice().push(this.reasonItems());
    }

  }

  onMethodChange(id) {
    console.log('selected method', id);
    this.methodType = id;
  }

  onTypeChange(id) {
    this.noticeType = id;
    console.log('selected type', this.noticeType);

    this.addNoticeForm.patchValue({
      type: id
    });

    this.leaseService.getNoticeReasonItems(id) // now the type code is hard-codded for testing ONLY!!!
      .subscribe(items => {
        console.log('reason list', items);
        this.reasonList = items;
        console.log('reason list in dialog', this.reasonList);
        this.addReasonItems();
      });
  }

  CreateNotice() {
    debugger;
    this.addNoticeForm.patchValue({
      leaseId: Number(this.data.id),
      type: Number(this.noticeType),
      howIsServed: Number(this.methodType)
    });
    // this.addNoticeForm.value;
    console.log('notice form', this.addNoticeForm.value);

    try {
      this.store.dispatch(addNotice({ payload: this.addNoticeForm.value }));
      this.dialogRef.close();
    } catch (err) {
      console.log('error occured', err.message);
    }

    // this.dialogRef.close();

  }

}

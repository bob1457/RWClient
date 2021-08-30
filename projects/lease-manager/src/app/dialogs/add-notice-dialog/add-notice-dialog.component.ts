import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-notice-dialog',
  templateUrl: './add-notice-dialog.component.html',
  styleUrls: ['./add-notice-dialog.component.scss']
})
export class AddNoticeDialogComponent implements OnInit {

  addNoticeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addNoticeForm = this.formBuilder.group({
      reasonInNotice: this.formBuilder.array([]),

      leaseId: [],
      type: Number([]),
      noticeDesc: [''],
      isServed: [true],
      howIsServed: Number([]),
      serviceDate: [''],
      isActive: [true],
      outstandingRent: [0],
      outstandingUtilities: [0],
      utilityDueDate: [''],
      requiredMoveOutDate: [''],
    });
  }

  reasonInNotice(): FormArray {
    return this.addNoticeForm.get('reasonInNotice') as FormArray;
  }

  reasonItems(): FormGroup {
    return this.formBuilder.group({
      serviceNoticeId: [],
      reasonCodeId: [],
      applied: [false]
    });
  }

  addReasonItems() {
    this.reasonInNotice().push(this.reasonItems());
  }

}

import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-notice-details-dialog',
  templateUrl: './notice-details-dialog.component.html',
  styleUrls: ['./notice-details-dialog.component.scss']
})
export class NoticeDetailsDialogComponent implements OnInit {

  detailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: { id: number }) { }

  ngOnInit() {

    this.detailsForm = this.formBuilder.group({
      leaseId: Number([]),
      // type: Number([]),
      type: Number([]),
      noticeDesc: [''],
      isServed: [true],
      howIsServed: Number([]),
      serviceDate: [''],
      isActive: [true],
      outstandingRent: Number([1850]),
      outstandingUtilities: Number([0]),
      utilityDueDate: [''],
      requiredMoveOutDate: [''],
    });

    console.log('notice id in details', this.data.id);
  }

  getNoticeDetails(id: number) {

  }

}

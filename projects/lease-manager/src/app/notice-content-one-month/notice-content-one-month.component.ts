import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notice-content-one-month',
  templateUrl: './notice-content-one-month.component.html',
  styleUrls: ['./notice-content-one-month.component.scss']
})
export class NoticeContentOneMonthComponent implements OnInit {

  @Input() notice: any;
  @Input() lease;
  @Input() serveMethod;

  detailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
      // outstandingRent: Number([0]),
      // outstandingUtilities: Number([0]),
      // utilityDueDate: [''],
      // rentDueDate: [''],
      requiredMoveOutDate: [''],
    });
  }

}

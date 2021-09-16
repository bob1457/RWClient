import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notice-content-ten-day',
  templateUrl: './notice-content-ten-day.component.html',
  styleUrls: ['./notice-content-ten-day.component.scss']
})
export class NoticeContentTenDayComponent implements OnInit {

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
      outstandingRent: Number([0]),
      outstandingUtilities: Number([0]),
      utilityDueDate: [''],
      rentDueDate: [''],
      requiredMoveOutDate: [''],
    });
  }

}

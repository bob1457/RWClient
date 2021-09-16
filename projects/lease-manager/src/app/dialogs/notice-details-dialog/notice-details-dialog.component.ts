import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { getNoticeDetails } from '../../store/actions/lease.actions';
import { PropertyLeaseState } from '../../store/lease-state';
import { leaseDetails, noticeDetails, noticeList } from '../../store/reducers';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-notice-details-dialog',
  templateUrl: './notice-details-dialog.component.html',
  styleUrls: ['./notice-details-dialog.component.scss']
})
export class NoticeDetailsDialogComponent implements OnInit {

  detailsForm: FormGroup;
  lease;
  notice;
  noticeType = '';

  serveMethod = [
    'In person to the tenant or agent of the tenant or an adult (over 19) who appears to live with the tenant',
    'Sending a copy by registered mail to the address at which the person resides',
    'Leaving a copy in a mailbox or mail slot at the address where the person resides',
    'Attaching a copy to the door or other conspicuous place where the tenant resides',
    'Faxes it to a fax number you have provided as an address for service',
    'Email to an email address you have provided as an address for service',
    'As ordered by the Director of the Residential Tenancy Branch (attach copy of Substituted Service Order)'
  ];

  constructor(private formBuilder: FormBuilder,
              private store: Store<PropertyLeaseState>,
              public dialogRef: MatDialogRef<NoticeDetailsDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: { id: number }) {

    this.store.select(leaseDetails).subscribe(res => {
      this.lease = res;
      console.log('lease in dialog', this.lease);
    });

    // this.store.select(noticeList)
    //   .subscribe(notices => {
    //     if (notices) {
    //       this.notice = notices.find(n => n.id === this.data.id);
    //     }
    //     console.log('notice details', this.notice);
    //   });
    this.store.select(noticeDetails).subscribe(notice => {
      this.notice = notice;
      console.log('notice details', this.notice);
      if (this.notice && this.notice.type === 0) {
        this.noticeType = 'Ten Day Notice';
      }

      if (this.notice && this.notice.type === 1) {
        this.noticeType = 'One Month Notice';
      }

      if (this.notice && this.notice.type === 2) {
        this.noticeType = 'Two Month Notice';
      }
    });

  }

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

    this.getNoticeDetails(this.data.id);

    console.log('notice id in details', this.data.id);
  }

  getNoticeDetails(id: number) {
    this.store.dispatch(getNoticeDetails({ payload: id }));
  }

  Ok() {
    this.dialogRef.close();
  }

  download() {
    debugger;

    const element = document.getElementById('pdfdoc');

    const options = {
      margin: 0.2,
      filename: this.noticeType, // 'Ten Day Notice', // this.contract.managementContractTitle + '_' + timestamp + '_contract.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  }

}

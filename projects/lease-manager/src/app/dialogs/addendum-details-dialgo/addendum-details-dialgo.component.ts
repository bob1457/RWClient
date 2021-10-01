import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { getUserInfo } from '@lib/auth';
import { PropertyState } from 'projects/property-manager/src/app/store/property.state';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-addendum-details-dialgo',
  templateUrl: './addendum-details-dialgo.component.html',
  styleUrls: ['./addendum-details-dialgo.component.scss']
})
export class AddendumDetailsDialgoComponent implements OnInit {

  user;

  constructor(private store: Store<PropertyState>,
              public dialogRef: MatDialogRef<AddendumDetailsDialgoComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: { addendum: any }) {

    this.store.pipe(select(getUserInfo))
      .subscribe(user => {
        if (user) {
          // this.pm = localStorage.getItem('user');
          this.user = user;
        } else {
          this.user = JSON.parse(localStorage.getItem('auth'));
        }
        console.log('pm', this.user);
      });
  }

  ngOnInit() {

    console.log('addendum in dialog', this.data.addendum);
  }

  download() {
    debugger;

    const element = document.getElementById('pdfdoc');

    const options = {
      margin: 0.2,
      // tslint:disable-next-line:max-line-length
      filename: 'Rental Agreement_' + this.data.addendum.leaseId +  '_Addendum', // this.contract.managementContractTitle + '_' + timestamp + '_contract.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  }

  Ok() {
    this.dialogRef.close();
  }

}

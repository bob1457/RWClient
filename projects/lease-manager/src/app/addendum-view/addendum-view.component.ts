import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { PropertyState } from 'projects/property-manager/src/app/store/property.state';
import { getUserInfo } from '@lib/auth';
import { adddendumForLease } from '../store/reducers/lease.reducers';
import { getAddendumForLease } from '../store/actions/lease.actions';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-addendum-view',
  templateUrl: './addendum-view.component.html',
  styleUrls: ['./addendum-view.component.scss']
})
export class AddendumViewComponent implements OnInit {

  id;
  addendumDetails;
  user;
  addendums;
  noticeType;

  constructor(private store: Store<PropertyState>,
              private location: Location,
              private actRoute: ActivatedRoute) {
    this.id = this.actRoute.snapshot.params.id;
    console.log(this.id);

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

    this.store.select(adddendumForLease)
      .subscribe(addedum => {
        if (addedum) {
          this.addendums = addedum; // .filter(l => l.leaseId == this.id);
          console.log('addendums new page', this.addendums);
        }
      });
  }
  ngOnInit(): void {
    this.getAddendums(this.id);
  }

  getAddendums(id) { // is: lease id
    this.store.dispatch(getAddendumForLease({ payload: id }));
  }

  Ok() {
    this.location.back();
  }

  download() {
    debugger;

    const element = document.getElementById('pdfdoc');

    const options = {
      margin: 0.2,
      // tslint:disable-next-line:max-line-length
      filename: 'Rental Agreement_' + this.addendums[0].leaseId + '_Addendum', // this.contract.managementContractTitle + '_' + timestamp + '_contract.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  }


}

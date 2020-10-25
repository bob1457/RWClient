import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { PropertyLeaseState } from '../store/lease-state';
import { leaseDetails } from '../store/reducers';
import { Observable } from 'rxjs';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-full-lease-agreement',
  templateUrl: './full-lease-agreement.component.html',
  styleUrls: ['./full-lease-agreement.component.scss']
})
export class FullLeaseAgreementComponent implements OnInit {

  id: number;
  agreementDetails;
  agreement$: Observable<any>;

  @ViewChild('pdfdoc', {static: false}) pdfdoc: ElementRef;

  constructor(private store: Store<PropertyLeaseState>,
              private actRoute: ActivatedRoute,
              private location: Location,
              private router: Router) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.select(leaseDetails)
                    .subscribe(lease => {
                      this.agreementDetails = lease;
                      console.log('agreement', this.agreementDetails);
                    });
              }

  ngOnInit() {

    this.agreement$ = this.store.select(leaseDetails);

  }

  Ok() {
    this.location.back();
  }

  download() {
    debugger;

    const element = document.getElementById('pdfdoc');

    const options = {
      margin:       0.2,
      filename:     'Rental_Agreement', // this.contract.managementContractTitle + '_' + timestamp + '_contract.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();

  }

}

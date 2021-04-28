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
  numberOfTenants;
  numberOfLandlords;
  totalEntity = 0;
  page2 = false;
  pageNumber = 1;
  totalPageNumber = 1;

  @ViewChild('pdfdoc', {static: false}) pdfdoc: ElementRef;

  constructor(private store: Store<PropertyLeaseState>,
              private actRoute: ActivatedRoute,
              private location: Location,
              private router: Router) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

              //   this.store.select(leaseDetails)
              //       .subscribe(lease => {
              //         if (lease) {
              //           this.agreementDetails = lease;
              //           localStorage.setItem('agreement', JSON.stringify(this.agreementDetails));
              //         } else {
              //           this.agreementDetails = JSON.parse(localStorage.getItem('agreement'));
              //         }

              //         this.numberOfTenants = this.agreementDetails.tenant.length;
              //         this.numberOfLandlords = this.agreementDetails.rentalProperty.rentalPropertyOwners.length;

              //         this.totalEntity = this.numberOfTenants + this.numberOfLandlords;
              //         console.log('total entity', this.totalPageNumber);
              //         console.log('No. Tenants',this.numberOfTenants);
              //         console.log('No. Landloard',this.numberOfLandlords);
              //         console.log('agreement', this.agreementDetails);
              //       });
              }

  ngOnInit() {
    debugger;

    this.agreement$ = this.store.select(leaseDetails);

    // this.totalEntity = this.agreementDetails.rentalPropertyOwners.length + this.agreementDetails.tenant.length;
    // console.log('total entity', this.totalPageNumber);

    // if ( this.totalEntity > 7 && this.totalEntity < 10) {
    //   this.page2 = true;
    //   this.totalPageNumber = 2;
    // }

    this.store.select(leaseDetails)
                    .subscribe(lease => {
                      if (lease) {
                        this.agreementDetails = lease;
                        localStorage.setItem('agreement', JSON.stringify(this.agreementDetails));
                      } else {
                        this.agreementDetails = JSON.parse(localStorage.getItem('agreement'));
                      }

                      this.numberOfTenants = this.agreementDetails.tenant.length;
                      this.numberOfLandlords = this.agreementDetails.rentalProperty.rentalPropertyOwners.length;

                      this.totalEntity = this.numberOfTenants + this.numberOfLandlords;
                      console.log('total entity', this.totalPageNumber);
                      console.log('No. Tenants',this.numberOfTenants);
                      console.log('No. Landloard',this.numberOfLandlords);
                      console.log('agreement', this.agreementDetails);
                    });


    if ( this.numberOfLandlords > 2 && this.numberOfLandlords < 4) {
      this.page2 = true;
      if (this.numberOfTenants > 2) { // additional tenatns
        this.totalPageNumber = 2;
        this.pageNumber = 2;
      } else { // no additional tenants, only additioanl landloard, only one additional page
        this.totalPageNumber = 1;
      }
    }

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

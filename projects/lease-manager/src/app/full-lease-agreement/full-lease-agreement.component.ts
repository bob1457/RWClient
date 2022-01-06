import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { PropertyLeaseState } from '../store/lease-state';
import { leaseDetails } from '../store/reducers';
import { Observable } from 'rxjs';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';
import { User, getUserInfo } from '@lib/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LeaseService } from '@lib/app-core';

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
  user: User;
  lease;
  agent: User;
  saving = false;
  done = false;


  uploadForm: FormGroup;
  serverUrl = 'http://localhost:63533/api/Lease/agreement/save';

  @ViewChild('pdfdoc', {static: false}) pdfdoc: ElementRef;

  constructor(private store: Store<PropertyLeaseState>,
              private actRoute: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder,
              private leaseService: LeaseService,
              private httpClient: HttpClient,
              private router: Router) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.pipe(select(getUserInfo))
                  .subscribe(user => {
                    if (!user) {
                      this.user = JSON.parse(localStorage.getItem('auth'));
                      this.agent = JSON.parse(localStorage.getItem('auth'));
                    } else {
                      this.user = user;
                      this.agent = user;
                    }
                    console.log('current user', this.user);
                  });

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

  finalPdf;

  ngOnInit() {
    debugger;

    this.agreement$ = this.store.select(leaseDetails);

    this.uploadForm = this.formBuilder.group({
      leaseId: [0],
      encodedFile: ['']
    });

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
                        this.lease = lease;
                        localStorage.setItem('agreement', JSON.stringify(this.agreementDetails));
                      } else {
                        this.agreementDetails = JSON.parse(localStorage.getItem('agreement'));
                      }

                      this.numberOfTenants = this.agreementDetails.tenant.length;
                      this.numberOfLandlords = this.agreementDetails.rentalProperty.ownerProperty.length;

                      this.totalEntity = this.numberOfTenants + this.numberOfLandlords;
                      // console.log('total entity', this.totalPageNumber);
                      console.log('No. Tenants',this.numberOfTenants);
                      console.log('No. Landloard',this.numberOfLandlords);
                      // console.log('agreement sent to rpt view', this.agreementDetails);
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

  openInput() {
    document.getElementById('fileInput').click();
  }

  onChange(files) {
    debugger;
    // const file = files.[0];
    this.saving = true;
    console.log(files);

    // this.showErr = false;

    if (files[0].type === 'application/pdf') {
      // this.store.dispatch(uploadPropertyImage({ payload: files, rentalPropertyId: this.listing.rentalPropertyId }));
      // alert('ACCEPTED !!!');
      this.leaseService.uploadLeseAgreement(files, this.lease.id).subscribe(res => {
        this.saving = false;
        this.done = true;
        setTimeout(() => { this.done = false; }, 2000);
        console.log('response', res);
      });

    } else {
      alert('ONLY PDF files are accepted');
      // this.showErr = true;
    }


  }

  download() {
    debugger;

    const element = document.getElementById('pdfdoc');

    const options = {
      margin:       0.2,
      filename:     'Rental_Agreement', // this.contract.managementContractTitle + '_' + timestamp + '_contract.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    // pagebreak: { before: '.beforeClass', after: ['#after1'], avoid: 'avoid-all' }
    };

    html2pdf().from(element).set(options).save();

  }

  save() {
    // save pdf as base64 or blob and upload to server?
    debugger;
    this.saving = true;

    const element = document.getElementById('pdfdoc');

    const options = {
      margin: 0.2,
      filename: 'Rental_Agreement', // this.contract.managementContractTitle + '_' + timestamp + '_contract.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };



    // html2pdf().from(element).output('datauristring').then(pdf => {
    //   console.log('b64 file', pdf);
    //   this.finalPdf = pdf;
    //   const pdfFile = this.finalPdf.split(',')[1];

    //   console.log('final doc 64', this.finalPdf.split(',')[1]);

    //   // this.upLoadFile(pdfFile);

    // });

    html2pdf().from(element).output().then(pdf => {
      const fileData = btoa(pdf); // generate base64 string
      console.log('btoa file', fileData);

      // this.saving = true;
      this.upLoadFile(fileData);
      // debugger;
      // this.httpClient.post<any>(this.serverUrl, fileData)
      //   .subscribe(res => console.log('response', res));

    });

    // html2pdf().from(element).output('datauri');

    // const blobPdf = new Blob([html2pdf().from(element).output('blob'), { type: 'application/pdf' }]);

    // const blobUrl = URL.createObjectURL(blobPdf);

    // // window.open(blobUrl);

    // console.log('blob url', blobUrl);

    // const file = blobPdf;

    // this.uploadForm.get('document').setValue(file);
    // this.upLoadFile(file);

  }

  private upLoadFile(file: any) {
    debugger;
    this.uploadForm.get('encodedFile').setValue(file);
    this.uploadForm.patchValue({
      leaseId: this.lease.id
    });

    // const formData = new FormData();

    // formData.append('file', this.uploadForm.get('document').value);
    console.log('upload form', this.uploadForm.value);

    this.leaseService.saveFinalAgreement(this.uploadForm.value).subscribe(
      res => {
        this.saving = false;
        this.done = true;
        setTimeout(() => { this.done = false; }, 2000);
        console.log('response', res);
      });

    // this.httpClient.post<any>(this.serverUrl, this.uploadForm.value)
    //   .subscribe(res => {
    //     this.saving = false;
    //     this.done = true;
    //     setTimeout(() => { this.done = false }, 2000 );
    //     console.log('response', res);
    //     // function setDoneFalse() { this.done = false; }
    //   });

  }

}

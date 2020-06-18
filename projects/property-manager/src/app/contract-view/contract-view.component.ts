import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { ManagementContract } from '@lib/app-core';
import { contractDetails } from '../store/reducers/property.reducer';
import { getUserInfo, User } from '@lib/auth';
// import {jsPDF} from 'jspdf';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.scss']
})
export class ContractViewComponent implements OnInit {

  id: number;
  contract: ManagementContract;
  pm: User;

  @ViewChild('pdfdoc', {static: false}) pdfdoc: ElementRef;

  constructor( private store: Store<PropertyState>,
               private actRoute: ActivatedRoute,
               private location: Location,
               private router: Router) {
              this.id = this.actRoute.snapshot.params.id;
              console.log(this.id);
  }

  ngOnInit() {
    debugger;
    this.store.pipe(select(contractDetails))
              .subscribe(data => this.contract = data);
    this.store.pipe(select(getUserInfo))
              .subscribe(user => {
                this.pm = user;
              });
  }

  Ok() {
    this.location.back();
  }

  download() {
    debugger;

    const element = document.getElementById('pdfdoc');

    // html2canvas(element).then((canvas) => {
    //   var imgData = canvas.toDataURL('image/png');

    //   var doc = new jsPDF();

    //   doc.addImage(imgData, 0, 0, 200, 500);

    //   doc.save('doc.pdf');

    // });

    const options = {
      margin:       1,
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
    /*
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor'(element, renderer) {
        return true;
      }
    };

    const pdfcontent = this.pdfdoc.nativeElement;

    doc.fromHTML(pdfcontent.innerHTML, 15, 15, {
      width: 200,
      elementHandlers: specialElementHandlers
    });

    const fileName = this.contract.ManagementContractTitle; // undefined?

    doc.save('contract.pdf');
    */
  }

}

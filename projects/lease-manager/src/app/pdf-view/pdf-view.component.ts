import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaseService } from '@lib/app-core';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss']
})
export class PdfViewComponent implements OnInit {

  @Input() leaseId;
  newB64 = '';
  newSrc = '';
  baseUrl = 'http://localhost:63533';

  retrieveForm: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private leaseService: LeaseService) { }

  ngOnInit() {
    debugger;
    console.log('lease id passed into', this.leaseId);

    this.retrieveForm = this.formBuilder.group({
      leaseId: this.leaseId
    });

    // this.leaseService.retrieveAgreement(this.retrieveForm.value)
    //   .subscribe(res => {
    //     this.newB64 = res;
    //     // this.newSrc = JSON.stringify(res);
    //     // this.newSrc = this.newSrc.split(':')[1];
    //     // console.log('parsed', this.newSrc);
    //     console.log('returned file', this.newB64);
    //   });

    this.httpClient.post(`${this.baseUrl}/api/Lease/agreement/retrieve`, this.retrieveForm.value, { responseType: 'text' })
      .subscribe(res => {
        this.newB64 = res;
        console.log('doc returned', this.newB64);
      });
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agreement-party-view',
  templateUrl: './agreement-party-view.component.html',
  styleUrls: ['./agreement-party-view.component.scss']
})
export class AgreementPartyViewComponent implements OnInit {

  @Input() lease;
  @Input() pageNumber;
  @Input() pageNum;
  @Input() tenantNo;
  @Input() landlordNo;

  isLandlord1 = false;
  isLandlord2 = false;
  isLandlord3 = false;
  isTenant1 = false;
  isTenant2 = false;
  isTenant3 = false;

  // page2 = false;

  constructor() { }

  ngOnInit() {

    // if (this.lease.rentalPropertyOwners.length + this.lease.tenant.length > 3) {
    //   this.page2 = true;
    // }

    if (this.landlordNo > 2 ) {
      switch (this.landlordNo) {
        case 3:
          this.isLandlord1 = true;
          break;
        case 4:
          this.isLandlord2 = true;
          this.isLandlord1 = true;
          break;
        case 5:
          this.isLandlord2 = true;
          this.isLandlord1 = true;
          this.isLandlord3 = true;
          break;
        default:
      }
    }

    if (this.tenantNo > 2 ) {
      switch (this.tenantNo) {
        case 3:
          this.isTenant1 = true;
          break;
        case 4:
          this.isTenant1 = true;
          this.isTenant2 = true;
          break;
        case 5:
          this.isTenant1 = true;
          this.isTenant2 = true;
          this.isTenant3 = true;
          break;
        case 5:
          this.isTenant3 = true;
          break;
        default:
      }
    }

  }

}

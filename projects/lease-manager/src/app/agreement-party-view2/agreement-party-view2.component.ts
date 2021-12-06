import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agreement-party-view2',
  templateUrl: './agreement-party-view2.component.html',
  styleUrls: ['./agreement-party-view2.component.scss']
})
export class AgreementPartyView2Component implements OnInit {

  @Input() lease;
  @Input() pageNumber;
  @Input() pageNum;
  @Input() landlordNo;

  isLandlord1 = false;
  isLandlord2 = false;
  isLandlord3 = false;
  isTenant1 = false;
  isTenant2 = false;
  isTenant3 = false;

  constructor() { }

  ngOnInit() {

    console.log('lease in part 2', this.lease);

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
  }

}

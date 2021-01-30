import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agreement-party-view',
  templateUrl: './agreement-party-view.component.html',
  styleUrls: ['./agreement-party-view.component.scss']
})
export class AgreementPartyViewComponent implements OnInit {

  @Input() lease;

  constructor() { }

  ngOnInit() {
  }

}

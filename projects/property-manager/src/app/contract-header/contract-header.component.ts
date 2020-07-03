import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contract-header',
  templateUrl: './contract-header.component.html',
  styleUrls: ['./contract-header.component.scss']
})
export class ContractHeaderComponent implements OnInit {

  @Input() user;
  @Input() contract;

  constructor() { }

  ngOnInit() {
    debugger;
    console.log(this.user);
    console.log(this.contract);
  }

}

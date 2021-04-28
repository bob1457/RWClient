import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-content',
  templateUrl: './contract-content.component.html',
  styleUrls: ['./contract-content.component.scss']
})
export class ContractContentComponent implements OnInit {

  @Input() user;
  @Input() contract;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import * as ContractClause from '../content-templates/contract-clause.json';

@Component({
  selector: 'app-contract-clause-content',
  templateUrl: './contract-clause-content.component.html',
  styleUrls: ['./contract-clause-content.component.scss']
})
export class ContractClauseContentComponent implements OnInit {
  // contractClauseText: any = (ContractClause as any).default;

  @Input() contractClauseText;

  constructor() { }

  ngOnInit() {
  }

}

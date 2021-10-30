import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-content-editor',
  templateUrl: './contract-content-editor.component.html',
  styleUrls: ['./contract-content-editor.component.scss']
})
export class ContractContentEditorComponent implements OnInit {

  @Input() user;
  @Input() contract;

  constructor() { }

  ngOnInit() {
  }


}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mutual-agreement',
  templateUrl: './mutual-agreement.component.html',
  styleUrls: ['./mutual-agreement.component.scss']
})
export class MutualAgreementComponent implements OnInit {

  @Input() agreement;

  constructor() {    
  }

  ngOnInit() {
    console.log('rental info in mutual agreement', this.agreement);
  }

}

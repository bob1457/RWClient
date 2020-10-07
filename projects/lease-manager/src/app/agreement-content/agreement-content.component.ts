import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agreement-content',
  templateUrl: './agreement-content.component.html',
  styleUrls: ['./agreement-content.component.scss']
})
export class AgreementContentComponent implements OnInit {

  leaseForm: FormGroup;

  @Input() lease;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('lease', this.lease);

    this.leaseForm = this.formBuilder.group({
      landlordFirstName: [''],
      landlordLastName: ['']
    });
  }

}

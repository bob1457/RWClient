import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agreement-content',
  templateUrl: './agreement-content.component.html',
  styleUrls: ['./agreement-content.component.scss']
})
export class AgreementContentComponent implements OnInit {

  // leaseForm: FormGroup;

  @Input() lease;

  startDate;
  startMonth;
  startYear;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    debugger;
    console.log('lease', this.lease);

    let month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
  ];

    // this.leaseForm = this.formBuilder.group({
    //   landlordFirstName: [''],
    //   landlordLastName: ['']
    // });

    // this.startDate = this.getDate(this.lease.leaseStartDate) + " " + this.getMonth(this.lease.leaseStartDate) + " " +
    // this.lease.leaseStartDate.getFullYear();

    const newDate = new Date(this.lease.leaseStartDate);

    console.log('new date', newDate);

    this.startDate = '0' + newDate.getDate();
    this.startMonth = month[newDate.getMonth()];
    this.startYear = newDate.getFullYear();

    console.log('(start date)', this.startDate + ' ' + this.startMonth + ' ' + this.startYear);
  }




}

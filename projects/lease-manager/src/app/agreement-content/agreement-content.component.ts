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
  @Input() agent;

  startDate;
  startMonth;
  startYear;
  endDate;
  endMonth;
  endYear;
  todayDate;
  todayMonth;
  todayYear;

  newTerm = '';

  // userAgentService = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    debugger;
    console.log('lease received from parant component', this.lease);
    console.log('user info received form paraent component', this.agent);

    const month = [
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

    if (this.lease.endLeaseCode === 23) {
      this.newTerm = 'One Year';
    }
    console.log('new term', this.newTerm);

    // this.leaseForm = this.formBuilder.group({
    //   landlordFirstName: [''],
    //   landlordLastName: ['']
    // });

    // this.startDate = this.getDate(this.lease.leaseStartDate) + " " + this.getMonth(this.lease.leaseStartDate) + " " +
    // this.lease.leaseStartDate.getFullYear();

    const newDate = new Date(this.lease.leaseStartDate);

    console.log('new date', newDate);

    this.startDate = newDate.getDate().toString().length === 1 ? '0' + newDate.getDate() : newDate.getDate();
    this.startMonth = month[newDate.getMonth()];
    this.startYear = newDate.getFullYear();

    const endDate = new Date(this.lease.leaseEndDate);

    this.endDate = endDate.getDate().toString().length === 1 ? '0' + endDate.getDate() : endDate.getDate();
    this.endMonth = month[endDate.getMonth()];
    this.endYear = endDate.getFullYear();

    const today = new Date();

    this.todayDate = today.getDate().toString().length === 1 ? '0' + today.getDate() :  today.getDate();
    this.todayMonth = month[today.getMonth()];
    this.todayYear = today.getFullYear();
    console.log('(current date)', this.todayDate + ' ' + this.todayMonth + ' ' + this.todayYear);

    // this.userAgentService = this.lease.serviceAgent;

  }




}

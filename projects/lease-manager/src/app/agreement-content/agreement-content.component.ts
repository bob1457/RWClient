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
  todayDate;
  todayMonth;
  todayYear;

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

    const today = new Date();

    this.todayDate = today.getDate().toString().length === 1 ? '0' + today.getDate() :  today.getDate();
    this.todayMonth = month[today.getMonth()];
    this.todayYear = today.getFullYear();
    console.log('(current date)', this.todayDate + ' ' + this.todayMonth + ' ' + this.todayYear);



  }




}

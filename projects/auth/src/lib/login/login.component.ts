import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checked = false;
  loading = false;
  errMsg ='';
  email = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

  }

  openDialog() {

  }
}

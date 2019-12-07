import { Component, OnInit, Input } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AuthState } from '../store/auth.state';

import { User } from '../models';
import { getUserInfo } from '../store/auth.reducers';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'lib-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // user: User;
  @Input() user: User;

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    debugger;
    // this.store.pipe(select(getUserInfo)).subscribe(userProfile => { this.user = userProfile; console.log(this.user); });
    console.log('user in profile: ' + this.user);
  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }


}

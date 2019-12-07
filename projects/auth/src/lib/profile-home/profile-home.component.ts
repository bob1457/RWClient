import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { User } from '../models';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../store/auth.state';
import { getUserInfo } from '../store/auth.reducers';

@Component({
  selector: 'lib-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  user: User;

  rolename = '';
  loading = false;

  constructor(private location: Location,
              private store: Store<fromAuth.AuthState>) { }

  ngOnInit() {
    debugger;
    this.store.pipe(select(getUserInfo)).subscribe(userData => {
      this.user = userData;
      console.log('user from profile homne: ' + this.user);

      switch (this.user.role) {
        case 'pm':
            this.rolename = 'Property Manager';
            break;
        case 'tenant':
            this.rolename = 'Tenant';
            break;
        default:
        break;
      }

    });
  }



  goBack() {
    this.location.back();
  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  onChange(event) {
    console.log(event);
  }

}

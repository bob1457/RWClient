import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../store/auth.state';

import { User } from '../models';
import { getUserInfo } from '../store/auth.reducers';


import { Store, select } from '@ngrx/store';
import { AuthState } from '../store/auth.state';

import { User } from '../models';
import { getUserInfo } from '../store/auth.reducers';

@Component({
  selector: 'lib-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    debugger;
<<<<<<< HEAD
    this.store.pipe(select(getUserInfo)).subscribe(userData => {this.user = userData; console.log(this.user); });

=======
    this.store.pipe(select(getUserInfo)).subscribe(userProfile => { this.user = userProfile; console.log(this.user); });
>>>>>>> dev
  }

}

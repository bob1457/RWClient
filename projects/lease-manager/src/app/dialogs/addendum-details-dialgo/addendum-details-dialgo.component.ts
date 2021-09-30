import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { getUserInfo } from '@lib/auth';
import { PropertyState } from 'projects/property-manager/src/app/store/property.state';

@Component({
  selector: 'app-addendum-details-dialgo',
  templateUrl: './addendum-details-dialgo.component.html',
  styleUrls: ['./addendum-details-dialgo.component.scss']
})
export class AddendumDetailsDialgoComponent implements OnInit {

  user;

  constructor(private store: Store<PropertyState>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: { addendum: any }) {

    this.store.pipe(select(getUserInfo))
      .subscribe(user => {
        if (user) {
          // this.pm = localStorage.getItem('user');
          this.user = user;
        } else {
          this.user = JSON.parse(localStorage.getItem('auth'));
        }
        console.log('pm', this.user);
      });
  }

  ngOnInit() {

    console.log('addendum in dialog', this.data.addendum);
  }

}

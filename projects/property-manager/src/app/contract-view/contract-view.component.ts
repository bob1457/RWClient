import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { ManagementContract } from '@lib/app-core';
import { contractDetails } from '../store/reducers/property.reducer';
import { getUserInfo, User } from '@lib/auth';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.scss']
})
export class ContractViewComponent implements OnInit {

  id: number;
  contract: ManagementContract;
  pm: User;

  constructor( private store: Store<PropertyState>,
               private actRoute: ActivatedRoute,
               private location: Location,
               private router: Router) {
              this.id = this.actRoute.snapshot.params.id;
              console.log(this.id);
  }

  ngOnInit() {
    debugger;
    this.store.pipe(select(contractDetails))
              .subscribe(data => this.contract = data);
    this.store.pipe(select(getUserInfo))
              .subscribe(user => {
                this.pm = user;
              });
  }

  Ok() {
    this.location.back();
  }

  download() {

  }

}

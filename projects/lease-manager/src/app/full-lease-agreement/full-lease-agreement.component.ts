import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { PropertyLeaseState } from '../store/lease-state';
import { leaseDetails } from '../store/reducers';


@Component({
  selector: 'app-full-lease-agreement',
  templateUrl: './full-lease-agreement.component.html',
  styleUrls: ['./full-lease-agreement.component.scss']
})
export class FullLeaseAgreementComponent implements OnInit {

  id: number;
  agreementDetails;

  constructor(private store: Store<PropertyLeaseState>,
              private actRoute: ActivatedRoute,
              private location: Location,
              private router: Router) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.select(leaseDetails)
                    .subscribe(lease => {
                      this.agreementDetails = lease;
                      console.log('agreement', this.agreementDetails);
                    });
              }

  ngOnInit() {
  }

}

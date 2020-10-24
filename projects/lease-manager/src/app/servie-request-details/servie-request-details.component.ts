import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-servie-request-details',
  templateUrl: './servie-request-details.component.html',
  styleUrls: ['./servie-request-details.component.scss']
})
export class ServieRequestDetailsComponent implements OnInit {

  id: number;

  constructor(private store: Store<PropertyLeaseState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
              }

  ngOnInit() {
  }

}

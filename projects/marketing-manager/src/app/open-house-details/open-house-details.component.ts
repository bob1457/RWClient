import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PropertyListingState } from '../store/marketing.state';

@Component({
  selector: 'app-open-house-details',
  templateUrl: './open-house-details.component.html',
  styleUrls: ['./open-house-details.component.scss']
})
export class OpenHouseDetailsComponent implements OnInit {

  id;

  constructor(private store: Store<PropertyListingState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
               }

  ngOnInit() {
  }

}

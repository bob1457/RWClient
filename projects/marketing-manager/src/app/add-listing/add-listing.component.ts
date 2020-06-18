import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PropertyListingState } from '../store/marketing.state';
import { Location } from '@angular/common';
import { MarketingService } from '@lib/app-core';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {

  addForm: FormGroup;
  rentalProperties: any[];

  constructor(private formBuilder: FormBuilder,
              private marketingService: MarketingService,
              private location: Location,
              private store: Store<PropertyListingState>) { }

  ngOnInit() {

    this.marketingService.getAllRentalProperties()
        .subscribe(properties => {
          this.rentalProperties = properties;
          // console.log(this.rentalProperties);.filter(p => p.status === 'NotSet')
        });

    this.addForm = this.formBuilder.group({
      id: [],
      propertyName: []
    });
  }


  onChange() {

  }

}

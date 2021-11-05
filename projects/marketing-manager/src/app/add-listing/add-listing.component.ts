import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { PropertyListingState } from '../store/marketing.state';
import { Location } from '@angular/common';
import { MarketingService } from '@lib/app-core';
import { allRentalProperties } from '../store/reducers';
import { getAllRentalProperties, addPropertyListing } from '../store/actions/marketing.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {

  addForm: FormGroup;
  rentalProperties: any[];
  // properties$: Observable<any[]>;

  constructor(private formBuilder: FormBuilder,
              private marketingService: MarketingService,
              private location: Location,
              private store: Store<PropertyListingState>) {
                this.store.pipe(select(allRentalProperties))
                .subscribe(data => {
                  if (data != null) {
                    this.rentalProperties = data.filter(s => s.status === 0);
                  }

                  console.log('rental prop', this.rentalProperties);
                });
              }

  ngOnInit() {
    debugger;

    // this.marketingService.getAllRentalProperties()
    //     .subscribe(properties => {
    //       this.rentalProperties = properties;
    //       // console.log(this.rentalProperties);.filter(p => p.status === 'NotSet')
    //     });
    this.store.dispatch(getAllRentalProperties());

    // this.marketingService.getAllRentalProperties()
    //   .subscribe(data => {
    //     this.rentalProperties = data;
    //     console.log('rental prop', this.rentalProperties);
    //   });

    // this.properties$ = this.store.select(allRentalProperties);

    this.addForm = this.formBuilder.group({
      rentalPropertyId: [],
      title: [],
      listingDesc: [],
      monthlyRent: [],
      notes: [],
      contactName: [],
      contactTel: [],
      contactEmail: [],
      contactSMS: [],
      contactOther: []
    });
  }


  onChange(id) {
    console.log('id', id);
    this.addForm.get('rentalPropertyId').setValue(id);

  }

  submit() {
    debugger;
    console.log('form data: ', this.addForm.value);
    this.store.dispatch(addPropertyListing({payload: this.addForm.value}));
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

}

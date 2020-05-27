import { Component, OnInit } from '@angular/core';
import { PropertyListing, MarketingService } from '@lib/app-core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PropertyListingState } from '../store/marketing.state';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { getPropertyListingDetails } from '../store/actions/marketing.actions';
import { propertyListingDetails } from '../store/reducers';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {

  id: number;
  listing: any;

  detailsForm: FormGroup;

  constructor(private store: Store<PropertyListingState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private propertyService: MarketingService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
               }

  ngOnInit() {

    this.GetPropertyListingDetails(this.id);

    this.detailsForm = this.formBuilder.group({
      id: [],
      title: [],
      listingDesc: [],
      monthlyRent: [],
      isActive: [],
      note: [],
      created: [],
      modified: [],

      rentalProperty: this.formBuilder.group({
        propertyName: [],
        propertyType: [],
        propertyBuildYear: [],
        isShared: [],
        status: [],
        isBasementSuite: [false],


        address: this.formBuilder.group({
          streetNum: [],
          city: []
        })
      }),

      contact: this.formBuilder.group({
        contactName: [],
        contactTel: []
      })

    });


  }

  GetPropertyListingDetails(id: any) {
    debugger;
    // this.store.dispatch(getPropertyListingDetails({payload: id}));

    this.store.pipe(select(propertyListingDetails))
          .subscribe(data => {
            if (data != null && data.id === this.id) { // select data from state store if data exists
              this.listing = data;
              this.detailsForm.patchValue(data);
            } else {
              this.store.dispatch(getPropertyListingDetails({payload: id})); // dispatch the action if state has no data

              this.store.pipe(select(propertyListingDetails)) // select date from state in store
              .subscribe(listing => {
                this.listing = listing;
              });
            }
            console.log(data);
      });

  }

  submit() {

  }

  goBack() {
    this.router.navigate(['/Manage/marketing/propertylist']);
  }

  // selectPropertyListingDetails() {
  //   debugger;
  //   this.store.pipe(select(propertyListingDetails))
  //   .subscribe(data => {
  //     this.listing = data;
  //     this.detailsForm.setValue(data);
  //     console.log(data);
  //   });
  // }

}

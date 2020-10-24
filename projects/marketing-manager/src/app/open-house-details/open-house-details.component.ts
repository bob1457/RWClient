import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyListingState } from '../store/marketing.state';
import { Observable } from 'rxjs';
import { loadingStatus, openHouses, propertyListing } from '../store/reducers';
import { getPropertyListing, updateOpenHouseToListing } from '../store/actions/marketing.actions';

@Component({
  selector: 'app-open-house-details',
  templateUrl: './open-house-details.component.html',
  styleUrls: ['./open-house-details.component.scss']
})
export class OpenHouseDetailsComponent implements OnInit {

  id;
  openhouse;
  listing;
  loading$: Observable<boolean>;

  detailsForm: FormGroup;

  constructor(private store: Store<PropertyListingState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.select(openHouses)
                          .subscribe(oh => {
                            if (oh) {
                              this.openhouse = oh.find(p => p.id == this.id);
                              console.log('openhoused', this.openhouse.id);
                              console.log('oh', this.openhouse);
                              this.store.select(propertyListing)
                                        .subscribe(res => {
                                          if (res) {
                                            // this.listing = res.filter(l => l.rentalPropertyId == this.openhouse[0].rentalPropertyId);
                                            this.listing = res.find(l => l.rentalPropertyId == this.openhouse.rentalPropertyId);
                                            console.log('listing', this.listing);
                                          } else {
                                            this.store.dispatch(getPropertyListing());
                                          }
                                        });
                            }
                            // this.openhouse = oh;this.listing.rentalProperty.id
                          });
               }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.detailsForm = this.formBuilder.group({
      id: [],
      // rentalPropertyId: [],
      openhouseDate: [''],
      isActive: [true],
      startTime: [''],
      endTime: [''],
      notes: ['']
    });
  }


  goBack() {
    this.router.navigate(['/Manage/marketing/openhouses']);
  }

  cancel() {
    this.location.back();
  }

  submit() {
    this.detailsForm.patchValue({
     id: this.id
    });
    // console.log('\n\n------ begin: update open house ------');
    // console.log('update submitted');
    // console.log('------ end:  done ------\n\n');
    console.log('form oh', this.detailsForm.value);
    this.store.dispatch(updateOpenHouseToListing({payload: this.detailsForm.value}));
  }

}

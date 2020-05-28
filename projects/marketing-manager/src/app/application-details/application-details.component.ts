import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { MarketingService } from '@lib/app-core';
import { PropertyListingState } from '../store/marketing.state';
import { propertyApplicationDetails, loadingStatus } from '../store/reducers';
import { getRentalApplicationDetails } from '../store/actions/marketing.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {

  id: number;
  application: any;

  loading$: Observable<boolean>;

  // detailsForm: FormGroup;

  constructor(private store: Store<PropertyListingState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              // private formBuilder: FormBuilder,
              private propertyService: MarketingService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
              }

  ngOnInit() {

    this.GetApplicationDetails(this.id);
  }

  GetApplicationDetails(id: any) {
    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.dispatch(getRentalApplicationDetails({payload: id}));

    // this.store.dispatch(getRentalApplicationDetails({payload: id})); // dispatch the action if state has no data

    this.store.pipe(select(propertyApplicationDetails)) // select date from state in store
              .subscribe(app => {
                this.application = app;
              });

    // this.store.pipe(select(propertyApplicationDetails))
    //       .subscribe(data => {
    //         if (data != null && data.id === this.id) { // select data from state store if data exists
    //           this.application = data;
    //           // this.detailsForm.patchValue(data);
    //         } else {
    //           this.store.dispatch(getRentalApplicationDetails({payload: id})); // dispatch the action if state has no data

    //           this.store.pipe(select(propertyApplicationDetails)) // select date from state in store
    //           .subscribe(app => {
    //             this.application = app;
    //           });
    //         }
    //         console.log(data);
    //   });

  }

  submit() {

  }

  goBack() {
    this.router.navigate(['/Manage/marketing/applications']);
  }

}

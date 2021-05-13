import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { MarketingService } from '@lib/app-core';
import { PropertyListingState } from '../store/marketing.state';
import { propertyApplicationDetails, loadingStatus, loadedStatus } from '../store/reducers';
import { getRentalApplicationDetails } from '../store/actions/marketing.actions';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {

  id: number;
  application: any;
  approveAppForm: FormGroup;

  loading$: Observable<boolean>;
  loaded = false;
  loading = false;
  msg = '';
  disableApproveButton = false;

  // detailsForm: FormGroup;

  constructor(private store: Store<PropertyListingState>,
              private router: Router,
              private formBuilder: FormBuilder,
              private actRoute: ActivatedRoute,
              // private formBuilder: FormBuilder,
              private marketingService: MarketingService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.pipe(select(propertyApplicationDetails)) // select date from state in store
                          .subscribe(app => {
                            this.application = app;
                            // console.log('app', this.application);
                });

              }

  ngOnInit() {

    this.approveAppForm = this.formBuilder.group({
      applicationId: [0],
      appStatus: [],
      userName: [''],
      firstName: [''],
      lastName: [''],
      contactEmail: [''],
      contactTelephone1: [''],
      contactTelephone2: [''],
      contactOthers: ['']
    });

    this.GetApplicationDetails(this.id);
  }

  GetApplicationDetails(id: any) {
    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));
    this.store.pipe(select(loadedStatus))
    .subscribe(res => this.loaded = res);

    this.store.dispatch(getRentalApplicationDetails({payload: id}));

    // this.store.dispatch(getRentalApplicationDetails({payload: id})); // dispatch the action if state has no data

    // this.store.pipe(select(propertyApplicationDetails)) // select date from state in store
    //           .subscribe(app => {
    //             this.application = app;
    //           });

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

  approveApplication(id: any) {
    this.approveAppForm.patchValue({
      applicationId: this.application.id,
      appStatus: 2, // Approved
      userName: 'NotSet',
      firstName:  this.application.rentalApplicant.firstName,
      lastName: this.application.rentalApplicant.lastName,
      contactEmail: this.application.rentalApplicant.contactEmail,
      contactTelephone1: this.application.rentalApplicant.contactTel,
      contactTelephone2: this.application.rentalApplicant.contactSms,
      contactOthers: this.application.rentalApplicant.contactOthers
    });

    console.log('form', this.approveAppForm.value);

    this.loading = true;
    this.marketingService.approveApplication(this.approveAppForm.value)
                          .subscribe(() => {
                            console.log('done');
                            this.loading = false;
                            this.msg = 'Done!'
                            setTimeout(this.msg = '', 3000);
                            this.disableApproveButton = true;
                          });

  }

  goBack() {
    this.router.navigate(['/Manage/marketing/applications']);
  }

}

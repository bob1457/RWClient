import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyLeaseState } from '../store/lease-state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { loadingStatus, vendorDetails } from '../store/reducers';
import { getVendorDetails, updateVendor } from '../store/actions/lease.actions';
import { getUserInfo } from '@lib/auth';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent implements OnInit {

  id;
  loading$: Observable<boolean>;
  vendor;
  currentUser;

  detailsForm: FormGroup;

  constructor(private store: Store<PropertyLeaseState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.pipe(select(vendorDetails))
                          .subscribe(data => {
                            this.vendor = data;
                            // this.detailsForm.patchValue(data);
                            console.log('vendor', data);
                            // this.dataSource.data = this.lease;
                            // console.log('payment', this.dataSource.data);
                          });

              }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.dispatch(getVendorDetails({payload: this.id}));

    this.detailsForm = this.formBuilder.group({
      id: [],
      vendorBusinessName: [],
      firstName: [''],
      lastName: [''],
      onlineAccessEnabled: [false],
      vendorDesc: [''],
      vendorSpecialty: [''],
      vendorContactTelephone1: [''],
      vendorContactOthers: [''],
      vendorContactEmail: [''],
      isActive: [true],
      userAvartaImgUrl: [''],
      // createdBy: [''],
      updatedBy: ['']
    });


    this.store.pipe(select(getUserInfo))
    .subscribe(user => {
      if (!user) {
        this.currentUser = JSON.parse(localStorage.getItem('auth'));
      } else {
        this.currentUser = user;
      }
        console.log('current user', this.currentUser);
      });

      this.detailsForm.get('updatedBy').setValue(this.currentUser.username);
  }


  submit() {
    console.log('form', this.detailsForm.value);

    this.store.dispatch(updateVendor({payload: this.detailsForm.value}));
  }

  goBack() {
    this.router.navigate(['/Manage/lease/vendors']);
  }

}

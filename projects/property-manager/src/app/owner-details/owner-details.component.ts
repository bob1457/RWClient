import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
// import { getPropertyOwnerDetails } from '../store/actions/property.actions';
import { ownerDetails, loadingStatus} from '../store/reducers';
import { PropertyOwner } from '@lib/app-core';
import { getPropertyOwnerDetails } from '../store/actions/property.actions';
import { Observable } from 'rxjs';
import * as PropertyActions from '../store/actions/property.actions';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent implements OnInit {

  loading$: Observable<boolean>;

  detailsForm: FormGroup;
  owner: PropertyOwner;

  editAddress = false;

  id: number;

  // owner$ = this.store.pipe(select(ownerDetails))
  //             .subscribe(data => {
  //               this.owner = data;
  //         });

  constructor(
    private store: Store<PropertyState>,
    private actRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder  ) {
    this.id = this.actRoute.snapshot.params.id;
    this.store.pipe(select(ownerDetails))
        .subscribe(data => this.owner = data);
    // this.store.dispatch(getPropertyOwnerDetails({payload: this.id}));
  }

  ngOnInit() {
    debugger;
    this.loading$ = this.store.pipe(select(loadingStatus));

    this.getOwnerDetails(this.id);

    this.detailsForm = this.formBuilder.group({
      id: [''],
      userName: ['NotSet'],
      firstName: [''],
      lastName: [''],
      contactEmail: [''],
      contactTelephone1: [''],
      contactTelephone2: [''],
      onlineAccessEnbaled: [false],
      userAvartaImgUrl: [''],
      isActive: [true],
      roleId: [2],
      notes: [''],

      created: [''],
      modified: [''],

      streetNumber: [],
      city: [],
      stateProvince: [],
      zipPostCode : [],
      country : [],

      // address: this.formBuilder.group({
      //   streetNumber: [''],
      //   city: [''],
      //   stateProv: [''],
      //   zipPostCode: [''],
      //   country: ['']
      // })

      // ownerProperty: this.formBuilder.group({
      //   propertyId: ['', Validators.required],
      //   propertyOwnerId: [],
      //   property: this.formBuilder.group({
      //     propertyName: ['', Validators.required],
      //     propertyDesc: [''],
      //     type: ['', Validators.required],
      //     propertyLogoImgUrl: [''],
      //     propertyVideoUrl: [''],
      //     propertyBuildYear: [''],
      //     isActive: [''],
      //     isShared: [''],
      //     status: [''],
      //     isBasementSuite: [false]
      //   }),

      //   // address: this.formBuilder.group({
      //   //   streetNumber: [''],
      //   //   city: [''],
      //   //   stateProv: [''],
      //   //   zipPostCode: [''],
      //   //   country: ['']
      //   // })
      // })
    });

    // this.store.pipe(select(ownerDetails)).subscribe(data => {
    //   this.owner = data;
    //   if (data == null) {
    //     this.getOnwerDetailsByService(this.id);
    //   } else {
    //     this.detailsForm.patchValue(data);
    //   }
    //   // console.log(data);
    //   // console.log(this.owner);
    // });
    // this.store.pipe(select(ownerList))
    //           .subscribe(data => {
    //             data.find(item => item.id === this.id);
    //             console.log(data.find(item => item.id === this.id));
    //             this.detailsForm.patchValue(data.find(owner => owner.id === this.id));
    //           });
  }

  submit() {
    debugger;

    // set form value for owner address

    if (!this.editAddress) {
      this.detailsForm.patchValue({
      streetNumber: this.owner.address.streetNumber,
      city: this.owner.address.city,
      stateProvince: this.owner.address.stateProv,
      zipPostCode: this.owner.address.zipPostCode,
      country: this.owner.address.country

    });
    }

    console.log(this.detailsForm.value);

    this.store.dispatch(PropertyActions.updatePropertyOwner({payload: this.detailsForm.value}));

  }

  getOwnerDetails(id: number) {
    this.store.dispatch(getPropertyOwnerDetails({ payload: id }));
  }

  EditAddress() {
    this.editAddress = !this.editAddress;
  }

  // getOnwerDetailsByService(id: number) {
  //   return this.propertyService.getPropertyOwnerDetails(id).subscribe(data => {
  //     this.owner = data;
  //     this.detailsForm.patchValue(data);
  //   });
  // }

  goBack() {
    this.router.navigate(['/Manage/property/owners']);
  }
}

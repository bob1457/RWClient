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

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent implements OnInit {

  loading$: Observable<boolean>;

  detailsForm: FormGroup;
  owner: PropertyOwner;

  id: number;

  owner$ = this.store.pipe(select(ownerDetails))
              .subscribe(data => {
                this.owner = data;
          });

  constructor(
    private store: Store<PropertyState>,
    private actRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder  ) {
    this.id = this.actRoute.snapshot.params.id;
    // this.store.dispatch(getPropertyOwnerDetails({payload: this.id}));
  }

  ngOnInit() {
    debugger;
    this.loading$ = this.store.pipe(select(loadingStatus));

    this.getOwnerDetails(this.id);

    this.detailsForm = this.formBuilder.group({
      id: [''],
      userName: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      contactTelephone1: ['', Validators.required],
      contactTelephone2: [''],
      onlineAccessEnbaled: [false],
      userAvartaImgUrl: [''],
      isActive: [''],
      roleId: [''],
      notes: [''],

      created: [''],
      modified: [''],

      ownerProperty: this.formBuilder.group({
        propertyId: ['', Validators.required],
        propertyOwnerId: [],
        property: this.formBuilder.group({
          propertyName: ['', Validators.required],
          propertyDesc: [''],
          type: ['', Validators.required],
          propertyLogoImgUrl: [''],
          propertyVideoUrl: [''],
          propertyBuildYear: [''],
          isActive: [''],
          isShared: [''],
          status: [''],
          isBasementSuite: [false]
        })

        // address: this.formBuilder.group({
        //   ownerStreetNumber: ['', Validators.required],
        //   ownerCity: ['', Validators.required],
        //   ownerStateProv: ['', Validators.required],
        //   ownerZipPostCode: ['', Validators.required],
        //   ownerCountry: ['', Validators.required]
        // })
      })
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

  getOwnerDetails(id: number) {
    this.store.dispatch(getPropertyOwnerDetails({ payload: id }));
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

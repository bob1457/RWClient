import { Component, OnInit } from '@angular/core';
import { PropertyListing, MarketingService } from '@lib/app-core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PropertyListingState } from '../store/marketing.state';
import { Store, select } from '@ngrx/store';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { getPropertyListingDetails, updatePropertyListing, uploadPropertyImage } from '../store/actions/marketing.actions';
import { propertyListingDetails, loadingStatus, propertyImgList, loadedStatus } from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {

  id: number;
  listing: any;
  editContact = false;
  serverUrl = 'http://localhost:63899/';

  loading$: Observable<boolean>;
  loaded = false;
  imgList: any[] = [];

  detailsForm: FormGroup;
  propertyForm: FormGroup;

  constructor(private store: Store<PropertyListingState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder,
              private propertyService: MarketingService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
                this.store.pipe(select(propertyListingDetails))
                    .subscribe(data => {
                      this.listing = data;
                      // localStorage.setItem('listing', JSON.stringify(this.listing));
                      console.log('list', this.listing);
                });

                this.store.pipe(select(propertyImgList))
                .subscribe(img => {
                  if (img == null) {

                  }
                  this.imgList = img; // .filter(p => p.rentalPropertyId === this.listing.rentalPropertyId)
                });
               }

  ngOnInit() {

    this.GetPropertyListingDetails(this.id);

    debugger;


    // this.store.pipe(select(propertyImgList))
    // .subscribe(img => {
    //   var pId = this.listing.rentalPropertyId;
    //   this.imgList = img.filter(p => p.rentalPropertyId === pId)
    // })

    this.detailsForm = this.formBuilder.group({
      id: [],
      title: [],
      listingDesc: [],
      monthlyRent: [],
      isActive: [],
      note: [],
      created: [],
      modified: [],

      rentalPropertyId: [],

      contactName: [],
      contactTel: [],
      contactEmail: [],
      contactSMS: []

      // rentalProperty: this.formBuilder.group({
      //   propertyName: [],
      //   propertyType: [],
      //   propertyBuildYear: [],
      //   isShared: [],
      //   status: [],
      //   isBasementSuite: [false],

      //   address: this.formBuilder.group({
      //     streetNum: [],
      //     city: []
      //   })
      // }) //,

      // contact: this.formBuilder.group({
      //   contactName: [],
      //   contactTel: [],
      //   contactEmail: [],
      //   contactSMS: []
      // })

    });

    this.propertyForm = this.formBuilder.group({
      status: ['']
    });
  }

  GetPropertyListingDetails(id: any) {
    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.pipe(select(loadedStatus))
        .subscribe(res => this.loaded = res);


    this.store.dispatch(getPropertyListingDetails({payload: id}));



    // console.log('rental property id:', this.listing.rentalPropertyId);

    // this.store.pipe(select(propertyListingDetails))
    //     .subscribe(data => {
    //       this.listing = data;
    //       console.log(data);
    // });

    // this.store.pipe(select(propertyListingDetails))
    //       .subscribe(data => {
    //         if (data != null && data.id === this.id) { // select data from state store if data exists
    //           this.listing = data;
    //           this.detailsForm.patchValue(data);
    //         } else {
    //           this.store.dispatch(getPropertyListingDetails({payload: id})); // dispatch the action if state has no data

    //           this.store.pipe(select(propertyListingDetails)) // select date from state in store
    //           .subscribe(listing => {
    //             this.listing = listing;
    //           });
    //         }
    //         console.log(data);
    //   });

  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  publish() {
    
  }

  submit() {
    debugger;
    if (!this.editContact) {
      this.detailsForm.patchValue({
        contactName: this.listing.contact.contactName,
        contactEmail: this.listing.contact.contactEmail,
        contactTel: this.listing.contact.contactTel,
        contactSMS: this.listing.contact.contactSMS,
      });

    }
    this.detailsForm.get('rentalPropertyId').setValue(this.listing.rentalPropertyId);
    console.log('form data', this.detailsForm.value);

    this.store.dispatch(updatePropertyListing({payload: this.detailsForm.value}));

    // this.store.pipe(select(propertyImgList))
    //             .subscribe(img => {
    //               if (img == null) {

    //               }
    //               this.imgList = img; // .filter(p => p.rentalPropertyId === this.listing.rentalPropertyId)
    //             });

  }

  updateStatus() {
    debugger;
    console.log('rental p', this.propertyForm.value);

  }

  cancel() {
    this.location.back();
  }

  EditContact() {
    this.editContact = !this.editContact;
  }

  goBack() {
    this.router.navigate(['/Manage/marketing/propertylist']);
  }

  onChange( files ) {
    debugger;
    // var control = new FormControl();
    // const primativeFileList: FileList = control.value;
    // const cloneFiles = { ...primativeFileList};
    this.store.dispatch(uploadPropertyImage({payload: files, rentalPropertyId: this.listing.rentalPropertyId}));
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

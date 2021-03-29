import { Component, OnInit } from '@angular/core';
import { PropertyListing, MarketingService } from '@lib/app-core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PropertyListingState } from '../store/marketing.state';
import { Store, select } from '@ngrx/store';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { getPropertyListingDetails, updatePropertyListing, uploadPropertyImage, addOpenHouseToListing, updateOpenHouseToListingFailure, updateOpenHouseToListing, getPropertyImageList, getOpenHouseList } from '../store/actions/marketing.actions';
import { propertyListingDetails, loadingStatus, propertyImgList, loadedStatus, openHouses } from '../store/reducers';
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
  // loaded = false;
  imgList: any[] = [];

  tabIndex = 0;

  iconImg: any;
  addOpenHouse = false;
  openhouse: any;
  // ohList: any[] = [];

  detailsForm: FormGroup;
  propertyForm: FormGroup;
  addForm: FormGroup;
  ohForm: FormGroup;

  constructor(private store: Store<PropertyListingState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private location: Location,
              private formBuilder: FormBuilder,
              private marketingService: MarketingService,
              private propertyService: MarketingService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
                this.store.pipe(select(propertyListingDetails))
                    .subscribe(data => {
                      this.listing = data;
                      // localStorage.setItem('listing', JSON.stringify(this.listing));
                      if (this.listing) {
                        this.store.select(propertyImgList)
                            .subscribe(imgs => {
                              this.imgList = imgs;

                              // this.imgList = this.listing.rentalProperty.propertyImg;
                              // this.imgList = imgs.filter(i => i.rentalPropertyId == this.listing.rentalProperty.Id);
                              this.iconImg = this.imgList.filter((value, index) => index === 0);

                            });


                        this.store.select(openHouses) // need review for how to implement open house
                          .subscribe(oh => {
                            if (oh) {
                              this.openhouse = oh.filter(p => p.rentalPropertyId == this.listing.rentalProperty.id);
                              console.log('rentalpId', this.listing.rentalProperty.id);
                              console.log('oh', this.openhouse);
                            }
                            // this.openhouse = oh;this.listing.rentalProperty.id
                          });
                      }



                      console.log('imglist', this.imgList);
                      console.log('iconimg', this.iconImg);
                      console.log('list', this.listing);

                });


                // this.store.pipe(select(propertyImgList))
                // .subscribe(img => {
                //   if (img != null) {
                //     // this.imgList = img; // .filter(p => p.rentalPropeprtyId === this.listing.rentalPropertyId);
                //     // this.iconImg = this.imgList.filter((value, index) => index === 0);
                //     // console.log('iconimg', this.iconImg);
                //     // console.log('imglist', this.imgList);
                //   }
                // });

                // this.store.select(openHouses)
                //     .subscribe(oh => {
                //       if (oh) {
                //         this.openhouse = oh.filter(p => p.rentalPropertyId == 1);
                //         console.log('rentalpId', this.listing.rentalProperty.id);
                //         console.log('oh', this.openhouse);
                //       }
                //       // this.openhouse = oh;this.listing.rentalProperty.id
                //     });
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
      id: [],
      isActive: ['']
    });

    this.addForm = this.formBuilder.group({
      rentalPropertyId: [],
      openhouseDate: [''],
      isActive: [true],
      startTime: [''],
      endTime: [''],
      notes: ['']
    });

    this.ohForm = this.formBuilder.group({
      id: [],
      rentalPropertyId: [],
      openhouseDate: [''],
      isActive: [true],
      startTime: [''],
      endTime: [''],
      notes: ['']
    });

  }

  GetPropertyListingDetails(id: any) {
    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));

    // this.store.pipe(select(loadedStatus))
    //     .subscribe(res => this.loaded = res);


    this.store.dispatch(getPropertyListingDetails({payload: id}));

    this.store.dispatch(getPropertyImageList());

    // this.store.dispatch(getOpenHouseList());

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
    // this.store.dispatch(updatePropertyListingStatus(payload:))
  }

  updateOpenHouse() {
    debugger;
    this.ohForm.patchValue({
      id: this.openhouse[0].id,
      rentalPropertyId: this.openhouse[0].rentalPropertyId
    });
    console.log('update open house form', this.ohForm.value);
    this.store.dispatch(updateOpenHouseToListing({payload: this.ohForm.value}));
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

    this.editContact = false;

    // this.store.pipe(select(propertyImgList))
    //             .subscribe(img => {
    //               if (img == null) {

    //               }
    //               this.imgList = img; // .filter(p => p.rentalPropertyId === this.listing.rentalPropertyId)
    //             });

  }

  // Not implemented here, instead, in Open House list section
  AddOpenHouse() {
    debugger;
    this.addForm.get('rentalPropertyId').setValue(this.listing.rentalProperty.id);
    console.log('oh', this.addForm.value);
    // this.marketingService.addOpenHouse(this.addForm.value)
    //                      .subscribe(data => {
    //                        console.log('new oh', data);
    //                       //  this.listing.rentalProperty.openHouse = [''];
    //                        console.log('ops-b', this.listing.rentalProperty.openHouse);
    //                        this.listing.rentalProperty.openHouse.push(data);
    //                        console.log('ops-a', this.listing.rentalProperty.openHouse);
    //                      });
    this.store.dispatch(addOpenHouseToListing({payload: this.addForm.value}));
    this.addOpenHouse = false;
    // this.store.select(openHouses)
    //     .subscribe(data => {
    //       this.openhouse = data;
    //     });
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
    this.router.navigate(['/Manage/marketing/']);
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

  AddOH() {
    this.addOpenHouse = !this.addOpenHouse;
    // this.router.navigate(['/Manage/marketing/openhouseson']);
  }


  clear() {
    this.addForm.reset();
  }


  tabSelected(e) {
    this.tabIndex = e.index;
    console.log('tab selected', this.tabIndex);
    // if (this.tabIndex == 1) {
    //   this.hide = false;
    // }

    // if (this.tabIndex == 0) {
    //   this.hide = false;
    // }

    // if (this.tabIndex == 1) {
    //   this.hide = false;
    // }

    switch (this.tabIndex) {
      case 0 : {
        break;
      }
      case 1 : {
        if (this.openhouse.length === 0) {
          this.store.dispatch(getOpenHouseList());
        }
        break;
      }
        default: {
        break;
      }
    }

  }
}

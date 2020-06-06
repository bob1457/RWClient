import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { getPropertyDetails } from '../store/actions/property.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Property, PropertyService } from '@lib/app-core';
import { propertyDetrails, loadingStatus } from '../store/reducers';
import { Observable } from 'rxjs';
import * as PropertyActions from '../store/actions/property.actions';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  detailsForm: FormGroup;

  loading$: Observable<boolean>;

 property$ = this.store.pipe(select(propertyDetrails))
        .subscribe(data => {
          this.property = data;
          // this.detailsForm.patchValue(data);
          console.log(data);
    })
    ;

  constructor(private store: Store<PropertyState>,
              private router: Router,
              private actRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private propertyService: PropertyService) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
              }

  propertyId: any = 1;
  id: number;
  // property$: Observable<Property[]>;
  property: Property;
  current = '';
  shared = '';
  basement = '';


  // property$: Observable<Property>;

  ownersForProperty: any[] ;



  ngOnInit() {
    // debugger;
    this.loading$ = this.store.pipe(select(loadingStatus));
    // returnthis.store.dispatch(getPropertyDetails(this.propertyId))
    this.GetPropertyDetails(this.id);

    this.detailsForm = this.formBuilder.group({
      propertyId: ['', Validators.required],
      propertyName: ['', Validators.required],
      propertyDesc: [''],
      propertyType1: [null],

      propertyLogoImgUrl: [''],
      propertyVideoUrl: [''],
      propertyBuildYear: [null],
      isActive: [true],
      isShared: [false],
      status: [''],
      isBasementSuite: [false],

      propertySuiteNumber: [''],
      propertyNumber: ['', Validators.required],
      propertyStreet: ['', Validators.required],
      propertyCity: ['', Validators.required],
      propertyStateProvince: ['', Validators.required],
      propertyCountry: ['', Validators.required],
      propertyZipPostCode: ['', Validators.required],
      // gpslongitudeValue: [''],
      // gpslatitudeValue: [''],

      stove: [true],
      refrigerator: [true],
      dishwasher: [false],
      airConditioner: [false],
      laundry: [false],
      blindsCurtain: [false],
      furniture: [false],
      tvinternet: [false],
      commonFacility: [false],
      securitySystem: [false],
      utilityIncluded: [false],
      fireAlarmSystem: [false],
      others: [''],
      facilityNotes: [''],

      numberOfBedrooms: [0],
      numberOfBathrooms: [0],
      numberOfLayers: [0],
      numberOfParking: [0],
      basementAvailable: [0],
      totalLivingArea: [0],
      featureNotes: [''],

      // creationDate: [''],
      // updateDate: [''],

      // ownerList: this.formBuilder.group({
      //   userName: [''],
      //   firstName: [''],
      //   lastName: [''],
      //   contactEmail: [''],
      //   contactTelephone1: [''],
      //   contactTelephone2: [''],
      //   onlineAccessEnbaled: [false],
      //   userAvartaImgUrl: [''],

      //   address: this.formBuilder.group({
      //     ownerStreetNumber: [''],
      //     ownerCity: [''],
      //     ownerStateProv: [''],
      //     ownerZipPostCode: [''],
      //     ownerCountry: ['']
      //   })
      // })

    });

    // this.selectPropertyDetails();

    // Then select the state from the store, re-set to the form
    // this.store.pipe(select(propertyDetrails))
    //     .subscribe(data => {
    //       this.property = data;
    //       if (data == null){
    //         this.getPropertyDetailsByService(this.id);
    //       }
    //       else {
    //         this.detailsForm.patchValue(data);
    //       }
    //       console.log(data);
    // });

    // this.current = this.property.propertyType1;
    // console.log(this.current);
    // this.shared = this.property.isShared.toString();
    // this.basement = this.property.isBasementSuite.toString();
    console.log(this.basement);
  }

  GetPropertyDetails(id: any) {
    debugger;
    this.store.dispatch(getPropertyDetails({payload: id}));
    // this.property$ =

    // User store to select the state

    // this.store.pipe(select(propertyDetrails))
    // .subscribe(data => {
    //   this.property = data;
    //   this.detailsForm.patchValue(data);
    //   console.log(data);
    // });


    // User servie directlty the first time when the compowent loads
    // this.propertyService.getPropertyDetails(id)
    //     .subscribe(data => {
    //       this.property = data;
    //       this.detailsForm.patchValue(data);
    // });
  }

  // getPropertyDetailsByService (id: number) {
  //   this.propertyService.getPropertyDetails(id)
  //       .subscribe(data => {
  //         this.property = data;
  //         this.detailsForm.patchValue(data);
  //       });
  // }

  selectPropertyDetails() {
    debugger;
    this.store.pipe(select(propertyDetrails))
    .subscribe(data => {
      this.property = data;
      this.detailsForm.setValue(data);
      console.log(data);
    });
  }

  submit(formValue) {
    debugger;
    console.log(formValue);
    this.store.dispatch(PropertyActions.updateProperty({payload: formValue}));
  }

  goBack() {
    this.router.navigate(['/Manage/property/propertylist']);
  }


  // UpdateProperty() {
  //   const property: any = {
  //     propertyId: 1004,
  //     propertyName: 'Last Update REAL',
  //     propertyDesc: 'update again!!!',
  //     propertyType1: 'SingleHouse',
  //     propertyManagerId: 0,
  //     propertyLogoImgUrl: 'string',
  //     propertyVideoUrl: 'string',
  //     propertyBuildYear: 0,
  //     isActive: true,
  //     isShared: true,
  //     furnishingId: 0,
  //     status: 'Rented',
  //     isBasementSuite: true,
  //     propertySuiteNumber: '101',
  //     propertyNumber: '9876',
  //     propertyStreet: '102 Street',
  //     propertyCity: 'Surrey',
  //     propertyStateProvince: 'string',
  //     propertyCountry: 'string',
  //     propertyZipPostCode: 'string',
  //     stove: true,
  //     refrigerator: true,
  //     dishwasher: true,
  //     airConditioner: true,
  //     laundry: true,
  //     blindsCurtain: true,
  //     furniture: true,
  //     tvinternet: true,
  //     commonFacility: false,
  //     securitySystem: true,
  //     utilityIncluded: true,
  //     fireAlarmSystem: true,
  //     others: 'string',
  //     facilityNotes: 'string',
  //     numberOfBedrooms: 3,
  //     numberOfBathrooms: 0,
  //     numberOfLayers: 2,
  //     numberOfParking: 1,
  //     basementAvailable: true,
  //     totalLivingArea: 0,
  //     featureNotes: 'string'
  //   };
  //   debugger;
  //   return this.store.dispatch(PropertyActions.updateProperty({payload: property}));
  // }

}

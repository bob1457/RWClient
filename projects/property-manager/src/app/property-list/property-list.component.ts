import { PropertyState } from './../store/property.state';
import { Property, PropertyService } from '@lib/app-core';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import { getPropertyList, getPropertyDetails, addProperty, updateProperty,
         updatePropertyStatus, removeProperty, getCouncilList, getPropertyListByPm } from '../store/actions/property.actions';
import { propertyList, loadingStatus, councilList} from '../store/reducers/property.reducer';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs';

import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { getPropertyImageList } from 'projects/marketing-manager/src/app/store/actions/marketing.actions';
import { getUserInfo } from '@lib/auth';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit, AfterViewInit {

  loadingIndicator = false;

  loading$: Observable<boolean>;

  baseUrl = 'http://localhost:21799';

  propertyId: any = 1;
  username;
  userrole;

  list: Property[];
  councils: any[];
  propertyList$: Observable<Property[]>;
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['icon', 'id', 'propertyName', 'propertyNumber', 'type', 'status', 'createdDate', 'updateDate', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private propertyService: PropertyService,
              private router: Router,
              private store: Store<PropertyState>) {

                // this.getCurrentUser();

                this.router.events.subscribe((routerEvent: Event) => {
                  if (routerEvent instanceof NavigationStart) {
                    this.loadingIndicator = true;
                  }

                  if (routerEvent instanceof NavigationEnd ){
                    this.loadingIndicator = false;
                  }

                });

                this.store.pipe(
                  select(propertyList)).subscribe(data => {
                    this.list = data ;
                    console.log(data);
                    this.dataSource.data = this.list;
                    console.log(this.dataSource.data);

                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;

                    setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });
                  });

                setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });

                // this.store.select(councilList).subscribe( res => {
                //   this.councils = res;
                //   console.log('council list', this.councils);
                // });

                this.router.events.subscribe((routerEvent: Event) => {
                  if (routerEvent instanceof NavigationStart) {
                    this.loadingIndicator = true;
                  }

                  if (routerEvent instanceof NavigationEnd ){
                    this.loadingIndicator = false;
                  }

                });
              }

  dataSource = new MatTableDataSource<Property>();

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));
    // this.getPropertyList();
    // this.propertyList$ =
    // this.store.select(propertyList);

    // this.getCurrentUser();

    const userInfo = JSON.parse(localStorage.getItem('auth'));
    this.username = userInfo.username;
    this.userrole = userInfo.role;

    console.log('user info', userInfo);

    console.log('user name', userInfo.username);
    console.log('user role', userInfo.role);


    // this.store.dispatch(getPropertyListByPm({ payload: this.username }));
    // if (this.list == null) {
    if (this.userrole == 'pm') {
      console.log('get there for pm');
      this.store.dispatch(getPropertyListByPm({payload: this.username}));
    } else {
      console.log('get there for all');
      this.store.dispatch(getPropertyList());
      }

    // }

    // this.store.dispatch(getCouncilList());

    // this.store.dispatch(getPropertyImageList());

    // this.propertyList$ =

    // debugger;
    // this.store.pipe(
    //   select(propertyList)).subscribe(data => {
    //     this.list = data ;
    //     console.log(data);
    //     this.dataSource.data = this.list;
    //     console.log(this.dataSource.data);

    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    //   });
  }

  // getPropertyList() {
  //   debugger;
  //   return this.propertyService.getPropertyList()
  //   .subscribe((pList: Property[]) => {
  //     this.list = pList;
  //     console.log(this.list);
  //     this.dataSource.data = pList;
  //     console.log(this.dataSource.data);
  //   });
  // }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  GetPropertyDetails(id: any) {
    debugger;
    if (this.list == null) {
      return this.store.dispatch(getPropertyDetails({payload: id}));
    }

  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  // customSort(e) {
  //   console.log(e);
  // }

  AddProperty() { // ppt is the input parameter, ignored in unit testing   ppt: Property

  const property: Property = {
    id: 0,
    propertyName: 'Real Property',
    propertyDesc: 'string',
    type: '',
    strataCouncilId: 0,
    propertyManagerUserName: 'string',
    propertyLogoImgUrl: 'string',
    propertyVideoUrl: 'string',
    propertyBuildYear: 0,
    isActive: true,
    isShared: true,
    status: 0,
    isBasementSuite: true,
    // createdDate: '2019-07-27T19:37:57.799Z',
    // updateDate: '2019-07-27T19:37:57.799Z',
    propertyAddressId: 0,
    propertyFeatureId: 0,
    propertyFacilityId: 0,
    propertyOwnerId: 0,
    propertySuiteNumber: 'string',
    propertyNumber: 'string',
    propertyStreet: 'string',
    propertyCity: 'string',
    propertyStateProvince: 'string',
    propertyCountry: 'string',
    propertyZipPostCode: 'string',
    gpslongitudeValue: 'string',
    gpslatitudeValue: 'string',
    stove: true,
    refrigerator: true,
    dishwasher: true,
    airConditioner: true,
    laundry: true,
    blindsCurtain: true,
    furniture: true,
    tvinternet: true,
    commonFacility: true,
    securitySystem: true,
    utilityIncluded: true,
    fireAlarmSystem: true,
    others: 'string',
    facilityNotes: 'string',
    numberOfBedrooms: 0,
    numberOfBathrooms: 0,
    numberOfLayers: 0,
    numberOfParking: 0,
    basementAvailable: true,
    totalLivingArea: 0,
    featureNotes: 'string',
    userName: 'string',
    firstName: 'string',
    lastName: 'string',
    contactEmail: 'string',
    contactTelephone1: 'string',
    contactTelephone2: 'string',
    onlineAccessEnbaled: true,
    userAvartaImgUrl: 'string',
    roleId: 0,
    notes: 'string',
    ownerStreetNumber: 'string',
    ownerCity: 'string',
    ownerStateProv: 'string',
    ownerZipPostCode: 'string',
    ownerCountry: 'string',
    isSameAddress: true ,
    ownerList: null,
    contractList: null
    // ownerAddress: {},
    // propertyAddress: {},
    // propertyFacility: {
    //   stove: true,
    //   refrigerator: true,
    //   dishwasher: true,
    //   airConditioner: true,
    //   laundry: true,
    //   blindsCurtain: true,
    //   furniture: true,
    //   tvinternet: true,
    //   commonFacility: true,
    //   securitySystem: true,
    //   utilityIncluded: true,
    //   fireAlarmSystem: true,
    //   others: 'string',
    //   notes: 'string'
    // },
    // propertyFeature: {
    //   numberOfBedrooms: 0,
    //   numberOfBathrooms: 0,
    //   numberOfLayers: 0,
    //   numberOfParking: 0,
    //   basementAvailable: true,
    //   totalLivingArea: 0,
    //   isShared: true,
    //   notes: 'string'
    // }
  };

  debugger;
  return this.store.dispatch(addProperty({payload: property}));

  }

  UpdateProperty() {
    const property: any = {
      propertyId: 1003,
      propertyName: 'Last Update REAL',
      propertyDesc: 'update again!!!',
      type: 0,
      propertyManagerId: 0,
      propertyLogoImgUrl: 'string',
      propertyVideoUrl: 'string',
      propertyBuildYear: 0,
      isActive: true,
      isShared: true,
      furnishingId: 0,
      status: 1,
      isBasementSuite: true,
      propertySuiteNumber: '101',
      propertyNumber: '9876',
      propertyStreet: '102 Street',
      propertyCity: 'Surrey',
      propertyStateProvince: 'string',
      propertyCountry: 'string',
      propertyZipPostCode: 'string',
      stove: true,
      refrigerator: true,
      dishwasher: true,
      airConditioner: true,
      laundry: true,
      blindsCurtain: true,
      furniture: true,
      tvinternet: true,
      commonFacility: false,
      securitySystem: true,
      utilityIncluded: true,
      fireAlarmSystem: true,
      others: 'string',
      facilityNotes: 'string',
      numberOfBedrooms: 3,
      numberOfBathrooms: 0,
      numberOfLayers: 2,
      numberOfParking: 1,
      basementAvailable: true,
      totalLivingArea: 0,
      featureNotes: 'string'
    };
    debugger;
    return this.store.dispatch(updateProperty({payload: property}));
  }

  UpdatePropertyStatus() {
    const propertyStatus: any = {
      id: 1003,
      status: 2
    };

    debugger;
    return this.store.dispatch(updatePropertyStatus({payload: propertyStatus}));


  }

  RemoveProperty() {
    const propertyToRemove: any = {
      propertyId: 1002,
      active: false
    };
    debugger;
    return this.store.dispatch(removeProperty({payload: propertyToRemove}));
  }

  getCurrentUser() {
    return this.store.pipe(select(getUserInfo)).subscribe(userData => { // this.user = userData;
      // console.log('loggged in user', userData.username);
      if (!userData) {
        const uname = JSON.parse(localStorage.getItem('auth'));
        this.username = uname.username;
        this.userrole = uname.role;
        console.log('get from pppt manager localstorage', this.username + " " + this.userrole);
      } else {
        this.username = userData.username;
        this.userrole = userData.role;
        console.log('get from state', this.username + " " + this.userrole);
      }

      // this.username = userData.username;
      // this.userrole = userData.role;
      // console.log('get from state', this.username + " " + this.userrole);
    });
  }





}

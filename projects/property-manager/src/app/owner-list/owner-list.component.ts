import { PropertyService, PropertyOwner } from '@lib/app-core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { getPropertyOwnerList,
         getPropertyOwnerDetails,
         addPropertyOwner,
         updatePropertyOwner,
         removePropertyOwner,
         getPropertyOwnerListByPm} from '../store/actions/property.actions';
import {ownerList, loadingStatus } from '../store/reducers/property.reducer';
// import { OwnerList } from '@lib/dashboard';
// import { PropertyList, ContractList, TenantList, RentalList, ownerList, MarketingList, RentalAppList } from '../store/reducers/property.reducer';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { getUserInfo } from '@lib/auth';
// import { MatTableDataSource } from '@lib/app-material';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  // loadingIndicator = false;

  loading$: Observable<boolean>;

  // list: PropertyOwner[];
  owners$: Observable<PropertyOwner[]>;
  list: any[];
  id: number;
  username;
  userrole;

  ownerList$: Observable<PropertyOwner[]>;

  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['icon', 'id', 'firstName', 'contactEmail', 'contactTelephone1', 'address', 'created', 'updated', 'action'];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(
    private propertyService: PropertyService,
    private store: Store<PropertyState>,
    private actRoute: ActivatedRoute) {
      this.id = this.actRoute.snapshot.params.id;

      this.store.pipe(select(ownerList))
          .subscribe(data => {
            this.list = data;
            this.dataSource.data = this.list;

            // this.dataSource.sort = this.sort;
            // this.dataSource.paginator = this.paginator;

            setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });
      });
    }

  dataSource = new MatTableDataSource<PropertyOwner>();

  ngOnInit() {
    debugger;
    this.loading$ = this.store.pipe(select(loadingStatus));

    this.getCurrentUser();

    // if (this.list == null) {
    if (this.userrole == 'pm') {
      console.log('get there for pm');
      this.store.dispatch(getPropertyOwnerListByPm({ payload: this.username }));
    } else {
      console.log('get there for all');
      this.store.dispatch(getPropertyOwnerList());
    }

    // }

    // this.getOwnerList();
  }

  getOwnerList() {
    debugger;
    // return this.propertyService.getPropertyOwnerList()
    // .subscribe((oList: PropertyOwner[]) => {this.list = oList; console.log(this.list); });

    // return this.store.pipe(select(ownerList))

    // return this.propertyService.getPropertyOwnerList()
    // .subscribe(olist => {
    //   this.list = olist;
    //   this.dataSource.data = olist;
    //   console.log(this.list);
    //   console.log(this.dataSource.data);
    // });
    // this.ownerList$ =
    // this.store.pipe(select(ownerList)).subscribe(data => {
    //   this.list = data;
    //   this.dataSource.data = data;
    // });
    // this.ownerList$ = this.store.select(ownerList)
    // .subscribe(data => {
    //   console.log(data);
    // });

    this.store.pipe(select(ownerList))
    .subscribe(data => {
      this.list = data;
      this.dataSource.data = this.list;

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  getOwnerDetails(id: number) {
    debugger;
    return this.store.dispatch(getPropertyOwnerDetails({payload: id}));
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addOwner() { // owner: PropertyOwner
    // const owner: PropertyOwner = {
    //   id: 0,
    //   propertyOwnerId: 0,
    //   propertyId: 1004,
    //   userName: 'NotSet',
    //   firstName: 'Janny',
    //   lastName: 'Lu',
    //   contactEmail: 'jannylu@gmail.com',
    //   contactTelephone1: '604-976-1235',
    //   contactTelephone2: '',
    //   onlineAccessEnabled: false,
    //   userAvartaImgUrl: '',
    //   isActive: true,
    //   roleId: 2,
    //   notes: 'New ower added',
    //   streetNumber: '234 Main Street',
    //   city: 'Vancouver',
    //   stateProv: 'BC',
    //   zipPostCode: 'V3V 2V2',
    //   country: 'Canada'
    // };

    // debugger;

    // return this.store.dispatch(addPropertyOwner({payload: owner}));
  }

  updateOwner() {
    const owner: any = {
      id: 2,
      // propertyOwnerId: 0,
      propertyId: 1002,
      userName: 'NotSet',
      firstName: 'John X.',
      lastName: 'Lu',
      contactEmail: 'jlu@gmail.com',
      contactTelephone1: '604-976-1235',
      contactTelephone2: '',
      onlineAccessEnabled: false,
      userAvartaImgUrl: '',
      isActive: true,
      roleId: 2,
      notes: 'Ower UPDATED again',
      streetNumber: '8989 Main Street',
      city: 'Vancouver',
      stateProv: 'BC',
      zipPostCode: 'V3V 2V2',
      country: 'Canada'
    };

    debugger;

    return this.store.dispatch(updatePropertyOwner({payload: owner}));
  }

  removeOwner() {
    const ownerToRemove: any = {
      propertyId: 1003,
      propertyOwnerId: 6
    };

    debugger;
    return this.store.dispatch(removePropertyOwner({payload: ownerToRemove}));
  }

  getCurrentUser() {
    return this.store.pipe(select(getUserInfo)).subscribe(userData => { // this.user = userData;

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

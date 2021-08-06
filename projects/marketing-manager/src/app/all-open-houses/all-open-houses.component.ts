import { Component, OnInit, ViewChild } from '@angular/core';
import { PropertyListingState } from '../store/marketing.state';
import { Store, select } from '@ngrx/store';
import { getOpenHouseList, getOpenHouseListByPm } from '../store/actions/marketing.actions';
import { openHouses, loadingStatus } from '../store/reducers/marketing.reducers';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OpenHouse } from '@lib/app-core';
import { Observable } from 'rxjs';
import { getUserInfo } from '@lib/auth';

@Component({
  selector: 'app-all-open-houses',
  templateUrl: './all-open-houses.component.html',
  styleUrls: ['./all-open-houses.component.scss']
})
export class AllOpenHousesComponent implements OnInit {

  openhouseList;
  loading$: Observable<boolean>;

  displayedColumns: string[] = ['icon', 'id', 'openhouseDate',  'startTime', 'endTime', 'propertyName', 'isActive', 'notes', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
// 'applicatnLastName',
  dataSource = new MatTableDataSource<OpenHouse>();

  loadingIndicator = false;
  username;
  userrole;

  constructor(private store: Store<PropertyListingState>) {
    this.store.select(openHouses)
    .subscribe( oh => {
      this.openhouseList = oh;
      this.dataSource.data = this.openhouseList;

      setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });

      console.log('openhouses', this.openhouseList);
    });
  }

  ngOnInit() {

    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.getCurrentUser();

    // this.store.dispatch(getOpenHouseList());
    if (this.userrole == 'pm') {
      console.log('get there for pm');
      this.store.dispatch(getOpenHouseListByPm({ payload: this.username }));
    } else {
      console.log('get there for all');
      this.store.dispatch(getOpenHouseList());
    }

    // if (!this.openhouseList) {
    //   this.store.dispatch(getOpenHouseList());
    // }
    // this.store.dispatch(getOpenHouseList());

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
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

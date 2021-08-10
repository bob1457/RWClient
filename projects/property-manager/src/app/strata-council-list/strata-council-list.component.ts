import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { getUserInfo } from '@lib/auth';
import { getCouncilListByUser } from 'projects/dashboard/src/projects';
import { Observable } from 'rxjs';
import { getCouncilList } from '../store/actions/property.actions';
import { PropertyState } from '../store/property.state';
import { councilList, loadingStatus } from '../store/reducers';

@Component({
  selector: 'app-strata-council-list',
  templateUrl: './strata-council-list.component.html',
  styleUrls: ['./strata-council-list.component.scss']
})
export class StrataCouncilListComponent implements OnInit {

  loading$: Observable<boolean>;

  // list: PropertyOwner[];
  councils$: Observable<any[]>;
  list: any[];
  id: number;
  username;
  userrole;

  dataSource = new MatTableDataSource<any>();
// 'address',
  displayedColumns: string[] = ['icon', 'id', 'councilname', 'managerName', 'contactEmail',
  'contactTelephone1',  'created', 'updated', 'action'];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private store: Store<PropertyState>) {
    this.store.pipe(select(councilList))
          .subscribe(data => {
            this.list = data;
            this.dataSource.data = this.list;

            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;

            setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });
      });
  }

  ngOnInit() {

    debugger;
    this.loading$ = this.store.pipe(select(loadingStatus));

    this.getCurrentUser();

    if (this.userrole == 'pm') {
      console.log('get there for creator');
      this.store.dispatch(getCouncilListByUser({ payload: this.username }));
    } else {
      console.log('get there for all');
      this.store.dispatch(getCouncilList());
    }

    // if (this.list == null) {
    //   this.store.dispatch(getCouncilList());
    // }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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

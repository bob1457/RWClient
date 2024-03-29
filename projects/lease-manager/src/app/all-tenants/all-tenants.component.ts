import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { getAllTenants, getAllTenantsByPm } from '../store/actions/lease.actions';
import { PropertyTenant, PropertyLease } from '@lib/app-core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { tenantList, loadingStatus } from '../store/reducers';
import { Observable } from 'rxjs';
import { getUserInfo } from '@lib/auth';

@Component({
  selector: 'app-all-tenants',
  templateUrl: './all-tenants.component.html',
  styleUrls: ['./all-tenants.component.scss']
})
export class AllTenantsComponent implements OnInit {

  list: PropertyTenant[];

  loading$: Observable<boolean>;
  username;
  userrole;

  listView = true;

  displayedColumns: string[] = ['icon', 'id', 'firstName', 'lastName', 'Telephone', 'Email', 'propertyName', 'created', 'modified', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<PropertyTenant>();

  constructor(private store: Store<PropertyLeaseState>) {
    this.store.pipe(
      select(tenantList)).subscribe(data => {
        this.list = data ;
        console.log(data);
        this.dataSource.data = this.list;
        console.log(this.dataSource.data);

        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
        setTimeout(() => { this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; });

      });
  }

  ngOnInit() {
    debugger;
    // return this.propertyService.getPropertyList().subscribe((pList: Property[]) => {this.list = pList; console.log(pList)});
    this.loading$ = this.store.pipe(select(loadingStatus));

    this.getCurrentUser();


    if (this.userrole == 'pm') {
      console.log('get there for pm');
      this.store.dispatch(getAllTenantsByPm({ payload: this.username }));
    } else {
      console.log('get there for all');
      this.store.dispatch(getAllTenants());
    }

    // if (!this.list) {
    //   this.store.dispatch(getAllTenants());
    // }




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

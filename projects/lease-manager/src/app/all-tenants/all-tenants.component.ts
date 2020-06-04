import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { getAllTenants } from '../store/actions/lease.actions';
import { PropertyTenant, PropertyLease } from '@lib/app-core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { tenantList, loadingStatus } from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-tenants',
  templateUrl: './all-tenants.component.html',
  styleUrls: ['./all-tenants.component.scss']
})
export class AllTenantsComponent implements OnInit {

  list: PropertyTenant[];

  loading$: Observable<boolean>;

  listView = true;

  displayedColumns: string[] = ['icon', 'id', 'Name', 'Telephone', 'Email', 'OnlineAccess', 'Property', 'created', 'modified', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<PropertyTenant>();

  constructor(private store: Store<PropertyLeaseState>) { }

  ngOnInit() {
    debugger;
    // return this.propertyService.getPropertyList().subscribe((pList: Property[]) => {this.list = pList; console.log(pList)});
    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.dispatch(getAllTenants());

    this.store.pipe(
      select(tenantList)).subscribe(data => {
        this.list = data ;
        console.log(data);
        this.dataSource.data = this.list;
        console.log(this.dataSource.data);

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      });

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}

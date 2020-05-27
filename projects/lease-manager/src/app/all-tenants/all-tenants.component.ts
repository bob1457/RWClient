import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { getAllTenants } from '../store/actions/lease.actions';
import { PropertyTenant, PropertyLease } from '@lib/app-core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { tenantList } from '../store/reducers';

@Component({
  selector: 'app-all-tenants',
  templateUrl: './all-tenants.component.html',
  styleUrls: ['./all-tenants.component.scss']
})
export class AllTenantsComponent implements OnInit {

  list: PropertyTenant[];

  listView = true;

  displayedColumns: string[] = ['icon', 'id', 'Name', 'Telephone', 'Email', 'OnlineAccess', 'Property', 'created', 'modified', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<PropertyTenant>();

  constructor(private store: Store<PropertyLeaseState>) { }

  ngOnInit() {
    debugger;
    // return this.propertyService.getPropertyList().subscribe((pList: Property[]) => {this.list = pList; console.log(pList)});
    this.store.dispatch(getAllTenants());

    this.store.pipe(
      select(tenantList)).subscribe(data => {
        this.list = data ;
        console.log(data);
        this.dataSource.data = this.list;
        console.log(this.dataSource.data);
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { PropertyListingState } from '../store/marketing.state';
import { Store, select } from '@ngrx/store';
import { getOpenHouseList } from '../store/actions/marketing.actions';
import { openHouses, loadingStatus } from '../store/reducers/marketing.reducers';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OpenHouse } from '@lib/app-core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-open-houses',
  templateUrl: './all-open-houses.component.html',
  styleUrls: ['./all-open-houses.component.scss']
})
export class AllOpenHousesComponent implements OnInit {

  openhouseList;
  loading$: Observable<boolean>;

  displayedColumns: string[] = ['icon', 'id', 'openHouseDate',  'startTime', 'endTime', 'rentalPRoperty', 'isActive', 'notes', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
// 'applicatnLastName',
  dataSource = new MatTableDataSource<OpenHouse>();

  loadingIndicator = false;

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

    this.loading$ = this.store.pipe(select(loadingStatus));

    if (this.openhouseList.length === 0) {
      this.store.dispatch(getOpenHouseList());
    }
    // this.store.dispatch(getOpenHouseList());

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}

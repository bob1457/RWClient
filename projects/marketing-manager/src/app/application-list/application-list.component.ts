import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyListingState } from '../store/marketing.state';
import { getRentalApplicationList, getRentalApplicationDetails } from '../store/actions/marketing.actions';
import { RentalApplication, MarketingService } from '@lib/app-core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { propertyApplications, loadingStatus, loadedStatus } from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss']
})
export class ApplicationListComponent implements OnInit {

  list: RentalApplication[];

  loading$: Observable<boolean>;
  loaded = false;

  displayedColumns: string[] = ['icon', 'id', 'applicatnFirstName',  'email', 'applicantContactTel', 'propertyName', 'applicantNubmerOfOccupants', 'rentalApplicationStatus', 'appliedDate', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
// 'applicatnLastName',
  dataSource = new MatTableDataSource<RentalApplication>();

  loadingIndicator = false;

  constructor(private store: Store<PropertyListingState>,
              private marketingService: MarketingService,
              private router: Router) {
                this.router.events.subscribe((routerEvent: Event) => {
                  if (routerEvent instanceof NavigationStart) {
                    this.loadingIndicator = true;
                  }

                  if (routerEvent instanceof NavigationEnd ){
                    this.loadingIndicator = false;
                  }
                });

                this.store.pipe(
                  select(propertyApplications)).subscribe(data => {
                    this.list = data ;
                    console.log(data);
                    this.dataSource.data = this.list;
                    console.log(this.dataSource.data);

                    setTimeout(() =>  {this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort;});

                  }
                );
              }

  ngOnInit() {
    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.store.select(loadedStatus)
        .subscribe(res => this.loaded = res);

    if (!this.list) {
          this.store.dispatch(getRentalApplicationList())  ;
        }

    // this.store.pipe(
    //   select(propertyApplications)).subscribe(data => {
    //     this.list = data ;
    //     console.log(data);
    //     this.dataSource.data = this.list;
    //     console.log(this.dataSource.data);

    //     this.dataSource.sort = this.sort;
    //     this.dataSource.paginator = this.paginator;
    //   }
    //   );


  }

  // GetApplicationDetails(id: number) {
  //   debugger;
  //   return this.store.dispatch(getRentalApplicationDetails({payload: id}));
  // }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}

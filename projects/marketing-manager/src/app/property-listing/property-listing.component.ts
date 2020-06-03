import { updatePropertyListing } from './../store/actions/marketing.actions';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PropertyListingState } from '../store/marketing.state';
import { getPropertyListing, getPropertyListingDetails, addPropertyListing } from '../store/actions/marketing.actions';
import { PropertyListing, MarketingService } from '@lib/app-core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { propertyList } from 'projects/property-manager/src/app/store/reducers';
import { propertyListing, loadingStatus } from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.scss']
})
export class PropertyListingComponent implements OnInit {

  list: PropertyListing[];

  loading$: Observable<boolean>;

  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['icon', 'id', 'title', 'listingDesc', 'propertyName', 'isActive', 'created', 'updated', 'action'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource = new MatTableDataSource<PropertyListing>();

  loadingIndicator = false;

  constructor(private store: Store<PropertyListingState>,
              private marketingService: MarketingService,
              private router: Router ) {
                this.router.events.subscribe((routerEvent: Event) => {
                  if (routerEvent instanceof NavigationStart) {
                    this.loadingIndicator = true;
                  }

                  if (routerEvent instanceof NavigationEnd ){
                    this.loadingIndicator = false;
                  }

                });
               }

  ngOnInit() {
    debugger;

    this.loading$ = this.store.pipe(select(loadingStatus));

    // return this.propertyService.getPropertyList().subscribe((pList: Property[]) => {this.list = pList; console.log(pList)});
    this.store.dispatch(getPropertyListing());

    this.store.pipe(
      select(propertyListing)).subscribe(data => {
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



  GetPropertyListingDetails(id: number) {
    debugger;
    return this.store.dispatch(getPropertyListingDetails({payload: id}));
  }

  AddPropertyListing() {

    const listing: PropertyListing = {
      id: 0,
      title: 'New Listing',
      rentalPropertyId: 8,
      listingDesc: 'Newly listed ...',
      // listingStatus: 'pending',
      monthlyRent: 1500,
      notes: 'Just listed',
      contactName: 'Michelle Lu',
      contactTel: '123-456-7890',
      contactEmail: 'ml@real.com',
      contactSMS: '',
      contactOther: ''
    };



    debugger;
    return this.store.dispatch(addPropertyListing({payload: listing}));

  }

  UpdatePropertyListing() {

    const listing: any = {
      id: 3,
      title: 'Updated Listing',
      rentalPropertyId: 8,
      listingDesc: 'Newly listed ...',
      // listingStatus: 'pending',
      monthlyRent: 1500,
      notes: 'Just listed',
      contactName: 'Michelle Lu',
      contactTel: '778-456-7890',
      contactEmail: 'ppt@real.com',
      contactSMS: '',
      contactOther: ''
    };

    debugger;
    return this.store.dispatch(updatePropertyListing({payload: listing}));

  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceRequest } from '@lib/app-core';
import { Store } from '@ngrx/store';
import { PropertyLeaseState } from '../store/lease-state';
import { serviceRequestList, getServiceRequestList } from '../store/reducers/lease.reducers';
import { getAllServiceRequests } from '../store/actions/lease.actions';

@Component({
  selector: 'app-servie-request-list',
  templateUrl: './servie-request-list.component.html',
  styleUrls: ['./servie-request-list.component.scss']
})
export class ServieRequestListComponent implements OnInit {

  list: ServiceRequest[];

  constructor(private store: Store<PropertyLeaseState>) {
    this.store.select(serviceRequestList)
        .subscribe(data => {
          this.list = data;
          console.log('sq', this.list);
        });
  }

  ngOnInit() {


    this.store.dispatch(getAllServiceRequests());
  }

}

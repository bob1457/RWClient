import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { ManagementContract } from '@lib/app-core';
import { contractDetails } from '../store/reducers/property.reducer';

@Component({
  selector: 'app-contract-view',
  templateUrl: './contract-view.component.html',
  styleUrls: ['./contract-view.component.scss']
})
export class ContractViewComponent implements OnInit {

  id: number;
  contract: ManagementContract;

  constructor( private store: Store<PropertyState>,
               private actRoute: ActivatedRoute,
               private router: Router) {
              this.id = this.actRoute.snapshot.params.id;
              console.log(this.id);
  }

  ngOnInit() {
    debugger;
    this.store.pipe(select(contractDetails))
              .subscribe(data => this.contract = data);
  }

}

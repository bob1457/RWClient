import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyListingState } from '../store/marketing.state';
import { Store, select } from '@ngrx/store';
import { propertyApplicationDetails } from '../store/reducers';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss']
})
export class ScreeningComponent implements OnInit {

  id: number;

  application: any;

  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              private store: Store<PropertyListingState>) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);
              }

  ngOnInit() {

    this.store.pipe(select (propertyApplicationDetails))
        .subscribe(data => {
          this. application = data;
          console.log(this.application);
    });
  }




  goBack() {
    this.router.navigate(['/Manage/marketing/screeninglist']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyListingState } from '../store/marketing.state';
import { Store, select } from '@ngrx/store';
import { propertyApplicationDetails } from '../store/reducers';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss']
})
export class ScreeningComponent implements OnInit {

  id: number;
  application: any;
  addForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private actRoute: ActivatedRoute,
              private store: Store<PropertyListingState>) {
                this.id = this.actRoute.snapshot.params.id;
                console.log(this.id);

                this.store.pipe(select(propertyApplicationDetails)) // select date from state in store
                          .subscribe(app => {
                            this.application = app;
                });
              }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      rentalApplicationId: [],
      referenceCheckScore: [],
      creditCheckScore: [],
      incomeCheckScore: [],
      otherCheckScore: [],
      notes: ['']
    });

    this.store.pipe(select (propertyApplicationDetails))
        .subscribe(data => {
          this. application = data;
          console.log(this.application);
    });
  }


  submit() {
    debugger;
    console.log('screen form', this.addForm.value);
  }


  goBack() {
    this.router.navigate(['/Manage/marketing/screeninglist']);
  }

}

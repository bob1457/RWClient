import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PropertyState } from '../store/property.state';
import { councilDetails, loadingStatus, propertyList,  } from '../store/reducers';
import { getCouncilDetails, updateCouncil} from '../store/actions/property.actions';

@Component({
  selector: 'app-strata-details',
  templateUrl: './strata-details.component.html',
  styleUrls: ['./strata-details.component.scss']
})
export class StrataDetailsComponent implements OnInit {

  loading$: Observable<boolean>;
  detailsForm: FormGroup;
  strata;
  managedProperties;
  id: number;

  constructor(private formBuilder: FormBuilder,
              private store: Store<PropertyState>,
              private actRoute: ActivatedRoute,
              private router: Router ) {
                this.id = this.actRoute.snapshot.params.id;
                this.store.pipe(select(councilDetails))
                    .subscribe(data => {
                      this.strata = data;
                      console.log('strata', this.strata);
                    });
              }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.detailsForm = this.formBuilder.group({
      councilName: [''],
      description: [''],
      inChargeManagerFirstName: [''],
      inChargeManagerLastName: [''],
      inChargeManagerContactTel: [''],
      inChargeManagerContactEmail: [''],
      isActive:[true],
      notes:[''],
      id: [],
      // createdBy: [''],
      updatedBy: ['']
    });


    this.store.dispatch(getCouncilDetails({payload: this.id}));

    this.store.select(propertyList).subscribe(list => {

      this.managedProperties = list.filter(l => l.strataCouncilId == this.id);
      console.log('managed ppt', this.managedProperties);

    });

  }

  submit() {
    debugger;
    this.detailsForm.patchValue({
      id: Number(this.id)
    });

    console.log('update council form', this.detailsForm.value);

    this.store.dispatch(updateCouncil({payload: this.detailsForm.value}));
  }

  goBack() {
    this.router.navigate(['/Manage/property/stratas']);
  }

}

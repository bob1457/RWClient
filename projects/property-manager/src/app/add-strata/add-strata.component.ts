import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { addCouncil } from '../store/actions/property.actions';
import { PropertyState } from '../store/property.state';
import { councilList, loadingStatus, propertyList } from '../store/reducers';
import { Observable } from 'rxjs';
import { PropertyService } from '@lib/app-core';

@Component({
  selector: 'app-add-strata',
  templateUrl: './add-strata.component.html',
  styleUrls: ['./add-strata.component.scss']
})
export class AddStrataComponent implements OnInit {

  addForm : FormGroup;
  pList;
  strataOption = 'new';
  stratas;

  loading$: Observable<boolean>;

  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private propertyService: PropertyService,
              private store: Store<PropertyState>) { }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.addForm = this.formBuilder.group({
      councilId: [0],
      propertyId: [],
      councilName: [''],
      description: [''],
      inChargeManagerFirstName: [''],
      inChargeManagerLastName: [''],
      inChargeManagerContactTel: [''],
      inChargeManagerContactEmail: [''],
      isActive:[true],
      notes:[''],
      strataOption: []
    });

    this.store.select(propertyList).subscribe(list => {
      this.pList = list.filter(t => t.type == 'Apartment');
      console.log('apt', this.pList);
    });

    this.store.select(councilList).subscribe(councils => {
      this.stratas = councils;
    });
  }

  submit() {
    debugger;
    console.log('add strata form', this.addForm.value);

    if(this.strataOption == 'new') {
      this.store.dispatch(addCouncil({payload: this.addForm.value}));
    } else {
      this.propertyService.addCouncil(this.addForm.value)
                          .subscribe(data => {
                            console.log('service all sent');
                          });
    }
    // this.store.dispatch(addCouncil({payload: this.addForm.value}));
    this.location.back();
  }

  onChange(id) {
    console.log(id);
    this.addForm.get('propertyId').setValue(id);
    console.log(this.addForm.get('propertyId').value);

    // this.store.select(propertyList).subscribe(list => {
    //   this.pList = list.filter(t => t.type == 'Apartment');
    //   console.log('apt', this.pList);
    // });
  }

  onStrataChange(id) {
    this.addForm.get('councilId').setValue(id);
    console.log(this.addForm.get('councilId').value);

  }

  changeOption(event) {
    console.log('radio click', event.value);
    if (event.value == 'new') {
      this.addForm.get('councilId').setValue(0);
    }
  }


}

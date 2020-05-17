import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PropertyState } from '../store/property.state';
import { Store, select } from '@ngrx/store';
import { Property, PropertyOwner } from '@lib/app-core';
import { propertyList, ownerList } from '../store/reducers';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.scss']
})
export class AddOwnerComponent implements OnInit {

  addForm: FormGroup;

  ownerOption = 'existing';
  owners: PropertyOwner[];

  properties: Property[];
  // properties: any = [
  //   { id: '1', propertyName: '621 Coquitlam'},
  //   { id: '2', propertyName: '1307 Surrey'}
  // ];
  address: any = {
    street: '',
    city: '',
    provState: '',
    postZipCoe: '',
    country: ''
  };

  selected = false;


  constructor(private formBuilder: FormBuilder,
              private store: Store<PropertyState>) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      firstName: [],
      lastName: [],
      contactEmail: [],
      contactTelephone1: [],
      contactTelephone2: [],
      propertyId: [],

      ownerOption: []

    });

    this.store.pipe(select(propertyList))
        .subscribe(data => this.properties = data);

    this.store.pipe(select(ownerList))
        .subscribe(data => {
          this.owners = data;
          console.log(this.owners);
        });
  }

  onChange(id) { // aelect property
    this.selected = true;
    console.log(id);
    this.addForm.get('propertyId').setValue(id);
    console.log(this.addForm.get('propertyId').value);

// debugger;

    this.store.pipe(select(propertyList))
        .subscribe(res => {
          const property = this.properties.find(p => p.id === id);
          this.address.street = property.propertyNumber + ' ' + property.propertyStreet;
          this.address.city = property.propertyCity;
          this.address.provState = property.propertyStateProvince;
          this.address.postZipCode = property.propertyZipPostCode;
          this.address.country = property.propertyCountry;


          console.log(this.address);
        });
  }

  onOwnerChange(id) {

  }

}

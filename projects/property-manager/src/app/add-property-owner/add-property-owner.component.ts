import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropertyOwner } from '@lib/dashboard/lib/models/property-owner.model';
import { PropertyOwnerService } from '@lib/app-core';
import * as fromAuth from '@lib/auth';
import { Store, select } from '@ngrx/store';
import { OwnerList } from '@lib/dashboard';

@Component({
  selector: 'app-add-property-owner',
  templateUrl: './add-property-owner.component.html',
  styleUrls: ['./add-property-owner.component.scss']
})
export class AddPropertyOwnerComponent implements OnInit {

  @Input() addForm: FormGroup;
  // @Input() owners: PropertyOwner[];

// PropertyOwner
  owners: any[] = [
    // { value: '1', viewValue: 'Bob Yuan'}
  ];

  ownerOption: string;
  sameAddress = false;

  constructor(private ownerService: PropertyOwnerService,
              private store: Store<fromAuth.AuthState>) { }

  ngOnInit() {
    this.ownerOption = 'existing';

    // this.ownerService.getPropertyOwnerList()
    // .subscribe( owners => {
    //   this.owners = owners;
    //   console.log(this.owners);
    // });
    this.store.pipe(select(OwnerList)).subscribe(data => {
      this.owners = data;
      console.log(this.owners);
    });

  }

  public onChange(id) {
    // debugger;
    console.log(id);
    this.addForm.get('propertyOwnerId').setValue(id);

    this.store.pipe(select(OwnerList)).subscribe(data => {
      const owner = this.owners.find( o => o.id === id);
      console.log(owner);
      this.addForm.get('firstName').setValue(owner.firstName);
      this.addForm.get('lastName').setValue(owner.lastName);

      this.addForm.get('contactEmail').setValue(owner.contactEmail);
      this.addForm.get('contactTelephone1').setValue(owner.contactTelephone1);
      this.addForm.get('ownerStreetNumber').setValue(owner.streetNumber);
      this.addForm.get('ownerCity').setValue(owner.city);
      this.addForm.get('ownerStateProv').setValue(owner.stateProvince);
      this.addForm.get('ownerZipPostCode').setValue(owner.zipPostCode);
      this.addForm.get('ownerCountry').setValue(owner.country);
    });


  }

  statusChange(e) {
    debugger;
    console.log(e.checked);
    this.sameAddress = e.checked;
  }


}

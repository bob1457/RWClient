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
      const owner = this.owners.filter( o => o.id === id);
      console.log(owner);
      this.addForm.get('firstName').setValue(owner[0].firstName);
      this.addForm.get('lastName').setValue(owner[0].lastName);

      this.addForm.get('contactEmail').setValue(owner[0].contactEmail);
      this.addForm.get('contactTelephone1').setValue(owner[0].contactTelephone1);
      this.addForm.get('ownerStreetNumber').setValue(owner[0].streetNumber);
      this.addForm.get('ownerCity').setValue(owner[0].city);
      this.addForm.get('ownerStateProv').setValue(owner[0].stateProvince);
      this.addForm.get('ownerZipPostCode').setValue(owner[0].zipPostCode);
      this.addForm.get('ownerCountry').setValue(owner[0].country);
    });


  }

  statusChange(e) {
    debugger;
    console.log(e.checked);
    this.sameAddress = e.checked;
  }


}

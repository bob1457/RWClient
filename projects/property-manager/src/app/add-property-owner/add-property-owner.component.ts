import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PropertyOwner } from '@lib/dashboard/lib/models/property-owner.model';
import { PropertyOwnerService } from '@lib/app-core';

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

  constructor(private ownerService: PropertyOwnerService) { }

  ngOnInit() {
    this.ownerOption = 'existing';

    this.ownerService.getPropertyOwnerList()
    .subscribe( owners => {
      this.owners = owners;
      console.log(this.owners);
    });

    // for each owner, load name to a list
    console.log(this.owners);
  }


}

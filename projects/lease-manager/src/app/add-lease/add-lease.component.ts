import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Property } from '@lib/app-core';

@Component({
  selector: 'app-add-lease',
  templateUrl: './add-lease.component.html',
  styleUrls: ['./add-lease.component.scss']
})
export class AddLeaseComponent implements OnInit {

  addForm: FormGroup;

  properties: Property[];

  constructor(private formBuilder: FormBuilder,
               ) { }

  ngOnInit() {

    // this.store.pipe(select(propertyList))
    // .subscribe(data => this.properties = data);

    this.addForm = this.formBuilder.group({
      leaseTitle: [],
      leaseDesc: [],
      rentalPropertyId: [],
      leaseStartDate: [],
      leaseEndDate: [],
      term: [],
      rentFrequency: [],

      rentAmount: [],
      rentDueOn: [],
      damageDepositAmount: [],
      petDepositAmount: [0],
      leaseSignDate: [],
      leaseAgreementDocUrl: [],
      isActive: [true],
      isAddendumAvailable: [false],
      leaseEndCode: [],
      renewTerm: [],
      notes: [],
      newTenantId: [],
      onlineAccessEnbaled: [false],
      userAvartaImgUrl: [],
      roleId: [3],
      agentFirstName: [],
      agentLastName: [],
      agentContactEmail: [],
      contatTel: [],
      agentContactOthers: [],
      isPropertyManager: [true],
      addressStreetNumber:[],
      addressCity: [],
      addressStateProv: [],
      addressZipPostCode:  [],
      addressCountry: [],
      propertyName: [],
      propertyType: [],
      streetNum: [],
      city: [],
      stateProvince: [],
      country: [],
      zipPostCode: [],
      water: [true],
      cablevison: [false],
      electricity: [false],
      internet: [false],
      heat: [true],
      naturalGas: [false],
      sewageDisposal: [true],
      snowRemoval: [true],
      storage: [false],
      recreationFacility: [false],
      garbageCollection: [true],
      recycleServices: [false],
      kitchenScrapCollection: [false],
      laundry: [true],
      freeLaundry: [true],
      regfrigerator: [true],
      dishwasher: [true],
      stoveOven: [true],
      windowCovering: [true],
      furniture: [false],
      carpets: [true],
      parkingStall: [1],
      other: []


    });
  }

}

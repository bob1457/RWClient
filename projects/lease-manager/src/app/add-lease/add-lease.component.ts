import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Property, RentalProperty, LeaseService, NewTenant } from '@lib/app-core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-lease',
  templateUrl: './add-lease.component.html',
  styleUrls: ['./add-lease.component.scss']
})
export class AddLeaseComponent implements OnInit {

  addForm: FormGroup;

  properties$: Observable<RentalProperty[]>;
  newTenants$: Observable<NewTenant[]>;

  constructor(private formBuilder: FormBuilder,
              private leaseService: LeaseService ) { }



  ngOnInit() {

    // this.store.pipe(select(propertyList))
    // .subscribe(data => this.properties = data);
    debugger;

    this.properties$ = this.leaseService.getAllRentalProperties();
    this.newTenants$ = this.leaseService.getAllNewTenants();

    this.addForm = this.formBuilder.group({
      id: [0],
      leaseTitle: [''],
      leaseDesc: [''],
      rentalPropertyId: [0],
      leaseStartDate: [''],
      leaseEndDate: [''],
      term: [''],
      rentAmount: [],
      rentFrequency: [''],

      rentDueOn: [''],
      leaseAgreementDocUrl: [false],
      leaseEndCode: [0],
      // regigerator: [false],

      damageDepositAmount: [],
      petDepositAmount: [],
      leaseSignDate: [''],
      isActive: [true],
      isAddendumAvailable: [false],
      // endLeaseCode: [''],
      renewTerm: [''],
      notes: [''],

      // rentalProperty: this.formBuilder.group({
      //   propertyName: [],
      //   address: this.formBuilder.group({
      //     streetNum: [],
      //     city: [],
      //     stateProvince: [],
      //     zipPostCode: []
      //   })
      // }),

      water: [false],
      cablevison: [false],
      electricity: [false],
      internet: [false],
      heat: [false],
      naturalGas: [false],
      sewageDisposal: [false],
      snowRemoval: [false],
      storage: [false],
      recreationFacility: [false],
      garbageCollection: [false],
      recycleServices: [false],
      kitchenScrapCollection: [false],
      laundry: [false],
      freeLaundry: [false],
      regigerator: [false],
      dishwasher: [false],
      stoveOven: [false],
      windowCovering: [false],
      furniture: [false],
      carpets: [false],
      parkingStall: [0],
      other: [''],

      numberOfParking: [0] //,
      // leaseTitle: [],
      // leaseDesc: [],
      // rentalPropertyId: [],
      // leaseStartDate: [],
      // leaseEndDate: [],
      // term: [],
      // rentFrequency: [],

      // rentAmount: [],
      // rentDueOn: [],
      // damageDepositAmount: [],
      // petDepositAmount: [0],
      // leaseSignDate: [],
      // leaseAgreementDocUrl: [],
      // isActive: [true],
      // isAddendumAvailable: [false],
      // leaseEndCode: [],
      // renewTerm: [],
      // notes: [],
      // newTenantId: [],
      // onlineAccessEnbaled: [false],
      // userAvartaImgUrl: [],
      // roleId: [3],
      // agentFirstName: [],
      // agentLastName: [],
      // agentContactEmail: [],
      // contatTel: [],
      // agentContactOthers: [],
      // isPropertyManager: [true],
      // addressStreetNumber:[],
      // addressCity: [],
      // addressStateProv: [],
      // addressZipPostCode:  [],
      // addressCountry: [],
      // propertyName: [],
      // propertyType: [],
      // streetNum: [],
      // city: [],
      // stateProvince: [],
      // country: [],
      // zipPostCode: [],
      // water: [true],
      // cablevison: [false],
      // electricity: [false],
      // internet: [false],
      // heat: [true],
      // naturalGas: [false],
      // sewageDisposal: [true],
      // snowRemoval: [true],
      // storage: [false],
      // recreationFacility: [false],
      // garbageCollection: [true],
      // recycleServices: [false],
      // kitchenScrapCollection: [false],
      // laundry: [true],
      // freeLaundry: [true],
      // // regfrigerator: [true],
      // regigerator: [false],
      // dishwasher: [true],
      // stoveOven: [true],
      // windowCovering: [true],
      // furniture: [false],
      // carpets: [true],
      // parkingStall: [1],
      // other: []


    });
  }

  onPropertyChange(id) {
    console.log('p', id);
  }

  onTenantChange(id) {
    console.log('t', id);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Property, RentalProperty, LeaseService, NewTenant } from '@lib/app-core';
import { Observable } from 'rxjs';
import { Location }  from '@angular/common';
import { addLease } from '../store/actions/lease.actions';
import { PropertyLeaseState } from '../store/lease-state';
import { Store } from '@ngrx/store';
import { AuthState, getUserInfo, User } from '@lib/auth';


@Component({
  selector: 'app-add-lease',
  templateUrl: './add-lease.component.html',
  styleUrls: ['./add-lease.component.scss']
})
export class AddLeaseComponent implements OnInit {

  addForm: FormGroup;
  user: User;

  properties$: Observable<RentalProperty[]>;
  newTenants$: Observable<NewTenant[]>;

  constructor(private formBuilder: FormBuilder,
              private location: Location,
              private store: Store<PropertyLeaseState>,
              private authStore: Store<AuthState>,
              private leaseService: LeaseService ) {
                this.authStore.select(getUserInfo)
                    .subscribe( user => this.user = user);
              }



  ngOnInit() {

    // this.store.pipe(select(propertyList))
    // .subscribe(data => this.properties = data);
    debugger;

    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1 ) + '-' + today.getDate();

    this.properties$ = this.leaseService.getAllRentalProperties();
    this.newTenants$ = this.leaseService.getAllNewTenants();

    this.addForm = this.formBuilder.group({
      leaseTitle: [''],
      leaseDesc: [''],
      rentalPropertyId: [0],
      leaseStartDate: [''],
      leaseEndDate: [''],
      term: [''],
      rentAmount: [],
      rentFrequency: [''],

      rentDueOn: [''],
      leaseAgreementDocUrl: [''],
      leaseEndCode: [],
      // regigerator: [false],

      damageDepositAmount: [],
      petDepositAmount: [],
      leaseSignDate: [date],
      isActive: [false],
      isAddendumAvailable: [false],
      // endLeaseCode: [''],
      renewTerm: [''],
      notes: [''],
      newTenantId: [],

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
      // freeLaundry: [false],
      regfrigerator: [false],
      dishwasher: [false],
      stoveOven: [false],
      windowCovering: [false],
      furniture: [false],
      carpets: [false],
      parkingStall: [0],
      other: [''],



      agentFirstName: [''],
      agentLastName: [''],
      agentContactEmail: [''],
      contatTel: [''],
      agentContactOthers: [''],
      isPropertyManage: [true],
      addressStreetNumber: [''],
      addressCity: [''],
      addressStateProv: [''],
      addressZipPostCode: [''],
      addressCountry: [''],

      onlineAccessEnbaled: [false],
      userAvartaImgUrl: [''],



    });
  }

  onPropertyChange(id) {
    this.addForm.get('rentalPropertyId').setValue(id);
    console.log('p', id);
  }

  onTenantChange(id) {
    this.addForm.get('newTenantId').setValue(id);
    console.log('t', id);
  }

  submit() {
    debugger;
    // Get user data
    this.addForm.patchValue({
      agentFirstName: this.user.firstname,

      agentLastName: this.user.lastname,
      agentContactEmail: this.user.email,
      contatTel: this.user.telephone1,
      // agentContactOthers:[],
      isPropertyManage: true,
      addressStreetNumber: this.user.addressstreet,
      addressCity: this.user.addresscity,
      addressStateProv: this.user.addressprovstate,
      addressZipPostCode: this.user.addresspostzipcode,
      addressCountry: this.user.addresscountry
    });

    console.log('add form', this.addForm.value);
    this.store.dispatch(addLease({payload: this.addForm.value}));
    this.location.back();
  }

  back() {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { ManagementContractService, ManagementContract } from '@lib/app-core';
import { getContractDetails, updateContract } from '../store/actions/property.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { selectPropertyState, contractDetails, loadingStatus } from '../store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {

  id: number;

  loading$: Observable<boolean>;

  detailsForm: FormGroup;;
  contract: any;// ManagementContract;
  editSignDate = false;

  // contract$ = this.store.pipe(select(contractDetails))
  //             .subscribe(data => {
  //               this.contract = data;
  //             });

  constructor(private actRoute: ActivatedRoute,
              private store: Store<PropertyState>,
              private formBuilder: FormBuilder,
              private router: Router,
              private contractService: ManagementContractService) {
    this.id = this.actRoute.snapshot.params.id;
    console.log(this.id);
    this.store.pipe(select(contractDetails))
              .subscribe(data => {
                this.contract = data;
                console.log(this.contract);
              });
   }

  ngOnInit() {

    this.loading$ = this.store.pipe(select(loadingStatus));

    this.getContractDetails(this.id);

    // by service directly
    // this.getContractDetailsByService(this.id);

    this.detailsForm = this.formBuilder.group({
      id: [''],
      managementContractTitle: [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      placementFeeScale: ['', Validators.required],
      managementFeeScale: ['', Validators.required],
      propertyName: [''],
      managementContractDocUrl: [false],
      // managementContractType: [''],
      contractSignDate: [''],
      type:[],
      isActive: [true],
      solicitingOnly: [false],
      notes: [''],

      created: [''],
      updated: ['']
    });

    // this.store.pipe(select(contractDetails))
    //           .subscribe(data => {
    //             this.contract = data;
    //             if (data == null){
    //               this.getContractDetails(this.id);
    //             }
    //             else {
    //               this.detailsForm.patchValue(data);
    //             }
    //           });

  }

  getContractDetails(id: number) {
    this.store.dispatch(getContractDetails({payload: id}));
  }

  // getContractDetailsByService (id: number) {
  //   this.contractService.getManagementContractDetails(id)
  //                       .subscribe(data => {
  //                         this.contract = data;
  //                         this.detailsForm.patchValue(data);
  //                       })
  // }

  submit() {
    debugger;
    this.detailsForm.patchValue({
      contractSignDate: this.contract.contractSignDate
    });
    console.log('contract update form', this.detailsForm.value);
    this.store.dispatch(updateContract({payload: this.detailsForm.value}));
    this.editSignDate = false; // how to maek it done when update is finished and data returned??
  }

  viewContract() {
    console.log('show contract');
  }

  editDate() {
    this.editSignDate = !this.editSignDate;
  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  onChange( files ) {
    debugger;
    console.log('file selected');
    // var control = new FormControl();
    // const primativeFileList: FileList = control.value;
    // const cloneFiles = { ...primativeFileList};
    // this.store.dispatch(uploadPropertyImage({payload: files, rentalPropertyId: this.listing.rentalPropertyId}));
  }

  goBack() {
    this.router.navigate(['/Manage/property/contracts']);
  }

}

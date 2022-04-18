import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { PropertyState } from '../store/property.state';
import { ManagementContractService, ManagementContract } from '@lib/app-core';
import { getContractDetails, updateContract } from '../store/actions/property.actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { selectPropertyState, contractDetails, loadingStatus } from '../store/reducers';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class ContractDetailsComponent implements OnInit {

  id: number;

  loading$: Observable<boolean>;

  detailsForm: FormGroup;;
  contract: any;// ManagementContract;
  editSignDate = false;
  saving = false;
  done = false;
  fileUploaded = false;
  // serverUrl = 'http://localhost:19807/';

  // contract$ = this.store.pipe(select(contractDetails))
  //             .subscribe(data => {
  //               this.contract = data;
  //             });

  constructor(private actRoute: ActivatedRoute,
              private datePipe: DatePipe,
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
    // debugger;
    // console.log('file selected');
    // var control = new FormControl();
    // const primativeFileList: FileList = control.value;
    // const cloneFiles = { ...primativeFileList};
    // this.store.dispatch(uploadPropertyImage({payload: files, rentalPropertyId: this.listing.rentalPropertyId}));

    debugger;
    // const file = files.[0];
    this.saving = true;
    console.log(files);

    // this.showErr = false;

    if (files[0].type === 'application/pdf') {
      // this.store.dispatch(uploadPropertyImage({ payload: files, rentalPropertyId: this.listing.rentalPropertyId }));
      // alert('ACCEPTED !!!');
      this.contractService.uploadContractFile(files, this.contract.id).subscribe(res => {
        this.saving = false;
        this.done = true;
        this.getContractDetails(this.id);
        this.store.pipe(select(contractDetails))
          .subscribe(data => {
            this.contract = data;
            console.log('refereshed contract', this.contract);
          });
        this.fileUploaded = true;
        setTimeout(() => { this.done = false; }, 2000);
        console.log('response', res);
      });

    } else {
      alert('ONLY PDF files are accepted');
      // this.showErr = true;
    }
  }

  getToday() {
    let d = new Date();
    // d.setDate(d.getDate() + 1);
    d.getDate();
    return this.datePipe.transform(d, 'yyyy-MM-dd');
  }

  goBack() {
    this.router.navigate(['/Manage/property/contracts']);
  }

}

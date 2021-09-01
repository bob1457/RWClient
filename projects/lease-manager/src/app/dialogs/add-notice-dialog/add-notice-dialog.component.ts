import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LeaseService } from '@lib/app-core';

@Component({
  selector: 'app-add-notice-dialog',
  templateUrl: './add-notice-dialog.component.html',
  styleUrls: ['./add-notice-dialog.component.scss']
})
export class AddNoticeDialogComponent implements OnInit {

  addNoticeForm: FormGroup;

  reasons = new FormControl();
  reasonList; // = [];

  constructor(private formBuilder: FormBuilder,
              private leaseService: LeaseService) { }

  ngOnInit() {

    debugger;
    this.leaseService.getNoticeReasonItems(0)
      .subscribe(items => {
        console.log('reason list', items);
        this.reasonList = items;
        console.log('reason list in dialog', this.reasonList);
        this.addReasonItems();
      });

    this.addNoticeForm = this.formBuilder.group({
      reasonInNotice: this.formBuilder.array([
        // this.reasonItems(),
        // this.reasonItems()
      ]),

      leaseId: [],
      type: Number([]),
      noticeDesc: [''],
      isServed: [true],
      howIsServed: Number([]),
      serviceDate: [''],
      isActive: [true],
      outstandingRent: [0],
      outstandingUtilities: [0],
      utilityDueDate: [''],
      requiredMoveOutDate: [''],
    });

    // this.addReasonItems();
  }

  reasonInNotice(): FormArray {
    return this.addNoticeForm.get('reasonInNotice') as FormArray;
  }

  reasonItems(): FormGroup {
    return this.formBuilder.group({
      serviceNoticeId: [],
      reasonCodeId: [],
      applied: [false],
      reasonClause: ['']
    });
  }

  addReasonItems() {
    // for (const item of Object.keys(this.reasonList)) {
    //   // this.reasonInNotice().push(this.reasonItems());
    //   this.reasonInNotice().push(this.formBuilder.group({
    //       serviceNoticeId: 0,
    //       reasonCodeId: item[0],
    //       applied: false,
    //       reasonClause: item[2]
    //     })
    //   );
    // }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.reasonList.length; i++) {
      this.reasonInNotice().push(this.reasonItems());
    }

  }


  CreateNotice() {
    debugger;
    // this.addNoticeForm.value;
    console.log('notice form', this.addNoticeForm.value);
  }

}

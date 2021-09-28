import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { addAddendum } from '../../store/actions/lease.actions';
import { PropertyLeaseState } from '../../store/lease-state';

@Component({
  selector: 'app-add-addendem-dialog',
  templateUrl: './add-addendem-dialog.component.html',
  styleUrls: ['./add-addendem-dialog.component.scss']
})
export class AddAddendemDialogComponent implements OnInit {

  addAddendumForm: FormGroup;
  // addendumClause = new FormControl();
  clauseItemContent = '';

  addendumClauseText = [
    { clauseTitle: 'clause 1', clauseContent: 'Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit, sed' },
    { clauseTitle: 'clause 2', clauseContent: 'Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit, sed' },
    { clauseTitle: 'clause 3', clauseContent: 'Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit, sed' },
    { clauseTitle: 'clause 4', clauseContent: 'Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit, sed' },
    { clauseTitle: 'clause 5', clauseContent: 'Lorem 5 ipsum dolor sit amet, consectetur adipiscing elit, sed' },
    { clauseTitle: 'clause 6', clauseContent: 'Lorem 6 ipsum dolor sit amet, consectetur adipiscing elit, sed' },
  ];

  addendumHeader = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui';

  addendumContent = 'Beginning content';
  addendumFooter = 'Ending content, signatuure, etc.';
  editEnabled = false;

  clauseContents = [];

  constructor(private formBuilder: FormBuilder,
              private store: Store<PropertyLeaseState>,
              public dialogRef: MatDialogRef<AddAddendemDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: { id: number }) { }

  ngOnInit() {

    this.addAddendumForm = this.formBuilder.group({

      addendumItems: this.formBuilder.array([]),

      leaseId: Number([]),
      headerText: [''],
      contentText: [''],
      footerText: ['']
    });

    // console.log('edit enabled', this.editEnabled);
    console.log('lease id', this.data.id);
  }

  addendumItems(): FormArray {
    return this.addAddendumForm.get('addendumItems') as FormArray;
  }

  newItem(): FormGroup {
    return this.formBuilder.group({
      ItemContent: ['']
    });
  }

  addNewItem() {
    debugger;
    this.addendumItems().push(this.newItem());
    console.log('new items', this.addendumItems);
  }

  removeItem(itemIndex) {
    this.addendumItems().removeAt(itemIndex);
  }

  enableEdit() {
    this.editEnabled = !this.editEnabled;
  }

  onItemChange(item) {
    console.log('item selected', item);
    // this.clauseItemContent = item.clauseContent;
    this.clauseContents.push(item.clauseContent);
    console.log('item content', this.clauseContents);
  }

  addAddendum() {
    debugger;
    this.addAddendumForm.patchValue({
      leaseId: Number(this.data.id)
    });
    console.log('lease id', this.data.id);
    console.log('add addeddum form', this.addAddendumForm.value);
    this.store.dispatch(addAddendum({ payload: this.addAddendumForm.value }));
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }


}

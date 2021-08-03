import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-strata-dialog',
  templateUrl: './add-strata-dialog.component.html',
  styleUrls: ['./add-strata-dialog.component.scss']
})
export class AddStrataDialogComponent implements OnInit {

  addStrataForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addStrataForm = this.formBuilder.group({
      councilName: [''],
      description: ['']
    });

  }

}

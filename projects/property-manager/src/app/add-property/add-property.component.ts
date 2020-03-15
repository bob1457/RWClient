import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  addForm: FormGroup;

  types: any[] = [
    {value: '1', viewValue: 'New'},
    {value: '2', viewValue: 'Renewal'}
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      propertyName: ['', Validators.required],
      startDate: ['', Validators.required],
      type: ['New']
    });
  }

}

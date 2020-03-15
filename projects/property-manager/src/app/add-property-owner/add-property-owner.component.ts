import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-property-owner',
  templateUrl: './add-property-owner.component.html',
  styleUrls: ['./add-property-owner.component.scss']
})
export class AddPropertyOwnerComponent implements OnInit {

  @Input() addForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

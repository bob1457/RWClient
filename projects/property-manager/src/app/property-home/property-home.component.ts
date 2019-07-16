import { Subscription } from 'rxjs';
import { PropertyService, Property } from '@lib/app-core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-home',
  templateUrl: './property-home.component.html',
  styleUrls: ['./property-home.component.scss']
})
export class PropertyHomeComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  list: Property[];

  ngOnInit() {
  }

  getPropertyList() {
    return this.propertyService.getPropertyList().subscribe(pList => this.list = pList);
  }

}

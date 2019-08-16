import { PropertyService, PropertyOwner } from '@lib/app-core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  list: PropertyOwner[];

  ngOnInit() {

  }

  getOwnerList() {
    debugger;
    return this.propertyService.getPropertyOwnerList().subscribe((oList: PropertyOwner[]) => {this.list = oList; console.log(this.list); });
  }

}

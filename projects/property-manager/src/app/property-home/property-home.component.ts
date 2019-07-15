import { PropertyService } from './../../../../app-core/src/lib/property/services/property.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-home',
  templateUrl: './property-home.component.html',
  styleUrls: ['./property-home.component.scss']
})
export class PropertyHomeComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }



}

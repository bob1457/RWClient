import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent implements OnInit {

  id: number;

  constructor(private actRoute: ActivatedRoute) { 
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
  }

}

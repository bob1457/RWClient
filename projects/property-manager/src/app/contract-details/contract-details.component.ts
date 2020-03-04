import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.scss']
})
export class ContractDetailsComponent implements OnInit {

  id: number;

  constructor(private actRoute: ActivatedRoute) {
    this.id = this.actRoute.snapshot.params.id;
    console.log(this.id);
   }

  ngOnInit() {
  }

}

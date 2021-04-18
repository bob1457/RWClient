import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  tabs = [
    {tab: 'System Info'},
    {tab: 'Support Info'},
    {tab: 'EULA'}
  ];
  constructor() { }

  ngOnInit() {
  }

  goBack() {

  }

}

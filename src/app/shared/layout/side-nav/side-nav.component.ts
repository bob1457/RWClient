import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  mode: string = 'side';
  opened: boolean = true;

  ToggleButtonDisplay: string = 'none';
  OpenButtonDisplay: string = 'none';
  visible: boolean = false;
  sidenavWidth = 17.5; // side nav width when started (default: full-width side nav)


  constructor() { }

  ngOnInit() {
  }

  showSearch() {
    this.visible = !this.visible;
    // this.searcheElement.nativeElement.focus();
    // this.inputEl.nativeElement.focus();
  }

  onBlurMethod() {
    this.visible = false;
  }

  changeSideNav() {

    if (this.sidenavWidth === 17.5) {
      this.sidenavWidth = 4; // mini side nav
      // this.ToggleButtonDisplay = '';
    } else {
      this.sidenavWidth = 17.5; // full width side nav
      // this.ToggleButtonDisplay = 'none';
    }
    console.log('side nav width changed to ' + this.sidenavWidth);
  }


}

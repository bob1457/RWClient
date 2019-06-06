import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  mode: string = 'side';
  opened: boolean = true;

  media$: Observable<MediaChange>;

  watcher: Subscription;
  activeMediaQuery = '';

  ToggleButtonDisplay: string = 'none';
  OpenButtonDisplay: string = 'none';
  visible: boolean = false;
  sidenavWidth = 17.5; // side nav width when started (default: full-width side nav)


  constructor(public mediaObserver: MediaObserver, private router: Router) {
    this.watcher = mediaObserver.media$.subscribe((mediaChange: MediaChange) => {
      this.mode = this.getMode(mediaChange);
      this.opened = this.getOpened(mediaChange);
      this.OpenButtonDisplay = this.showHideOpenButton(mediaChange,);
    });
   }

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

  increase() {
    this.sidenavWidth = 17.5;
    console.log('increase sidenav width');
  }
  decrease(){
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
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

  private getMode(mediaChange: MediaChange): string {
    // set mode based on a breakpoint
    if (this.mediaObserver.isActive('gt-sm')) {
      return 'side';
    } else {
      return 'over';
    }
  }

  private showHideOpenButton(mediaChange: MediaChange): string {
    if (this.mediaObserver.isActive('gt-sm')) {
      return 'none'; // hidden
    } else {
      return ''; // show
    }
  }

  private getOpened(mediaChange: MediaChange): any {
    if (this.mediaObserver.isActive('gt-sm')) {
      return 'true';
    } else {
      // this.show_logo = true;
      return 'false';
    }
  }

}

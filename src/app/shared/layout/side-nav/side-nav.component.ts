import * as fromAuth from '@lib/auth';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable, Subscription, from } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { getUserInfo, User } from '@lib/auth';
// import {  } from '@lib/auth';

import * as sparkmd5 from 'spark-md5';

import { PropertyList, ContractList, TenantList, RentalList, OwnerList, MarketingList, RentalAppList, OpenHouseList } from '@lib/dashboard';
// import { StateService } from '@lib/auth';
import { StateService } from 'projects/auth/src/public-api';
import { VendorList, WorkOrderList, ServiceRequestList, CouncilList } from 'projects/dashboard/src/projects';
import { contractList, ownerList, propertyList, councilList } from 'projects/property-manager/src/app/store/reducers';
import { leaseList, serviceRequestList, tenantList, vendorList, workOrderList } from 'projects/lease-manager/src/app/store/reducers';
import { openHouses, propertyApplications, propertyListing } from 'projects/marketing-manager/src/app/store/reducers';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('changeSideBarSize', [
      state(
        'decrease',
        style({
          width: '64px',
          transform: 'translateX(-80%)'
        })
      ),
      state(
        'increase',
        style({
          width: '280px',
          transform: 'translateX(0%)'
        })
      ),
      transition('decrease => increase', animate('2000ms')),
      transition('increase => decrease', animate('2000ms'))
    ])
  ]
})
export class SideNavComponent implements OnInit {
  serverUrl = 'http://localhost:58088/';

  loadingIndicator = false;

  currentState = 'increase';

  isAdmin = true;
  n = 13;

  link = '';

  property: any[] = [];
  owners: any[] = [];
  contracts: any[] = [];
  councils: any[];

  tenant: any[] = [];
  applicatons: any[] = [];
  propertyLisitng: any[] = [];
  rentalList: any[] = [];
  openHouses: any[] = [];
  vendors: any[] = [];
  workorders: any[] = [];
  servicerequests: any[] = [];

  mode = 'side';
  opened = true;

  media$: Observable<MediaChange>;

  watcher: Subscription;
  activeMediaQuery = '';

  ToggleButtonDisplay = 'none';
  SideToggleButtonDisplay = '';

  OpenButtonDisplay = 'none';
  visible = false;
  sidenavWidth = 17.5; // side nav width when started (default: full-width side nav)

  // user: Observable<string>; // this must be a local variable, NOT an Observable
  user: User;
  avatar = '';
  avatar$: Observable<string>;

  hash:any = null;
  gravatar = '';
  imgUrl:any = null;
  gAvatar = true;
  smLogo = false;

  // theme$ = 'dark-theme'; // this is default -- selecting theme can be implemented using observable from rxjs... later.
  theme$ = 'light-theme';
  // theme$ = 'dark-theme';

  role = '';

  constructor(
    public mediaObserver: MediaObserver,
    private router: Router,
    private stateService: StateService,
    private store: Store<fromAuth.AuthState>
  ) {
    this.watcher = mediaObserver.media$.subscribe(
      (mediaChange: MediaChange) => {
        this.mode = this.getMode(mediaChange);
        this.opened = this.getOpened(mediaChange);
        this.OpenButtonDisplay = this.showHideOpenButton(mediaChange);
        this.router.events.subscribe((routerEvent: Event) => {
          if (routerEvent instanceof NavigationStart) {
            this.loadingIndicator = true;
          }

          if (routerEvent instanceof NavigationEnd ){
            this.loadingIndicator = false;
          }

        });
      }
    );
  }

  newUrl$ = this.stateService.currentUrl$
      .subscribe(data => {
        this.gAvatar = false;
        this.imgUrl = data;
        this.imgUrl = localStorage.getItem('newAvatarUrl');
        console.log(this.imgUrl);
  });

  ngOnInit() {
    debugger;
    this.store.pipe(select(getUserInfo)).subscribe(userData => { // this.user = userData;
      // this.user = JSON.parse(localStorage.getItem('auth'));
      // localStorage.setItem('auth', JSON.stringify(userData));



      console.log(userData);
      if (userData == null) {
        this.user = JSON.parse(localStorage.getItem('auth'));
        this.role = this.user.role;
        console.log(this.user);
      } else {
        this.user = userData;
        localStorage.setItem('auth', JSON.stringify(userData));
        this.role = userData.role;
      }

    });

    this.store.pipe(select(propertyList)).subscribe(data => {
      if (data && data.length > 1 ) {
        this.property = data;
        } else {
          this.store.select(PropertyList).subscribe(plist => {
            this.property = plist;
          });
        }

      });

    this.store.pipe(select(ownerList)).subscribe(data => {
      if (data && data.length > 1) {
        this.owners = data;
        } else {
          this.store.select(OwnerList).subscribe(olist => {
            this.owners = olist;
          });
        }
      });

    this.store.pipe(select(contractList)).subscribe(data => {
      if (data && data.length > 1) {
        this.contracts = data;
        } else {
          this.store.select(ContractList).subscribe(clist => {
            this.contracts = clist;
          });
        }

      });

    this.store.select(councilList).subscribe(data => {
      if (data && data.length > 1) {
        this.councils = data;
        } else {
          // this.councils = JSON.parse(localStorage.getItem('councils'));
          this.store.select(CouncilList).subscribe(clist => {
            this.councils = clist;
          });
        }
    });


    this.store.select(tenantList).subscribe(data => {
      if ( data && data.length > 0) {
        this.tenant = data;
        } else {
          this.store.pipe(select(TenantList)).subscribe(tlist => {
          this.tenant = tlist;
        });
      }
    });

    this.store.pipe(select(leaseList)).subscribe(data => {
      if (data && data.length > 1) {
        this.rentalList = data;
        } else {
          this.store.pipe(select(RentalList)).subscribe(rlist => {
          this.rentalList = rlist;
        });
      }
    });

    this.store.select(propertyListing).subscribe(data => {
      if(data && data.length > 1) {
        this.propertyLisitng = data;
        } else {
          this.store.pipe(select(MarketingList)).subscribe(mlist => {
          this.propertyLisitng = mlist;
        });
      }
    });


    this.store.select(propertyApplications).subscribe(data => {
      if( data && data.length > 1 ){
        this.applicatons = data;
      }else {
        this.store.pipe(select(RentalAppList)).subscribe(alist => {
        this.applicatons = alist;
      });
      }
    });


    this.store.select(openHouses).subscribe(data => {
      if ( data && data.length > 1 ) {
        this.openHouses = data;
      } else {
        this.store.select(OpenHouseList).subscribe(olist => {
          this.openHouses = olist;
        });
      }
    });


    this.store.select(vendorList).subscribe(data => {
      if(data && data.length > 1) {
        this.vendors = data;
      } else {
        this.store.select(VendorList).subscribe(vlist => {
          this.vendors = vlist;
        });
      }
    });

    this.store.select(workOrderList).subscribe(data => {
      if(data && data.length > 1) {
        this.workorders = data;
       }else {
        this.store.select(WorkOrderList).subscribe(wlist => {
          this.workorders = wlist;
        });
      }
    });

    this.store.select(serviceRequestList).subscribe(data => {
      if (data && data.length > 1){
        this.servicerequests = data;
        } else {
          this.store.select(ServiceRequestList).subscribe(slist => {
        this.servicerequests = slist;
        });
      }
    });



    // select single state then use async pipe in template for sub/unsub using *ngIf which returns a boolean value // console.log(userData);
    // this.avatar$ = this.store.select(ustate => ustate.user.avatarUrl);
    this.avatar = JSON.parse(localStorage.getItem('avatar'));

    this.hash = sparkmd5.hash(this.user.email);
    this.gravatar = this.createIdenticon(this.hash);

    // Update avatar when upload new custom image
    // this.stateService.currentUrl$
    //   .subscribe(data => {
    //     this.gAvatar = false;
    //     console.log(this.gAvatar);
    //     this.imgUrl = data;
    //     this.imgUrl = localStorage.getItem('newAvatarUrl');
    //     console.log(this.imgUrl);
    // });


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
    this.SideToggleButtonDisplay = '';
    // console.log('increase sidenav width');
    this.smLogo = false;
  }
  decrease() {
    this.sidenavWidth = 4;
    // console.log('decrease sidenav width');
    this.smLogo = true;
  }

  changeSideNav() {
    if (this.sidenavWidth === 17.5) {
      this.sidenavWidth = 4; // mini side nav
      this.ToggleButtonDisplay = 'none';
      this.SideToggleButtonDisplay = 'none';
      this.smLogo = true;
    } else {
      this.sidenavWidth = 17.5; // full width side nav
      this.ToggleButtonDisplay = 'none';
      this.SideToggleButtonDisplay = '';
      // this.smLogo = false;
    }
    // console.log('side nav width changed to ' + this.sidenavWidth);
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

  changeDark() {
    this.theme$ = 'dark-theme';
  }

  changeLight() {
    this.theme$ = 'light-theme';
  }

  logout(): void {
    // localStorage.clear();

    this.store.dispatch(new fromAuth.LogOut());

    // localStorage.removeItem('currentUser');
    // this.router.navigate(['/']);
    // console.log('logged out!');
  }

  showInfo(link: any) {}

  GetList(){
    this.router.navigateByUrl('/Manage/property/propertylist');
    console.log('going to load list...');
  }

  GetPropertyListing() {
    this.router.navigateByUrl('/Manage/marketing/propertylist');
  }

  GetAllLeases() {
    this.router.navigateByUrl('/Manage/lease/leases');
  }

  MainHome() {
    this.router.navigateByUrl('/Manage/main/main');
  }

  createIdenticon(emailHash: any): string {
    return 'https://www.gravatar.com/avatar/' + emailHash + '?d=identicon';
  }
}

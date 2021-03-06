import { ProfileService } from './../services/profile.service';
import { Component, OnInit, Input } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AuthState } from '../store/auth.state';

import { User } from '../models';
import { getUserInfo } from '../store/auth.reducers';
import { FormGroup, NgForm } from '@angular/forms';
import { subscribeOn } from 'rxjs/operators';
import { UpdateProfile } from '../store/auth.actions';



@Component({
  selector: 'lib-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // user: User;
  @Input() user: User;

  selected = 'CA';
  loading = false;
  showMsg = false;
  // uesr: User;

  constructor(private store: Store<AuthState>,
              private profileService: ProfileService) { }

  ngOnInit() {
    debugger;
    // this.store.pipe(select(getUserInfo)).subscribe(userProfile => { this.user = userProfile; console.log(this.user); });
    console.log('user in profile: ' + this.user);
  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  onSubmit(form: NgForm) {
    debugger;
    this.loading = true;
    console.log(form.value);
    // this.store.dispatch(new UpdateProfile({payload: form.value}));
    this.profileService.updateProfile(form.value).
    subscribe((res) => { // res
      // this.user = res;
      this.showMsg = true;
      this.loading = false;

      console.log(this.showMsg);
      console.log(this.user);
      console.log(this.loading);

      setTimeout(() => {
        this.showMsg = false;
        // this.disabled = null;
        form.form.markAsPristine();
        this._markFormPristine(form);
        console.log(this.showMsg);
      }, 2000);

      console.log('profile updated....');
    });

  }

  private _markFormPristine(form: FormGroup | NgForm): void {
    Object.keys(form.controls).forEach(control => {
        form.controls[control].markAsPristine();
    });
  }

}

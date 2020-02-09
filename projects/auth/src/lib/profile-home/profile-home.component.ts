import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Location } from '@angular/common';
import { User } from '../models';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../store/auth.state';
import { getUserInfo } from '../store/auth.reducers';

@Component({
  selector: 'lib-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  serverUrl = 'http://localhost:58088/';
  url = 'https://localhost:44336/api/Profile/avatar/update';

  user: User;

  rolename = '';
  loading = false;
  uploadMsg = '';
  shiowMsg = false;

  public progress: number;
  public message: string;
  @Output() public uploadFinished = new EventEmitter();

  constructor(private location: Location,
              private store: Store<fromAuth.AuthState>,
              private httpClient: HttpClient) { }





  ngOnInit() {
    debugger;
    this.store.pipe(select(getUserInfo)).subscribe(userData => {
      if (userData == null) {
        this.user = JSON.parse(localStorage.getItem('auth'));
      } else {
         this.user = userData;
         console.log('user from profile homne: ' + userData);
      }

      switch (this.user.role) {
        case 'pm':
            this.rolename = 'Property Manager';
            break;
        case 'tenant':
            this.rolename = 'Tenant';
            break;
        default:
        break;
      }
    });
  }



  goBack() {
    this.location.back();
  }

  openInput() {
    document.getElementById('fileInput').click();
  }

  // onChange(event) {
  //   console.log('file uploaded...' + event);
  // }

  public onChange = (files) => {
    debugger;
    this.loading = true;

    if (files.length === 0) {
      return;
    }

    // const fileToUpload = files[0] as File;
    let fileToUpload = <File> files[0];

    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('UserName', this.user.username);

    this.httpClient.post(this.url, formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = 'Update success.';
        this.uploadFinished.emit(event.body);
      }
      this.loading = false;
      this.uploadMsg = 'Done';
      this.shiowMsg = true;
    });



  }

}

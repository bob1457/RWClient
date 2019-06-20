import { AuthService } from './../auth.service';
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: "lib-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  checked = false;
  loading = false;
  errMsg = '';
  email = '';


  constructor(private authService: AuthService,
              private router: Router,
              private store: Store<AppState>) {}

  ngOnInit() {}



  onSubmit(form: NgForm) {
    // debugger;
    console.log(form.value);
    this.loading = true;

    this.authService.logIn(form.value)
    .subscribe(
      res => {
        console.log(res);
        if(!res) {
          this.errMsg = 'Authentication Failed!'
        }
        else {
          this.router.navigate(['/Manage']);
        }
        // this.loading = false;
      },
      err => {
        console.log(err);
        this.errMsg = 'Authentication Failed, please try again!';
        this.loading = false;
      }
    )

  }

  openDialog() {}
}

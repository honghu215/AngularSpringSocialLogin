import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthLoginInfo } from './login-info';
import { TokenStorageService } from './../token-storage.service';
import { AuthService } from './../auth.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  errorMessage = '';
  @Input() notify = new EventEmitter();
  private loginForm: FormGroup;
  errorSubscription: Subscription;

  constructor(private auth: AuthService,
              private tokenStorage: TokenStorageService,
              private userService: UserService,
              private router: Router,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
    this.errorSubscription = this.auth.authError.subscribe( error => {
      console.log(error);
      if (error !== '') {
        this.errorMessage = error;
        this.snackBar.open(this.errorMessage, '', {
          duration: 3000,
        });
      }
    });

  }

  openSnackBar(action: string) {
    this.snackBar.open(this.errorMessage, action, {
      duration: 3000,
    });
  }


  onSubmit() {
    console.log(this.loginForm);

    this.auth.attempAuth({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.auth.authChange.next(true);
        this.userService.saveUserProfile();
        this.router.navigate(['/welcome']);
      },
      error => {
        console.log(error);
        this.isLoggedIn = false;
        this.errorMessage = error.error.message;
      }
    );
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }
}

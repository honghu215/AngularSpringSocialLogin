import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.signUp({
      name: form.value.name,
      email: form.value.email,
      password: form.value.password
    }).subscribe(
      data => {
        console.log('Register result: ', data);
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      }
    );
  }
}

import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      // Validators.pattern(/^[a-z][0-9]{3}$/),
    ]),
  });
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  submitForm() {
    // alert("rabbabbbbb")
    if (this.loginForm.invalid) {
      return;
    }
    this._AuthService.login(this.loginForm.value).subscribe((data) => {
      console.log(data);
      if (data.message == 'success') {
        localStorage.setItem('userToken', data.token);
        this._Router.navigateByUrl('./login');
      } else {
        alert(data.message);
      }
    });
    console.log(this.loginForm.value);
  }
}

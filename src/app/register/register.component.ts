import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  //template-driven forms,reactive forms
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    age: new FormControl(null, [
      Validators.required,
      Validators.min(10),
      Validators.max(60),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      // Validators.pattern(/^[a-z][0-9]{3}$/),
    ]),
  });
  submitForm() {
    // alert("rabbabbbbb")
    if(this.registerForm.invalid){
      return;
    }
    this._AuthService.register(this.registerForm.value).subscribe((data)=>{
     if(data.message=='success'){
this._Router.navigateByUrl('./login')
     }else{
      alert(data.message)
     }
    })
    console.log(this.registerForm)
  }
  constructor(private _AuthService:AuthService,private _Router:Router){}
}

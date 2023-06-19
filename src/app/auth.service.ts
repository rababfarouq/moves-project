import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http:HttpClient,private _Router:Router){
    if(localStorage.getItem('userToken')){
      this.saveUserData();
    }
  }
  userData=new BehaviorSubject(null);
  saveUserData(){
   let encodedToken= JSON.stringify(localStorage.getItem('userToken'));
   let decodedToken:any=jwtDecode(encodedToken)
   this.userData.next(decodedToken);
   console.log(this.userData)
  }

  register(registerData: any):Observable<any> {
  return  this.http.post(
      'https://route-egypt-api.herokuapp.com/signup',
      registerData
    );
  }
  login(loginData: any):Observable<any> {
    return  this.http.post(
        'https://route-egypt-api.herokuapp.com/signin',
        loginData
      );
    }
    logout(){
      localStorage.removeItem('userToken')
      this.userData.next(null);
      this._Router.navigateByUrl('/login')
    }
}

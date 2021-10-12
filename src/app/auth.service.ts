import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(){
    //now check token is set or not
    return !!localStorage.getItem('token'); 
  }

  getTokenAdmin(){
    //now check token is set or not
      var res1=!!localStorage.getItem('token');
      var res2=localStorage.getItem('role')=="admin";
      return res1 && res2;
  }

  getTokenUser(){
    //now check token is set or not
      var res1=!!localStorage.getItem('token');
      var res2=localStorage.getItem('role')=="user";
      return res1 && res2;
    }
}

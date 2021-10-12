import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DCX-Tech-Store';
  name:any

  constructor(private _authService:AuthService,private _route:Router){ }

  checkToken(){
		return this._authService.getToken()
	}

  checkTokenadmin(){
    var res = this._authService.getTokenAdmin()
    if(res)
      this.name = localStorage.getItem('name')
    return res
	}

  checkTokenUser(){
    var res = this._authService.getTokenUser()
    if(res)
      this.name = localStorage.getItem('name')
    return res
	}

  logout()
  {
		localStorage.removeItem('token')
    localStorage.removeItem('_id')
    localStorage.removeItem('name')
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('address')
    localStorage.removeItem('city')
    localStorage.removeItem('gender')
    localStorage.removeItem('role')
    localStorage.removeItem('info')
    localStorage.removeItem('ProductTitle')
    localStorage.removeItem('ProductPrice')
    this._route.navigate(['/login'])
  }

}

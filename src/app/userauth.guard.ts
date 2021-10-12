import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivate {

  constructor(private _authService:AuthService,private _router:Router){}
  canActivate(){
    var res1=!!this._authService.getToken()
	  var res2=localStorage.getItem('role')=='user'
	  if(res1 && res2)
	  {
		  return true;
	  }	
	  else{
		  localStorage.removeItem('token')
		  this._router.navigate(['/login'])
		  return false
	  }
  }
  
}

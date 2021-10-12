import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RequesturlsService } from '../requesturls.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  requestURL:string=this._requestURL.requestURL_main+"userlogin"
  msg:any
  
  constructor(private _http:HttpClient,private _route:Router,private _requestURL:RequesturlsService) { }

  ngOnInit(): void {
  }

  onClickSubmit(userDetails:any){
    //console.log(userDetails)
    this._http.post(this.requestURL,userDetails).subscribe((data:any)=>{
      //console.log(data.user)
      if(data.response){
        this.msg='login success'
        localStorage.setItem('token',data.token)
		  	localStorage.setItem('_id',data.user._id)
		  	localStorage.setItem('name',data.user.name)
		  	localStorage.setItem('username',data.user.username)
        localStorage.setItem('email',data.user.email)
		  	localStorage.setItem('address',data.user.address)
		  	localStorage.setItem('city',data.user.city)
		  	localStorage.setItem('gender',data.user.gender)
		  	localStorage.setItem('role',data.user.role)
		  	localStorage.setItem('info',data.user.info)
        
        
        if(data.user.role=='user')
          this._route.navigate(['/userhome'])
        else
          this._route.navigate(['/adminhome'])
      }else{
        this.msg='Invalide User or Please verify your account'
      }
    })
  }

}

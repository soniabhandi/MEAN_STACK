import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epuser',
  templateUrl: './epuser.component.html',
  styleUrls: ['./epuser.component.css']
})
export class EpuserComponent implements OnInit {
  userDetails:any
  name:any
  username:any
  email:any
  number:any
  address:any
  city:any
  gender:any
  constructor(private _route:Router,private _http:HttpClient,private _requestURL:RequesturlsService) { }

  ngOnInit(): void {
    var requestURL=this._requestURL.requestURL_user+'epfetch'
	  this._http.post(requestURL,{'email':localStorage.getItem('email')}).subscribe((data:any)=>{
		  //console.log(data)
      
     
      this.name=data.name
      this.username=data.username
      this.email=data.email
      this.number=data.number
      this.address=data.address
      this.city=data.city
      if(data.gender=="male")
				this.gender="male"
			else
				this.gender="female"
      
	  })
  }
  onClickSubmit(userDetails:any){
    var requestURL=this._requestURL.requestURL_user+'upuser'      
    this._http.post(requestURL,userDetails).subscribe((data)=>{
      console.log(data)
      alert("User profile updated successfully.....")
      //this._router.navigate([''])  
      this.ngOnInit() //to refresh
    })
  }
}

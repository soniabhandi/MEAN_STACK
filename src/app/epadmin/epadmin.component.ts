import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epadmin',
  templateUrl: './epadmin.component.html',
  styleUrls: ['./epadmin.component.css']
})
export class EpadminComponent implements OnInit {
  userDetails:any
  name:any
  username:any
  email:any
  address:any
  city:any
  gender:any
  number:any

  constructor(private _route:Router,private _http:HttpClient,private _requestURL:RequesturlsService) { }

  ngOnInit(): void {
    var requestURL=this._requestURL.requestURL_admin+'epfetch'
	  this._http.post(requestURL,{'email':localStorage.getItem('email')}).subscribe((data:any)=>{
		  
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
    var requestURL=this._requestURL.requestURL_admin+'upadmin'      
    this._http.post(requestURL,userDetails).subscribe((data)=>{
      console.log(data)
      alert("Admin profile updated successfully.....")
      //this._router.navigate([''])  
      this.ngOnInit() //to refresh
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {
  
  constructor(private _http:HttpClient,private _requestURL:RequesturlsService) { }

  requestURL:string=this._requestURL.requestURL_admin+"fetchusers"
  requestURL_manageuserstatus:string=this._requestURL.requestURL_admin+"manageuserstatus"
  userDetails:any

  ngOnInit(): void {
    this._http.get(this.requestURL).subscribe((data:any)=>{
      //console.log(data)
      this.userDetails=data    
    })
  }

  manageuserstatus(regid:number,status:string)
  { 
    //console.log('RegID : '+rigid)
		//console.log('status : '+status)
    this._http.post(this.requestURL_manageuserstatus,{'_id':regid,'status':status}).subscribe((data:any)=>{
      alert("User "+status+" successfully....")      
      this.ngOnInit()    
    })
  }

}

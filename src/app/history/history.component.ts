import { Component, OnInit } from '@angular/core';
import { AnyArray } from 'mongoose';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';
import { Console } from 'console';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  userId:any
  historylist:any
  userhistorylist:any
  name:any
  email:any
  address:any
  city:any
  details:any
  pDetails:any
  constructor(private _http:HttpClient,private _requestURL:RequesturlsService) { }

  ngOnInit(): void {
    this.historylist=[]
    this.userhistorylist=[]
    this.userId=localStorage.getItem('_id')
    this.email=localStorage.getItem('email')

    /*var requestURL=this._requestURL.requestURL_user+"fetchDetails"
	  this._http.get(requestURL).subscribe((data:any)=>{
		  console.log(data.prodDetails)
      this.details=data
      console.log(this)
      
	  })*/

    if(!!localStorage.getItem('history'))
    { 
      this.historylist=JSON.parse(localStorage.getItem('history')!)
      this.historylist.forEach((item:any,index:any)=>{ 
        if(item._id===this.userId){   //to match _id with user_id 
          this.userhistorylist.push(item)
        }
      });
      
    }

    

  }

}

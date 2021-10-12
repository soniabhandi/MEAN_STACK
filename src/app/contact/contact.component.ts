import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  msg:any
  yourname:any
  phone:any
  email:any
  message:any
  constructor(private _http:HttpClient, private _requestURL:RequesturlsService) { }

  ngOnInit(): void {
    this.yourname=""
    this.email=""
    this.phone=""
    this.message=""
  }
  onClickSubmit(contactusDetails:any){
    console.log(contactusDetails)
    var requestURL = this._requestURL.requestURL_main + "contactus"
    this._http.post(requestURL, contactusDetails).subscribe((data: any) => {
      console.log(data)
      this.msg=data.response
      this.ngOnInit()
    })
  }
}

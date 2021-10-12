import { Component, OnInit } from '@angular/core';
import { RequesturlsService } from '../requesturls.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpadmin',
  templateUrl: './cpadmin.component.html',
  styleUrls: ['./cpadmin.component.css']
})
export class CpadminComponent implements OnInit {
  msg: any
  constructor(private _http: HttpClient, private _requestURL: RequesturlsService, private _route: Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(cpdata: any) {
    debugger
    var requestURL: string = this._requestURL.requestURL_admin + 'cpadmin';
    cpdata.username = localStorage.getItem('username')

    this._http.post(requestURL, cpdata).subscribe((data: any) => {
      
      if (data.response == 0)
        this.msg = 'Invalid Old Password'
      else if (data.response == 1)
        this.msg = 'New & confirm new pass does not match'
      else {
        alert('password changed succussfully, Please login again')
        localStorage.removeItem('token')
        this._route.navigate(['/login'])
      }
    })

  }
}

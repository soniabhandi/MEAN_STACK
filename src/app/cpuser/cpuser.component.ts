import { Component, OnInit } from '@angular/core';
import { RequesturlsService } from '../requesturls.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cpuser',
  templateUrl: './cpuser.component.html',
  styleUrls: ['./cpuser.component.css']
})
export class CpuserComponent implements OnInit {
  msg: any
  constructor(private _http: HttpClient, private _requestURL: RequesturlsService, private _route: Router) { }

  ngOnInit(): void {
  }
  onClickSubmit(cpdata: any) {
    var requestURL: string = this._requestURL.requestURL_user + 'cpuser';
    cpdata.username = localStorage.getItem('username')

    this._http.post(requestURL, cpdata).subscribe((data: any) => {
      console.log(data)
      //this.msg = data.response
      //console.log(this.msg)
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

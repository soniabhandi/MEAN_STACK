import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequesturlsService {
  requestURL_main:string="http://localhost:3000/webapi/"

  requestURL_admin:string="http://localhost:3000/webapiadmin/"

  requestURL_user:string="http://localhost:3000/webapiuser/"

  constructor() { }

  
}

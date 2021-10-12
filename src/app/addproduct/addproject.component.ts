import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  msg:any
  ptitle:any
  pdescription:any
  fileToUpload:any
  plist:any

  constructor(private _http: HttpClient, private _requestURL: RequesturlsService) { }

  requestURL1 = this._requestURL.requestURL_admin + "fectprod"
  ngOnInit(): void {
    this.ptitle=""
    this.pdescription=""
    this._http.get(this.requestURL1).subscribe((data)=>{
      this.plist=data;
    })
  }
  onClickSubmit(pDetails: any) {
    //console.log(pDetails)
    var requestURL = this._requestURL.requestURL_admin + "addproduct"
    this._http.post(requestURL, pDetails).subscribe((data: any) => {
      //console.log(data)
      this.msg=data.response
      this.ngOnInit()
    })
  }
  handleChangePic(evt:Event) 
  {
    var files:any = (<HTMLInputElement>evt.target).files;
    //files: FileList
    this.fileToUpload = files.item(0);
  }
  
  upload(pid:string)
  {   
    var requestURL2 = this._requestURL.requestURL_admin + "uploadpic"
    //alert(pid)
    if(this.fileToUpload==null)
      alert('Please Select Image First !');
    else 
    {  
      const formData: FormData = new FormData();
      formData.append('product_image', this.fileToUpload, this.fileToUpload.name);
      //formData to create key-value pair
      //formData.append (key,value,filename)
      formData.append('pid',pid);    

      this._http.post(requestURL2, formData).subscribe((response:any)=>
      {
          if(response.status)
          {
            console.log("IT is working")
            this.ngOnInit()
          }
      });
      this.fileToUpload = null;
    }
  }
}

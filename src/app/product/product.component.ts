import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _http:HttpClient,private _requestURL:RequesturlsService,private _authService:AuthService) { }
  prodDetails:any
  name:any
  pDetails:any
  _id:any
  public cart:any=[]
  ngOnInit(): void {
    var requestURL=this._requestURL.requestURL_user+"fetchProdDetails"
	  this._http.get(requestURL).subscribe((data:any)=>{
		  //console.log(data)
      this.prodDetails=data
	  })
  }
  //To show Add to cart button only on user panel after login
  checkTokenUser(){
    var res = this._authService.getTokenUser()
    if(res)
      this.name = localStorage.getItem('name')
    return res
	}
  addtocart(prodtitle:any,prodprice:any){
    this._id=localStorage.getItem('_id')
    if(!!localStorage.getItem('cart'))
    {
      var data=JSON.parse(localStorage.getItem('cart')!)
      this.cart=data
      this.cart.push({'ProductTitle':prodtitle,'ProductPrice':prodprice,'_id':this._id})
      localStorage.setItem('cart',JSON.stringify(this.cart))
    }else{
      this.cart.push({'ProductTitle':prodtitle,'ProductPrice':prodprice,'_id':this._id})
      localStorage.setItem('cart',JSON.stringify(this.cart))

    }


    /*my previous code
    //this.pDetails=prodtitle+prodprice
    //console.log(this.pDetails)
    this._id=localStorage.getItem('_id')
    localStorage.setItem('ProductTitle',prodtitle)
    localStorage.setItem('ProductPrice',prodprice)
    //console.log(prodtitle,prodprice,this._id)

    var requestURL=this._requestURL.requestURL_user+"addtocart"
    this._http.post(requestURL,{'_id':this._id,'ProductTitle':prodtitle,'ProductPrice':prodprice}).subscribe((data:any)=>{
      //console.log(data)
      console.log(data.response)
    })
    */
  }

}

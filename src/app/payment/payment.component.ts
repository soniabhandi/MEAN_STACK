import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RequesturlsService } from '../requesturls.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userId: any
  buyall: any
  userhistorylist: any
  history:any
  totalamount:number=0
  price:any
  paymentHandler:any = null;
  pDetails:any

  constructor(private route:Router, private _requestURL:RequesturlsService, private _http:HttpClient) { }

  requestURL:string=this._requestURL.requestURL_user+'payment'

  ngOnInit(): void {
    this.buyall = []
    this.history=[]
    this.invokeStripe();

    //to show products on payment page from localstorage (buyall)
    if (!!localStorage.getItem('buyall')) {
      var data = JSON.parse(localStorage.getItem('buyall')!)
      this.buyall = data
      this.buyall.forEach((item: any, index: any) => { //to match _id with user_id and show products for that user only
        //this.buyall.push(item)
        this.price=parseInt(item.ProductPrice)
        this.totalamount = this.totalamount + this.price
      })
      localStorage.setItem('totalamount',this.totalamount.toString())
    }
  }

  makePaymentTest(amount:any){

    //add to history in localstorage
    if(!!localStorage.getItem('history'))
    {
        var data=JSON.parse(localStorage.getItem('history')!)
        this.history=data
        for(let i of this.buyall){
            this.history.push(i)
        }
        localStorage.setItem('history',JSON.stringify(this.history))
        
    }else{
        for(let i of this.buyall){
          this.history.push(i)
        }
        localStorage.setItem('history',JSON.stringify(this.history))
        
    }
    //end add to history in localstorage

    //make payment
    this.makePayment(amount,(txnid:any)=>{

      var pDetails = {'email':localStorage.getItem('email'),'txnid':txnid,'amount':amount,'prodDetails':this.buyall,'info':new Date()}
    	this._http.post(this.requestURL,pDetails).subscribe((data:any)=>{
        console.log(data)
        alert('payment successful...')
        this.route.navigate(['/buyproduct/invoice'])
      })
    })
  }

  makePayment(amount:any,cb:any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Jc2tTSGeXHJcOnL8e5uoDPjqT4dmxIu2fZZLX3e3D3GByRN13G7fjPMd3kUOIZ4E1YYHrcT3j9sgD6C86hKFNE300fB6Qz68a',
      locale: 'auto',
      token: function (stripeToken: any) {
        cb(stripeToken.id)
      }
    });
  
    paymentHandler.open({
      name: 'DCX-Tech-Store',
      description: 'Payment',
      amount: amount * 100
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
           
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }
}

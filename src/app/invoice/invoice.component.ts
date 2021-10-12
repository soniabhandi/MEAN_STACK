import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  userId:any
  buyall:any
  userbuylist:any
  name:any
  email:any
  address:any
  city:any
  totalamount:any
  price:any


  constructor() { }

  ngOnInit(): void {
    this.buyall=[]
    this.userbuylist=[]
    this.userId=localStorage.getItem('_id')
    
    this.name = localStorage.getItem('name')
    this.address = localStorage.getItem('address')
    this.city = localStorage.getItem('city')
    this.email = localStorage.getItem('email')

    if (!!localStorage.getItem('buyall')) {
      var data = JSON.parse(localStorage.getItem('buyall')!)
      this.buyall=data  
      this.totalamount = localStorage.getItem('totalamount')
    }
    this.endFunction()
  }
  endFunction(){
    localStorage.removeItem('buyall')
    localStorage.removeItem('totalamount')
  }
}

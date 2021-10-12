import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  userId:any
  amount:any
  public wallet:any=[]
  public userwallet:any=[]
  tamount:any
  x:any=0
  y:any
  constructor() { }

  ngOnInit(): void {
    this.amount=""
    
    
    this.wallet.forEach((item:any,index:any)=>{
      if(item._id===this.userId){
        this.y = parseInt(item.Amount)
        this.x=this.x +this.y 
        
      }
    })
    
  }
  onClickSubmit(){
    this.userId=localStorage.getItem('_id')
    //console.log(this.amount)
    if(!!localStorage.getItem('wallet'))
    {
      var data=JSON.parse(localStorage.getItem('wallet')!)
      this.wallet=data
      this.wallet.forEach((item:any,index:any)=>{
        if(item._id===this.userId){
          
          this.x=parseInt(item.Amount)
          this.y=parseInt(this.amount)
          this.tamount=this.x+this.y
          this.wallet.splice(index,1)
          this.wallet.push({'Amount':this.tamount,'_id':this.userId})
          this.wallet = JSON.stringify(this.wallet)
          localStorage.removeItem('wallet')
          localStorage.setItem("wallet", this.wallet);
          this.ngOnInit()
          //localStorage.setItem('wallet',JSON.stringify(this.wallet))
        }
        else{
          this.wallet.push({'Amount':this.amount,'_id':this.userId})
          localStorage.setItem("wallet", JSON.stringify(this.wallet));
          this.ngOnInit()
        }
      }) 
      
    }else{
      this.wallet.push({'Amount':this.amount,'_id':this.userId})
      localStorage.setItem('wallet',JSON.stringify(this.wallet))
      
      
    }
  }
}
/*this.wallet.forEach((item:any,index:any)=>{
        if(item._id===this.userId){
          
          this.x=parseInt(item.Amount)
          this.y=parseInt(this.amount)
          this.tamount=this.x+this.y
          this.wallet.splice(index,1)
          this.wallet.push({'Amount':this.tamount,'_id':this.userId})
          this.wallet = JSON.stringify(this.wallet)
          localStorage.removeItem('wallet')
          localStorage.setItem("wallet", this.wallet);
          this.ngOnInit()
          //localStorage.setItem('wallet',JSON.stringify(this.wallet))
        }
        else{
          this.wallet.push({'Amount':this.amount,'_id':this.userId})
          localStorage.setItem("wallet", JSON.stringify(this.wallet));
          this.ngOnInit()
        }
      })*/

    /*this.userId=localStorage.getItem('_id')
    //console.log(this.amount)
    if(!!localStorage.getItem('wallet'))
    {
      var data=JSON.parse(localStorage.getItem('wallet')!)
      this.wallet=data
      this.wallet.push({'Amount':this.amount,'_id':this.userId})
      localStorage.setItem('wallet',JSON.stringify(this.wallet))
      
      
    }else{
      this.wallet.push({'Amount':this.amount,'_id':this.userId})
      localStorage.setItem('wallet',JSON.stringify(this.wallet))
      
      
    }
  }*/
      
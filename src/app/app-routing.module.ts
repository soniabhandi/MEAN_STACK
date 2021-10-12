import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component'
import { ManageusersComponent } from './manageusers/manageusers.component';
import { AuthGuard } from './auth.guard';
import { UserauthGuard } from './userauth.guard';
import { CpadminComponent } from './cpadmin/cpadmin.component';
import { EpadminComponent } from './epadmin/epadmin.component';
import { CpuserComponent } from './cpuser/cpuser.component';
import { EpuserComponent } from './epuser/epuser.component';
import { ManageprojectComponent } from './manageproduct/manageproject.component';
import { AddprojectComponent } from './addproduct/addproject.component';
import { CartComponent } from './cart/cart.component';
import { WalletComponent } from './wallet/wallet.component';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'product', component: ProductComponent },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: 'userhome', component: UserhomeComponent, canActivate:[UserauthGuard]},
  {path: 'cpuser', component: CpuserComponent, canActivate:[UserauthGuard]},
  {path: 'epuser', component: EpuserComponent, canActivate:[UserauthGuard]},
  {path: 'wallet', component: WalletComponent, canActivate:[UserauthGuard]},
  {path: 'cart', component: CartComponent, canActivate:[UserauthGuard]},
  {path:'buyproduct',
    component:BuyproductComponent,
    canActivate:[UserauthGuard],
    children:[
      {path:'',component:PaymentComponent},
      {path:'payment',component:PaymentComponent},
      {path:'invoice',component:InvoiceComponent},
     ]
  },
  {path: 'history', component: HistoryComponent, canActivate:[UserauthGuard]},

  {path: 'adminhome', component: AdminhomeComponent, canActivate:[AuthGuard]},
  {path: 'manageusers', component: ManageusersComponent, canActivate:[AuthGuard]},
  {path: 'cpadmin', component: CpadminComponent, canActivate:[AuthGuard]},
  {path: 'epadmin', component: EpadminComponent, canActivate:[AuthGuard]},
  {path:'manageproduct', 
    component: ManageprojectComponent, 
    canActivate:[AuthGuard],
    children:[
      {path:'',component:AddprojectComponent},
      {path:'addproduct',component:AddprojectComponent},
    
     ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

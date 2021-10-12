import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './userhome/userhome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component'
import { AuthService } from './auth.service';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { RequesturlsService } from './requesturls.service';
import { AuthGuard } from './auth.guard';
import { UserauthGuard } from './userauth.guard';
import { CpadminComponent } from './cpadmin/cpadmin.component';
import { EpadminComponent } from './epadmin/epadmin.component';
import { ManageprojectComponent } from './manageproduct/manageproject.component';
import { AddprojectComponent } from './addproduct/addproject.component';
import { CpuserComponent } from './cpuser/cpuser.component';
import { EpuserComponent } from './epuser/epuser.component';
import { CartComponent } from './cart/cart.component';
import { WalletComponent } from './wallet/wallet.component';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    ProductComponent,
    ContactComponent,
    BlogComponent,
    UserhomeComponent,
    AdminhomeComponent,
    ManageusersComponent,
    CpadminComponent,
    EpadminComponent,
    ManageprojectComponent,
    AddprojectComponent,
    CpuserComponent,
    EpuserComponent,
    CartComponent,
    WalletComponent,
    BuyproductComponent,
    PaymentComponent,
    InvoiceComponent,
    HistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,RequesturlsService,AuthGuard,UserauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClientRoutingModule } from './client-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GeneralComponent } from './views/dashboard/components/general/general.component';
import { BilleteraComponent } from './views/dashboard/components/billetera/billetera.component';
import { ComprarVenderComponent } from './views/dashboard/components/comprar-vender/comprar-vender.component';
import { MarketplaceComponent } from './views/dashboard/components/marketplace/marketplace.component';
import { OTCComponent } from './views/dashboard/components/otc/otc.component';
import { PerfilComponent } from './views/dashboard/components/perfil/perfil.component';
import { HistorialTransaccionesComponent } from './views/dashboard/components/historial-transacciones/historial-transacciones.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { NgApexchartsModule } from 'ng-apexcharts';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { UsdtWalletComponent } from './views/dashboard/components/billetera/usdt-wallet/usdt-wallet.component';
import { ClipWalletComponent } from './views/dashboard/components/billetera/clip-wallet/clip-wallet.component';
import { WalletDepositComponent } from './views/dashboard/components/billetera/wallet-deposit/wallet-deposit.component';
import { WithdrawComponent } from './views/dashboard/components/billetera/withdraw/withdraw.component';
import { UsdtDepositComponent } from './views/dashboard/components/billetera/usdt-deposit/usdt-deposit.component';
import { UsdtWithdrawComponent } from './views/dashboard/components/billetera/usdt-withdraw/usdt-withdraw.component';
import { MarketComponent } from './views/dashboard/components/marketplace/market/market.component';
import { HomeMarketComponent } from './views/dashboard/components/marketplace/home-market/home-market.component';
import { PaymentComponent } from './views/dashboard/components/marketplace/payment/payment.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ClientComponent } from './client.component';
@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    GeneralComponent,
    BilleteraComponent,
    ComprarVenderComponent,
    MarketplaceComponent,
    OTCComponent,
    PerfilComponent,
    HistorialTransaccionesComponent,
    LoginComponent,
    UsdtWalletComponent,
    ClipWalletComponent,
    WalletDepositComponent,
    WithdrawComponent,
    UsdtDepositComponent,
    UsdtWithdrawComponent,
    MarketComponent,
    HomeMarketComponent,
    PaymentComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule,
    NgApexchartsModule,
    ClipboardModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class ClientModule { }

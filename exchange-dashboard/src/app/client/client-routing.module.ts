import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { GeneralComponent } from './views/dashboard/components/general/general.component';
import { BilleteraComponent } from './views/dashboard/components/billetera/billetera.component';
import { ComprarVenderComponent } from './views/dashboard/components/comprar-vender/comprar-vender.component';
import { MarketplaceComponent } from './views/dashboard/components/marketplace/marketplace.component';
import { OTCComponent } from './views/dashboard/components/otc/otc.component';
import { HistorialTransaccionesComponent } from './views/dashboard/components/historial-transacciones/historial-transacciones.component';
import { PerfilComponent } from './views/dashboard/components/perfil/perfil.component';
import { LoginComponent } from './auth/login/login.component';
import { UsdtWalletComponent } from './views/dashboard/components/billetera/usdt-wallet/usdt-wallet.component';
import { ClipWalletComponent } from './views/dashboard/components/billetera/clip-wallet/clip-wallet.component';
import { WalletDepositComponent } from './views/dashboard/components/billetera/wallet-deposit/wallet-deposit.component';
import { WithdrawComponent } from './views/dashboard/components/billetera/withdraw/withdraw.component';
import { UsdtWithdrawComponent } from './views/dashboard/components/billetera/usdt-withdraw/usdt-withdraw.component';
import { UsdtDepositComponent } from './views/dashboard/components/billetera/usdt-deposit/usdt-deposit.component';
import { MarketComponent } from './views/dashboard/components/marketplace/market/market.component';
import { HomeMarketComponent } from './views/dashboard/components/marketplace/home-market/home-market.component';
import { PaymentComponent } from './views/dashboard/components/marketplace/payment/payment.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './Services/auth.guard';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'general', pathMatch: 'full' },
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'billetera',
        component: BilleteraComponent,
      },
      {
        path: 'comprar-vender',
        component: ComprarVenderComponent,
      },
      {
        path: 'marketplace',
        component: MarketplaceComponent,
        children:[
          {
            path:"", component:MarketComponent
          },
          {
            path:"home", component: HomeMarketComponent
          },
          {
            path:"payment", component: PaymentComponent
          },
        ]
      },
      {
        path: 'otc',
        component: OTCComponent,
      },
      {
        path: 'historial-transacciones',
        component: HistorialTransaccionesComponent,
      },
      {
        path: 'perfil',
        component: PerfilComponent,
      },
    ],
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}

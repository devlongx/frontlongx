import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountDashboardComponent } from './pages/dashboard/account-dashboard/account-dashboard.component';
import { MarketingDashboardComponent } from './pages/dashboard/marketing-dashboard/marketing-dashboard.component';
import { ProductManagementComponent } from './pages/dashboard/product-management/product-management.component';
import { SalesDashboardComponent } from './pages/dashboard/sales-dashboard/sales-dashboard.component';
import { BankingDashboardComponent } from './pages/dashboard/banking-dashboard/banking-dashboard.component';
import { CashManagementComponent } from './pages/dashboard/cash-management/cash-management.component';
import { UserProfileComponent } from './pages/Users/user-profile/user-profile.component';
import { UserEditComponent } from './pages/Users/user-edit/user-edit.component';
import { UserAddComponent } from './pages/Users/user-add/user-add.component';
import { UserListComponent } from './pages/Users/user-list/user-list.component';
import { InboxComponent } from './pages/chat/inbox/inbox.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent, children:[

      {
        path:'account',component:AccountDashboardComponent
      },
      {
        path:'marketing',component:MarketingDashboardComponent
      },
      {
        path:'product',component:ProductManagementComponent
      },
       {
        path:'sales',component:SalesDashboardComponent
      },
      {
        path:'banking',component:BankingDashboardComponent
      },
      {
        path:'cash',component:CashManagementComponent
      },
      {
        path:'user-profile',component:UserProfileComponent
      },
      {
        path:'user-edit',component:UserEditComponent
      },
      {
        path:'user-add',component:UserAddComponent
      },
      {
        path:'user-list',component:UserListComponent
      },
      {
        path:'chat',component:InboxComponent
      },
    ]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

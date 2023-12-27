import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ColorSwitcherComponent } from './components/color-switcher/color-switcher.component';
import { AccountDashboardComponent } from './pages/dashboard/account-dashboard/account-dashboard.component';
import { MarketingDashboardComponent } from './pages/dashboard/marketing-dashboard/marketing-dashboard.component';
import { ProductManagementComponent } from './pages/dashboard/product-management/product-management.component';
import { BankingDashboardComponent } from './pages/dashboard/banking-dashboard/banking-dashboard.component';
import { SalesDashboardComponent } from './pages/dashboard/sales-dashboard/sales-dashboard.component';
import { CashManagementComponent } from './pages/dashboard/cash-management/cash-management.component';
import { UserProfileComponent } from './pages/Users/user-profile/user-profile.component';
import { UserEditComponent } from './pages/Users/user-edit/user-edit.component';
import { UserAddComponent } from './pages/Users/user-add/user-add.component';
import { UserListComponent } from './pages/Users/user-list/user-list.component';
import { InboxComponent } from './pages/chat/inbox/inbox.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    LoaderComponent,
    ColorSwitcherComponent,
    AccountDashboardComponent,
    MarketingDashboardComponent,
    ProductManagementComponent,
    BankingDashboardComponent,
    SalesDashboardComponent,
    CashManagementComponent,
    UserProfileComponent,
    UserEditComponent,
    UserAddComponent,
    UserListComponent,
    InboxComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

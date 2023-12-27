import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  checkbox=false
  showPass=false

  constructor(private router: Router){

  }

  isCheckbox(){
    this.checkbox=!this.checkbox
  }
  loginButton(){
    this.router.navigate(['/dashboard']);
  }
}

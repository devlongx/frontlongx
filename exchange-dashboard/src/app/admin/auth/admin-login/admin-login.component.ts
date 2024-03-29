import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  constructor(private router: Router,private fb: FormBuilder, private authService: AdminAuthService){

  }
  login=this.fb.group({
    email:["",Validators.required],
    password:["",Validators.required],
  })

  loginSubmit(){
    var profile = ''

      var user =this.login.value
      console.log(user)
      this.authService.loginUser(user).subscribe(response=>{
        this.authService.setToken(response.token)
        const authToken = response.token;
        const userProfile = response.user;
        const profile = response.user.role;
        this.authService.setTokenAndProfile(authToken, userProfile);
        if(profile=='admin'){
          this.router.navigate(['/dashboard']);
          console.log("Success")
        }

      })
    }
  }


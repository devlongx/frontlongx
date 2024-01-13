import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/client/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  checkbox=false
  showPass=false

  constructor(private router: Router,private fb: FormBuilder, private authService: AuthService){

  }
  login=this.fb.group({
    email:["",Validators.required],
    password:["",Validators.required],
  })
  isCheckbox(){
    this.checkbox=!this.checkbox
  }
  loginSubmit(){
    if(this.checkbox){
      var user =this.login.value
      this.authService.loginUser(user).subscribe(response=>{
        this.authService.setToken(response.token)
        const authToken = response.token;
        const userProfile = response.user;
        this.authService.setTokenAndProfile(authToken, userProfile);
        this.router.navigate(['/dashboard']);
        console.log("Success")
      })
    }
  }
}

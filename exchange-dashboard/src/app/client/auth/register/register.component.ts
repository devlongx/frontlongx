import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../Services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  checkbox=false
  showPass=false

  constructor(private router: Router, private fb:FormBuilder, private authService:AuthService, private http: HttpClient) {

  }
  register=this.fb.group({
    name:["",Validators.required],
    telephone:["",Validators.required],
    email:["",Validators.required],
    password:["",Validators.required],
    role:"user",
  })
  isCheckbox(){
    this.checkbox=!this.checkbox
  }
  createUser(){

    if(this.register.valid){
      const user = this.register.value
      this.authService.registerUser(user).subscribe(response =>{
        this.authService.setToken(response.token)
        const authToken = response.token;
        const userProfile = response.user;
        this.authService.setTokenAndProfile(authToken, userProfile);
        this.router.navigate(['/dashboard']);
      })
    }





  }
}

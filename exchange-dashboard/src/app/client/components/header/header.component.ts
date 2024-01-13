import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  notificationBar=false;
  profile:any
  constructor(private router: Router, private authService:AuthService){
    this.profile =this.authService.getUserProfile()
    console.log(this.profile)
  }

  profileButton(){
    this.router.navigate(['/perfil'])
  }
}

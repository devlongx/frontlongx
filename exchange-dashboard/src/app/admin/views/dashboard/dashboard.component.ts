import { Component } from '@angular/core';
import { AdminAuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router, private authService: AdminAuthService){}
  logout(){
   this.authService.logout().subscribe(
     (response) => {
       console.log('Logout successful:', response);
       // Optionally, navigate to the login page or perform other actions
       localStorage.clear()
       this.router.navigate(['/login']);
     },
     (error) => {
       console.error('Logout failed:', error);
       // Handle logout error
     }
     )
  }
}

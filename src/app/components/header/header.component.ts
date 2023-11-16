import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  notificationBar=false;
  constructor(private router: Router,){
  }

  profileButton(){
    this.router.navigate(['/perfil'])
  }
}

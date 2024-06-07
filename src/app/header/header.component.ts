import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png';

  constructor(private router: Router) {}

  onClickLogout() {
    this.router.navigate(['/login']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showSubmitError: boolean = false;
  errorMsg: string = 'Invalid login credentials';
  websiteLogoInForm: string ='https://assets.ccbp.in/frontend/react-js/logo-img.png'; 
  constructor(private router:Router){

  }


  onSubmitLoginForm() {
    if (this.username && this.password) {
      this.router.navigate(['/home']);
      
      this.showSubmitError = false;
    } else {
      this.showSubmitError = true;
    }
  }

}

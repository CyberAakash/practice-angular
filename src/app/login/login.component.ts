import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email: any = '';
  password: any = '';
  public loginStatus: any = localStorage.getItem('loginStatus');

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    if (this.loginStatus == 'valid') {
      this.router.navigate(['/']);
    } else if (this.loginStatus == 'invalid') {
      this.router.navigate(['/login']);
    }
  }

  authenticate(form: any) {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin@1234') {
      // Redirect or perform necessary actions upon successful authentication
      alert('Authentication successful!');
      form.reset();
      localStorage.setItem('loginStatus', 'valid');
      this.router.navigate(['/']);
    } else {
      // Handle authentication failure
      alert('Authentication failed. Incorrect email or password.');
      localStorage.setItem('loginStatus', 'invalid');
      form.reset();
    }
  }
}

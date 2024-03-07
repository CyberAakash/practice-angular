import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
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
    if (form.value.mail === 'admin@gmail.com' && form.value.pass === 'Admin@1234') {
      // Redirect or perform necessary actions upon successful authentication
      alert('Authentication successful!');
      // this.openSnackbar('Authentication successful!', 'close');
      form.reset();
      localStorage.setItem('loginStatus', 'valid');
      this.router.navigate(['/']);
    } else {
      // Handle authentication failure
      alert('Authentication failed. Incorrect email or password.');
      // this.openSnackbar('Authentication failed. Incorrect email or password.', 'close');
      localStorage.setItem('loginStatus', 'invalid');
      form.reset();
    }
  }
}

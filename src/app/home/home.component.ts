import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
changeStatus() {
  if (this.loginStatus == 'valid') {
    localStorage.setItem('loginStatus', 'invalid');
    this.router.navigate(['/login']);
  } else if (this.loginStatus == 'invalid') {
    localStorage.setItem('loginStatus', 'valid');
    this.router.navigate(['/']);
  }
}

  public loginStatus: any = localStorage.getItem('loginStatus');
  
  constructor(private router:Router) {}

  ngOnInit() {
    if (this.loginStatus == 'valid') {
      this.router.navigate(['/']);
    } else if (this.loginStatus == 'invalid') {
      this.router.navigate(['/login']);
    }
  }
}

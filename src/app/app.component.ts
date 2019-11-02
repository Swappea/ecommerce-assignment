import { Component } from '@angular/core';
import { UserDetailsService } from './services/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerceapp';
  isUserExists = false;

  constructor(private userdetail: UserDetailsService, private router: Router) {
    this.userdetail.getUserDetails().subscribe(user => {
      console.log('user', user);
      if (user) {
        this.isUserExists = true;
      }
    });
  }

  onLogout() {
    this.userdetail.setUserDetail(null);
    this.router.navigate(['/login']);
  }
}

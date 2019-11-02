import { Component, OnInit } from '@angular/core';
import { CheckUserloginService } from './checkUserlogin.service';
import { Router } from '@angular/router';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  CITIES = [
    {
      id: 1,
      label: 'Mumbai'
    },
    {
      id: 2,
      label: 'Pune'
    },
    {
      id: 3,
      label: 'Delhi'
    },
    {
      id: 4,
      label: 'Kolkata'
    }
  ];

  userModel = {
    username: '',
    password: '',
    city: 0,
  };

  failedLogin = false;

  constructor(private checkUser: CheckUserloginService, private router: Router, private userdetail: UserDetailsService) { }

  ngOnInit() {
  }

  onLogin() {
    const user = this.checkUser.checkIfUseExists(this.userModel.username, this.userModel.password);
    if (user) {
      this.failedLogin = false;
      console.log(this.userModel.city);
      console.log(this.CITIES.find(c => c.id === this.userModel.city));
      const cityname = this.CITIES.find(c => c.id == this.userModel.city).label;
      const userObj = { ...user, cityname };
      this.userdetail.setUserDetail(userObj);
      this.router.navigate(['/display']);
    } else {
      this.failedLogin = true;
    }
  }

}

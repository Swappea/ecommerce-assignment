import { Component, OnInit } from '@angular/core';
import { CartInfoService } from '../services/cart-info.service';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  currentCartDetails = [];
  currentUser = {};

  constructor(private cartInfo: CartInfoService, private userDetail: UserDetailsService) {

    this.userDetail.getUserDetails().subscribe(user => {
      this.currentUser = user;
      this.cartInfo.getCartDetails().subscribe(cart => {
        this.currentCartDetails = cart;
      });
    });


  }

  ngOnInit() {
  }

}

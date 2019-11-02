import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';
import { CartInfoService } from '../services/cart-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {

  productList = [
    {
      id: 1,
      name: 'Colgate',
      description: 'Great Toothpaste',
      price: '20',
      quantity: 0
    },
    {
      id: 2,
      name: 'Soap',
      description: 'Excellent Soap',
      price: '50',
      quantity: 0
    },
    {
      id: 3,
      name: 'Towel',
      description: 'Useful Towel',
      price: '100',
      quantity: 0
    }
  ];

  currentUser = {

  };

  currentCart = [];

  constructor(private userdetail: UserDetailsService, private cardDetail: CartInfoService, private router: Router) {
    this.userdetail.getUserDetails().subscribe(user => {
      if (user) {
        this.currentUser = user;
      }
    });
  }

  ngOnInit() {
  }

  updateQuantity(product, value: number) {
    product.quantity += value;
    if (product.quantity < 0) {
      product.quantity = 0;
    }
  }

  updateCart(product) {

    const p = this.currentCart.find(c => c.id === product.id);
    if (p) {
      p.quantity = product.quantity;
      if (product.quantity <= 0) {
        this.currentCart = this.currentCart.filter((c) => {
          return c.id !== product.id;
        });
      }
    } else {
      if (product.quantity > 0) {
        this.currentCart.push(product);
      } else {
        this.currentCart = this.currentCart.filter((c) => {
          return c.id !== product.id;
        });
      }
    }

    console.log('updateCart', this.currentCart);
    this.cardDetail.setCartDetail(this.currentCart);
  }

  goToCart() {
    this.router.navigate(['/cartdetails']);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartInfoService {

  constructor() { }

  private cartSubject = new BehaviorSubject<any>(null);

  getCartDetails() {
    return this.cartSubject.asObservable();
  }

  setCartDetail(cart) {
    this.cartSubject.next(cart);
  }

}

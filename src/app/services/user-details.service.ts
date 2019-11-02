import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  private userSubject = new BehaviorSubject<any>(null);

  getUserDetails() {
    return this.userSubject.asObservable();
  }

  setUserDetail(user) {
    this.userSubject.next(user);
  }


}

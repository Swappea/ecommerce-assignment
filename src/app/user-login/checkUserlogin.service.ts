import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckUserloginService {

  private USERDETAILS = [
    {
      id: 1,
      username: 'test',
      password: '123456'
    },
    {
      id: 2,
      username: 'swappy',
      password: '11223344'
    },
    {
      id: 3,
      username: 'John',
      password: 'JaneDoe123'
    }
  ];

  constructor() { }

  checkIfUseExists(uname: string, pwd: string) {
    return this.USERDETAILS.find(user => user.username === uname && user.password === pwd);
  }


}

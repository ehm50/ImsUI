import { Injectable } from '@angular/core';
import { User } from '../domain/user';

@Injectable()
export class AuthService {
  private user: User;
  
  public get currentUser(): User {
    this.user = new User();
    this.user.id = 1;
    this.user.name = "Admin";

    return this.user;
  }

}
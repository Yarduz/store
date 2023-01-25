import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import mongoose from 'mongoose';
import { User } from './app.component';
// import { SchemaService } from './schema.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  error: boolean = false;
  isLogged: boolean = false
  isAdmin: boolean = false
  userInfo!: User;

  mockUser: User = {
    name: 'yarduz',
    email: 'yarduz@yarduz.yarduz',
    phone: 50505534542,
    password: 'password',
    address: {
      state: 'illinois',
      city: 'chicago',
      street: 'the mean streets',
      homeNum: 94,
      zip: 12332
    },
    admin: true
  };

  constructor(
    private router: Router,
    //  private schmemaService: SchemaService
  ) { }

  log(email: string, password: string) {
    console.log(email);
    console.log(password);
  }
  async regUser(user: any) {
    // await mongoose.connect('mongodb://localhost:27017/users');
    // await this.schmemaService.userSchema.add({ user });
    console.log(user)
  }

  updateUser(user: User) {
    console.log(user)
  }
  get(email: string) {

  }

  remove(email: string) {

  }

  logout() {
    console.log("logout");
    this.isLogged = false;
    this.isAdmin = false;
    this.router.navigate(["/login"])
  }

}

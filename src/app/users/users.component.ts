import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../app.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  adminEmail: string = "";
  adminPassword: string = "";
  adminName: string = "";

  addAdmin: boolean = false;
  reEnter: string = "";
  dontMatch: boolean = false;
  registerred: boolean = false;


  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  addAdminClick() {
    if (this.addAdmin == false)
      this.addAdmin = true;
    else {
      this.addAdmin = false;
    }
    this.registerred = false;
  }

  regAdmin() {
    if (this.adminPassword != this.reEnter) {
      this.dontMatch = true
    }
    else {
      let user: User = {
        name: this.adminName,
        email: this.adminEmail,
        password: this.adminPassword,
        admin: true,
        phone: 0,
        address: {
          state: '',
          city: '',
          street: '',
          homeNum: 0,
          zip: 0
        }
      }
      this.userService.regUser(user);
      this.registerred = true;
      this.addAdmin = false
    }
  }
}
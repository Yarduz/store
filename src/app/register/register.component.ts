import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../app.component';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  userName: string = "";
  userEmail: string = "";
  userPhone!: number;
  userPassword: string = "";
  userState: string = "";
  userCity: string = "";
  userStreet: string = "";
  userHomeNum!: number;
  userZip!: number;

  reEnter: string = "";
  dontMatch: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  register() {
    if (this.userPassword != this.reEnter) {
      this.dontMatch = true
    }
    else {
      let user: User = {
        name: this.userName,
        email: this.userEmail,
        phone: this.userPhone,
        password: this.userPassword,
        address: {
          state: this.userState,
          city: this.userCity,
          street: this.userStreet,
          homeNum: this.userHomeNum,
          zip: this.userZip
        },
        admin: false
      }
      this.userService.regUser(user);
      this.router.navigate(['/login'])
    }
  }

}

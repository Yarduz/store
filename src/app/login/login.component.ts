import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { any, reduce } from 'underscore';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  logEmail: any = "";
  logPass: any = "";
  remember: boolean = false;
  rememberValue: any = {
    log: "",
    pass: ""
  }

  constructor(
    private router: Router,
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

  toRegister() {
    this.router.navigate(['/register'])
  }

  login() {
    if (this.email.hasError('email')) {
      const emailDiv = document.getElementById('emailDiv')
      if (emailDiv) {
        emailDiv.style.backgroundColor = "red"
        setTimeout(() => {
          emailDiv.style.backgroundColor = ""
        }, 400)
      }
    }
    else {
      this.userService.log(this.logEmail, this.logPass);
      if (this.remember) {
      }
      this.router.navigate(['/home'])
    }
  }
}

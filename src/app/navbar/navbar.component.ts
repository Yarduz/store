import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  isLogged: boolean = true;
  isAdmin: boolean = true;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    //this.isLogged=false;
  }

}

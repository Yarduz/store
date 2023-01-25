import { Component, OnInit } from '@angular/core';
import { User } from '../app.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hide: boolean = true;

  myUser: User = this.userService.mockUser
  oldEmail: string = this.userService.mockUser.email
  reEnter: string = ""
  dontMatch: boolean = false;

  updateText: string = "update"

  needUpdate: boolean = false
  confirm: boolean = false

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  updateBtn() {
    if (!this.needUpdate && !this.confirm) {
      this.needUpdate = true;
      this.updateText = "update?"
      this.dontMatch = false
    }
    else if (this.needUpdate && !this.confirm) {
      if (this.myUser.password == this.userService.mockUser.password || this.myUser.password == this.reEnter) {
        this.updateText = "satisfied?"
        this.needUpdate = false;
        this.confirm = true;
        this.dontMatch = false
      }
      else {
        this.dontMatch = true;
      }
    }
    else if (!this.needUpdate && this.confirm) {
      this.dontMatch = false
      this.updateText = "updated. change again?"
      this.userService.updateUser(this.myUser);
      this.confirm = false;
    }
  }

}

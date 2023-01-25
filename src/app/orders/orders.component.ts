import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  myName: string = this.userService.mockUser.name
  isAdmin: boolean = this.userService.isAdmin
  orders: Product[] = []
  page: number = 0
  seeHistory: boolean = false

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}

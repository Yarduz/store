import { Injectable } from '@angular/core';
import { Order } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  error: boolean = false;
  constructor() { }

  add(order: Order) {

  }
  update(order: Order) {

  }
  remove(id: number) {

  }
  get(id: number) {

  }
}

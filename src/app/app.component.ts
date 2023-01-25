import { Component } from '@angular/core';

export interface User {
  email: string,
  name: string,
  phone: number,
  password: string,
  address: {
    state: string,
    city: string,
    street: string,
    homeNum: number,
    zip: number
  },
  admin: boolean
}

export interface Product {
  id: number,
  logistics: {
    legality: boolean,
    price: number,
    inStock: number,
  },
  category: {
    class: ProductClass | undefined,
    specie: {
      main: string,
      sub: string
    }
  },
  origin: {
    climateZone: string[] | undefined,
    distribution: string[] | undefined,
    addedText: string
  }
  addedText: string,
  pic: string | ArrayBuffer | null,
}

export interface Order {
  id: number,
  time: Date,
  itemID: number,
  clientEmail: string,
  delivered: boolean
}

export type ProductClass = "mammal" | "avian" | "reptile" | "insectArachnid" | "marineAnimal" | "other"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rare Friend';
}

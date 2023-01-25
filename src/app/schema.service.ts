import { Injectable } from '@angular/core';
import { Schema } from 'mongoose';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {

  productSchema = new Schema({
    ProductID: Number,
    logistics: {
      legality: Boolean,
      price: Number,
      inStock: Number,
    },
    category: {
      class: String,
      specie: {
        main: String,
        sub: String
      }
    },
    origin: {
      climateZone: Array,
      distribution: Array,
      addedText: String
    },
    addedText: String,
    pic: String
  })

  userSchema = new Schema({
    userID: Number,
    email: String,
    name: String,
    phone: Number,
    password: String,
    address: {
      state: String,
      city: String,
      street: String,
      homeNum: Number,
      zip: Number
    },
    admin: Boolean
  })

  orderSchema = new Schema({
    orderID: Number,
    time: Date,
    itemID: Number,
    clientEmail: String,
    delivered: Boolean
  })

  constructor() { }
}

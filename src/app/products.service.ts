import { Injectable } from '@angular/core';
import { Product } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  error: boolean = false;

  failed: boolean = false

  ProductClass: string[] = ["mammal", "avian", "reptile", "insectArachnid", "marineAnimal", "other"]
  ProductDistribution: string[] = ["tropical", "dry", "subtropical", "continental", "polars", "other"]
  ProductClimateZone: string[] = ["northAmerica", "southAmerica", "asia", "europe", "ociana", "africa", "polars"]

  mockProduct: Product = {
    id: 1,
    logistics: {
      legality: false,
      price: 6000,
      inStock: 30
    },
    category: {
      class: "mammal",
      specie: {
        main: "bear",
        sub: "polar bear"
      }
    },
    origin: {
      climateZone: ["polars"],
      distribution: ["polars"],
      addedText: "string"
    },
    addedText: "added text",
    pic: null
  };

  constructor() { }

  add(product: Product) {
    if (product) {
      console.log(product)
      this.failed = false
    }
    else {
      console.log("failed services")
      this.failed = true
    }
  }

  remove(sub: string) {

  }

  get(sub: string) {

  }

  update(product: Product) {

  }

}

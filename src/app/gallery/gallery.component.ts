import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  error: boolean = this.productsService.error
  seeNew: boolean = false
  searchYourself: boolean = false

  legalOnly: boolean = false
  class: string = ""
  specie: string = ""
  climate: string = ""
  distribution: string = ""

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  search() {
    console.log(`legal: ${this.legalOnly}\n class: ${this.class}\n specie: ${this.specie} \n climate: ${this.climate}\n distribution: ${this.distribution}`)
  }

}

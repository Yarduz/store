import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ProductsService } from '../products.service';
import { Product } from '../app.component';
import { ProductClass } from '../app.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = false;

  addAnother: boolean = false
  topBText = "add another product to the shop"
  failed: boolean = false
  productClass = this.productService.ProductClass
  distributionArr: string[] = this.productService.ProductDistribution
  climateArr: string[] = this.productService.ProductClimateZone

  newId = 0
  legality: boolean = true;
  price: number = 10;
  inStock: number = 10;
  categoryClass: ProductClass | undefined = undefined
  main: string = ""
  sub: string = ""

  climateZone: string[] = [];
  distribution: string[] = [];
  originAddedText: string = "";
  addedText: string = ""
  pic: any;
  picUrl: string | ArrayBuffer | null = ""

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  // findIndex(arr: string[], value: any) {
  //   return arr.findIndex(value)
  // }

  removeClass() {
    document.getElementById("radioLegal")?.classList.remove('mat-radio-checked')
  }
  addClass() {
    document.getElementById("radioLegal")?.classList.add('mat-radio-checked')
  }

  topBtn() {
    if (this.addAnother) {
      this.addAnother = false;
      this.topBText = "add another product to the shop"
    }
    else {
      this.addAnother = true;
      this.topBText = "collapse section"
    }
  }

  fileProgress(fileInput: any) {
    this.pic = <File>fileInput.target.files[0];
    if (this.pic) {
      const reader = new FileReader();
      reader.readAsDataURL(this.pic);
      reader.onload = (_event) => {
        this.picUrl = reader.result;
        console.log(this.picUrl);
      }
    }
  }

  addProduct() {
    if (this.categoryClass == undefined ||
      this.main == "" ||
      this.sub == "" ||
      this.distribution.length == 0 ||
      this.addedText == "" ||
      this.originAddedText == "" ||
      this.pic == undefined) {
      this.failed = true
      console.log("failed")
      console.log(this.pic)
    }
    else {
      let product: Product = {
        id: this.newId,
        addedText: this.addedText,
        pic: this.picUrl,
        logistics: {
          inStock: this.inStock,
          price: this.price,
          legality: this.legality
        },
        origin: {
          addedText: this.originAddedText,
          climateZone: this.climateZone,
          distribution: this.distribution
        },
        category: {
          class: this.categoryClass,
          specie: {
            main: this.main,
            sub: this.sub
          }
        }
      }
      this.productService.add(product)
      this.failed = this.productService.failed
    }
  }
}



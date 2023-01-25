import { Component, OnInit } from '@angular/core';
import { Product } from '../app.component';
import { ProductsService } from '../products.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  shown: Product[] = []
  errorP: boolean = this.productsService.error
  errorU: boolean = this.userService.error

  constructor(
    private userService: UserService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
  }

}

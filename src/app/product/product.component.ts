import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  rows: any = [];

  productCreated: {name: string, description: string, price: number} = {name:"", description:"", price: 0};

  invalid: boolean = false;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  toEmail() {
    this.router.navigate(['/home']);
  }

  toProduct() {
    this.router.navigate(['/product']);
  }

  getAll() {
    this.productService.getAll().subscribe((res) => {
      this.rows = res;
      this.invalid = false;
    })
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe((res) => {
      console.log(res);

    })
  }

  addProduct() {
    if (!this.productCreated.description || !this.productCreated.name || !this.productCreated.price) {
      this.invalid = true;
      return
    }

    this.invalid = false;

    this.productService.addProduct(this.productCreated).subscribe((res) => {
      this.productCreated.name = '',
      this.productCreated.description = '',
      this.productCreated.price = 0
      this.getAll();

    })
  }

}

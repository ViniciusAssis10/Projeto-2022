import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  rows: any = [
    {
      name: 'iphone',
      description: 'smartphone',
      price: '5.000,00',
    },
    {
      name: 'samsung',
      description: 'smartphone',
      price: '2.000,00',
    },
    {
      name: 'lamborghini',
      description: 'carro',
      price: '1.000.000,00',
    },
    {
      name: 'ferrari',
      description: 'carro',
      price: '2.000.000,00',
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toEmail() {
    this.router.navigate(['/home']);
  }

  toProduct() {
    this.router.navigate(['/product']);
  }

}

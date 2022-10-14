import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rows: any = [
    {
      text: 'terminei hoje',
      destiny: 'lucao@gmail.com',
      subject: 'trabalho facul',
      createdAt: '14/10/2022'
    },
    {
      text: 'terminei hoje',
      destiny: 'lucao@gmail.com',
      subject: 'ai calica',
      createdAt: '14/10/2022'
    },
    {
      text: 'terminei hoje',
      destiny: 'gilbertopimpolho@gmail.com',
      subject: 'chupa lucão',
      createdAt: '14/10/2022'
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toEmail() {
    this.router.navigate(['/home']);
  }

  toProduct() {
    this.router.navigate(['/product']);
  }
}

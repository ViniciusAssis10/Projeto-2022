import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rows: any = [];
  rowsFiltered: any = [];

  date: any;

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {
    this.getEmail();
  }

  toEmail() {
    this.router.navigate(['/home']);
  }

  toProduct() {
    this.router.navigate(['/product']);
  }

  getEmail() {
  this.homeService.getEmail().subscribe((res) => {
    this.rows = res;
    this.rowsFiltered = this.rows;
  })
  }

  filterDate(date: any) {
    console.log(date);
    console.log(this.rows);

    this.rowsFiltered = this.rows.filter((row: any) => row.createdAt.slice(0, 10) == date);
  }
}

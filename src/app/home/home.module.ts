import { MatIconModule } from '@angular/material/icon';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, CommonModule, MatIconModule, ProductModule],
})
export class HomeModule {}

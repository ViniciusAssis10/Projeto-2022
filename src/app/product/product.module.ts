import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, MatIconModule],
})
export class ProductModule {}

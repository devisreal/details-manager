import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from 'src/app/products/product-list.component';
import { ProductsService } from '../products.service';
import { ProductDescriptionComponent } from 'src/app/products/product-description.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDescriptionComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },      
      { path: 'products/:id', component: ProductDescriptionComponent }      
    ]),
    MaterialModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule {}

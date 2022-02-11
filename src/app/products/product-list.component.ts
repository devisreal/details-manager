import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../shared/interface/product';
import { ProductsService } from '../shared/products.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  
  errorMessage: string = '';
  noProduct: string = 'No Products';
  sub!: Subscription;
  manInSuit: string = 'assets/man-in-suit.png';

  searchInputPlaceholder: string = 'Search by name or category';  

  private _inputValue = '';
  get inputValue() {
    return this._inputValue;
  }
  set inputValue(value: string) {
    this._inputValue = value;
    this.filteredProducts = this.performFilter(value);
  }

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        (this.products = products), (this.filteredProducts = this.products);
      },
      error: (err) => (this.errorMessage = err),
    });
        
  }

  ngOnDestry(): void {
    this.sub.unsubscribe();
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.title.toLocaleLowerCase().includes(filterBy) ||
        product.category.toLocaleLowerCase().includes(filterBy) 
        
    );
  }

  

  filterByMen(): IProduct[]{
    return this.products.filter(
      (product: IProduct) => product.category.match("men's clothing")
    )
  }

  

  
}

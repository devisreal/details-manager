import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../shared/interface/product';
import { ProductsService } from '../shared/products.service';

@Component({
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  errorMessage = '';
  product: IProduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.getProduct(Number(id));
    }   


  }


  getProduct(id: number): void{
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: (err) => this.errorMessage = err,
    })
  }

  

  onBack(): void{
    this.router.navigate(['/products'])
  }
}

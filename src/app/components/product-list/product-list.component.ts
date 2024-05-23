import { Component } from '@angular/core';
import { Categories, ProductDetails } from '../../models/product-details';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { BannerComponent } from '../home/banner/banner.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, BannerComponent, RouterLink, RouterLinkActive],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: ProductDetails[] = [];
  filteredProduct: ProductDetails[] = [];
  categories: Categories = [];
  category!: string | null;
  currentRating!: number;

  constructor(private productService: ProductService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts('jewelery').pipe(
      switchMap(product => {
        this.products = product;
        this.filteredProduct = product;
        this.productService.setProducts(this.products);
        this.productService.setFilteredProducts(this.filteredProduct);
        return this.router.queryParamMap;
      })
    ).subscribe(params => {
      this.category = params.get('category');
      this.filteredProduct = this.category ? 
        this.products.filter(p => p.category === this.category) : 
        this.products;
      this.productService.setFilteredProducts(this.filteredProduct);
    });
    this.getAllCategories();
  }

  getAllCategories():void{
    this.productService.getAllCategory().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }
}

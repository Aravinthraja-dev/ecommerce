import { Component, Input } from '@angular/core';
import { ProductDetails } from '../../../models/product-details';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() products: ProductDetails[] = [];
  @Input() filteredProducts: ProductDetails[] = [];
  cartCount: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.productService.getFilteredProducts();
    this.productService.getCartCount().subscribe(count => {
      this.cartCount = count;
    });
  }

  onFilter(input: string) {
    this.filteredProducts = (input) ? 
      this.products.filter(p => p.title.toLowerCase().includes(input.toLowerCase())) :
      this.products;
      this.productService.setFilteredProducts(this.filteredProducts);
  }
}

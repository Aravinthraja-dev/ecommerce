import { Component } from '@angular/core';
import { ProductDetails } from '../../models/product-details';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {
  products!: ProductDetails;
  buttonText: string = 'Add to Cart';
  isAdded: boolean = false;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  id: number = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    this.productService.getProductById(this.id).subscribe(product => {
      this.products = product;
    });
  }

  addToCart(product: ProductDetails) {
    this.productService.addToCart(product);
    this.buttonText = 'Added';
    this.isAdded = true;
  }

}

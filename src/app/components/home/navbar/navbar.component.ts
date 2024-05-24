import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartCount: number = 0;

  @Output() searchQuery = new EventEmitter<string>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCartCount().subscribe(count => {
      this.cartCount = count;
    });
  }

  onFilter(input: string) {
    this.productService.emitSearch(input);
  }
}

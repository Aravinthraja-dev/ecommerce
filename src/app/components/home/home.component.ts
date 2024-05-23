import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

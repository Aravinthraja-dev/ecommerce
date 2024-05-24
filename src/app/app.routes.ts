import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

export const routes: Routes = [
    { path: '', redirectTo:'products', pathMatch: 'full' },
    { path: 'products', component: HomeComponent },
    { path: 'products/:id', component: ViewProductComponent }
];

import { Routes } from '@angular/router';
import { HomepageComponent } from '../app/Components/homepage/homepage.component';
import { ProductsComponent } from '../app/Components/products/products.component';
import { UsersComponent } from '../app/Components/users/users.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent }
];

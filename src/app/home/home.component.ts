import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';

@Component({
  // You can also do button[type=submit] or [type=text]:not(textarea) and be applied to those elements.
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Constructor is used to inject Dependencies such as Services.
  constructor(private productService: ProductsService) {}

  // Runs when Component is first initialized.
  ngOnInit() {
    // Use the product service and get data from server.
    // `.subscribe()` subscribe to that returned observable and executes callbacks when the
    // observable emits or produces an error.
    this.productService
      .getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 })
      .subscribe(
        (products: Products) => {
          console.log('Products', products.items);
        },
        (err) => console.log(err)
      );
  }
}

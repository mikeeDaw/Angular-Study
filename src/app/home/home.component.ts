import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { PaginatorModule } from 'primeng/paginator';

// Import NgFor and add it to the `@Component.imports` property. Importing 'CommonModule' have other functions including the NgFor.
import { NgFor, CommonModule } from '@angular/common';

@Component({
  // You can also do button[type=submit] or [type=text]:not(textarea) and be applied to those elements.
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // Constructor is used to inject Dependencies such as Services.
  constructor(private productService: ProductsService) {}

  products: Product[] = [];
  // For Pagination
  totalRecords = 0;
  rows = 5;

  // 'Event Handler' once an event is emitted on `@Output`.
  onProductEmitted(product: Product) {
    console.log(`Nag-Emit si ${product.name}`);
  }

  fetchProducts(page: number, perPage: number) {
    // Use the product service and get data from server.
    // `.subscribe()` subscribe to that returned observable and executes callbacks when the
    // observable emits or produces an error.
    this.productService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe(
        (products: Products) => {
          // console.log('Products', products.items);
          this.products = products.items;
          this.totalRecords = products.total;
        },
        (err) => console.log(err)
      );
  }

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  // Runs when Component is first initialized.
  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }
}

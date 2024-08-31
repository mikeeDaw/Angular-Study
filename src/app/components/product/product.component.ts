import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  // `@Input` is used to send data into a component. kinda like 'props' in React. (For Property Binding)
  // Required to Initialize the variable. Associated with `[]`
  // Now this can be used in the template .html file.
  @Input() product!: Product;
  // `@Output` is used to notify components that something happened. Communication from child to parent component. Emit Data (Events).
  // For Event Binding. Associated with `()`.
  // 'EventEmitter' is used to emit events.
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.productOutput.emit(this.product);
  }
}

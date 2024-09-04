import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { PriceSignPipe } from '../../pipes/price-sign.pipe';
import { TruncateTextPipe } from '../../pipes/truncate-text.pipe';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product',
  standalone: true,
  // Also import the Pipes to use.
  imports: [
    RatingModule,
    FormsModule,
    PriceSignPipe,
    TruncateTextPipe,
    ButtonModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  // `@Input`
  //  - is used to send data into a component. kinda like 'props' in React. (For Property Binding)
  //  - Required to Initialize the variable. Associated with `[]`
  //  - Allows data flow INTO this class (ProductComponent)
  // Now this can be used in the template .html file.
  @Input() product!: Product;
  // `@Output`
  //  - is used to notify components that something happened. Communication from child to parent component. Emit Data (Events).
  //  - For Event Binding. Associated with `()`.
  //  - Allows data flow OUT of the class to the parent component.
  // 'EventEmitter' is used to emit events.
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() edit = new EventEmitter<Product>();

  ngOnInit() {
    this.productOutput.emit(this.product);
  }

  // Emit the Product of this component.
  editProd() {
    this.edit.emit(this.product);
  }
}

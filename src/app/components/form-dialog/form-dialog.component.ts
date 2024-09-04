import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../../../types';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [
    DialogModule,
    CommonModule,
    FormsModule,
    RatingModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.scss',
})
export class FormDialogComponent {
  // Inject the Form Group Builder depedency
  constructor(private formBuilder: FormBuilder) {}

  // This is a user defined validator
  // If the `ValidatorFn` returned a value, it means there is an error. If null, then there is no error.
  specialCharValidator(): ValidatorFn {
    return (control) => {
      const hasSpecial = /[!@#$%^&*()-,.?]+/.test(control.value);

      return hasSpecial ? { hasSpecialChar: true } : null;
    };
  }

  // Form Groups
  // - Way to Organize and validate your data.
  // - What being done here is the use of Reactive Forms.

  // Build the "Product" Form
  // `FormBuilder` is a helper to create a FormGroup (productForm).
  // Validation already works once form Group is created. Check the classnames of input fields.
  productForm = this.formBuilder.group({
    // Left side: Values, Right Side (the inner array): Set of Validators.
    // Each Key:Value pair is a FormControl.
    name: ['', [Validators.required, this.specialCharValidator()]],
    image: [''],
    price: ['', [Validators.required, Validators.min(0)]],
    rating: [0],
  });

  submittable = true;

  // Prop to know if dialog is to be displayed. (the combination is an example of 2-way binding.)
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();
  // '!' kinda means it is a required property and its value is declared on the element tag.
  @Input() header!: string;

  @Input() product: Product = {
    name: '',
    image: '',
    price: '',
    rating: 0,
  };

  // When the form is submitted, the event emits.
  @Output() confirm = new EventEmitter<Product>();

  onConfirm() {
    // Pass the Updated Value so it will reflect on the UI.
    const { name, image, price, rating } = this.productForm.value;

    this.confirm.emit({
      name: name || '',
      image: image || '',
      price: price || '',
      rating: rating || 0,
    });

    this.display = false;
    this.displayChange.emit(this.display);
  }

  onCancel() {
    this.display = false;
  }

  // `ngOnInit` Only Patches form on Initialization so change to `ngOnChanges`.
  // `ngOnChanges` is called when a data-bound property changes (the one with @Input)
  ngOnChanges() {
    // `patchValue` edits the value of the current value of the form.
    this.productForm.patchValue(this.product);
  }

  ngOnInit() {
    // `.valueChanges` is an observable that emits everytime the value of control changes.
    this.productForm.valueChanges.subscribe((res) => {
      this.submittable = this.productForm.valid ? true : false;
    });
  }
}

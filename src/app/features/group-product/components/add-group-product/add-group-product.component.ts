import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-group-product',
  templateUrl: './add-group-product.component.html',
  styleUrl: './add-group-product.component.scss'
})
export class AddGroupProductComponent {
  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      price: ['', Validators.required],
      quantity: ['',  [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  getFormControl(name: string): FormControl { return this.productForm.get(name) as FormControl; }

  addproduct(): void {
    if (this.productForm.valid) {
      const newproduct = {
        ...this.productForm.value,
        id: 0,
        isActive: true,
      };
      console.log(newproduct);
      this.productService.create(newproduct).subscribe({
        next: (response) => {
          console.log('product added successfully', response);
          if (response.data) {
            alert(`thêm thành công ${response.data}`);

            this.router.navigate(['..'], { relativeTo: this.route });
          } else {
            alert('thêm thất bại');
          }
        },
        error: (error) => {
          console.error('Error adding product', error);
        },
      });
    } else {
      alert('Bạn chưa nhập hết thông tin');
    }
  }
}

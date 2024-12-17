import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GroupProductService } from '../../services/group-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseResponse } from '../../../../core/models/base-response.model';
import { ResponseWithDataModel } from '../../../../core/models/reponse-with-data.model';

@Component({
  selector: 'app-add-group-product',
  templateUrl: './add-group-product.component.html',
  styleUrl: './add-group-product.component.scss',
})
export class AddGroupProductComponent {
  groupProductForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private groupProductService: GroupProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.groupProductForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  getFormControl(name: string): FormControl {
    return this.groupProductForm.get(name) as FormControl;
  }

  addGroupProduct(): void {
    if (this.groupProductForm.valid) {
      const newgroupProduct = {
        ...this.groupProductForm.value,
        id: 0,
        isActive: true,
      };
      console.log(newgroupProduct);
      this.groupProductService
        .create(newgroupProduct)
        .subscribe({
          next: (response : ResponseWithDataModel<string>) => {
            console.log('groupProduct added successfully', response);
            if (response.data) {
              alert('thêm thành công');

              this.router.navigate(['..'], { relativeTo: this.route });
            } else {
              alert('thêm thất bại');
            }
          },
          error: (error) => {
            console.error('Error adding groupProduct', error);
          },
        });
    }
    this.submitted = true;
  }
}

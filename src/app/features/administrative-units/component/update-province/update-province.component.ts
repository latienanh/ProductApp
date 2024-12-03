import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvinceService } from '../../services/province.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-province',
  templateUrl: './update-province.component.html',
  styleUrls: ['./update-province.component.scss'], // Sửa lại styleUrls
})
export class UpdateProvinceComponent implements OnInit {
  provinceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private provinceService: ProvinceService,
    private route: ActivatedRoute
  ) {
    this.provinceForm = this.fb.group({ // Khởi tạo form với giá trị mặc định
      id: ["", Validators.required],
      maTinh: ["", Validators.required],
      tenTinh: ["", Validators.required],
      cap: ["", Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.provinceForm.setValue({
        id: params['id'] || "",
        maTinh: params['maTinh'] || "",
        tenTinh: params['tenTinh'] || "",
        cap: params['cap'] || "",
      });
    });
  }

  updateProvince(): void {
    if (this.provinceForm.valid) {
      const newProvince = {
        ...this.provinceForm.value,
        isActive: true,
      };
      console.log(newProvince);
      this.provinceService.createAndUpdateProvince(newProvince).subscribe({
        next: (response) => {
          console.log('Province update successfully', response);
          if (response.isSuccessful) {
            alert('sửa thành công');
          } else {
            alert('sửa thất bại');
          }
        },
        error: (error) => {
          console.error('Error adding province', error);
        },
      });
    } else {
      alert('Form is not valid');
    }
  }
}
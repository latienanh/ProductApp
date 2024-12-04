import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProvinceService } from '../../services/province.service';
import { DistrictService } from '../../services/district.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllProvinceResponse } from '../../models/province/get-all-province-response.model';

@Component({
  selector: 'app-update-district',
  templateUrl: './update-district.component.html',
  styleUrl: './update-district.component.scss'
})
export class UpdateDistrictComponent {
  districtForm: FormGroup;
  allProvince: GetAllProvinceResponse[] = [];
  constructor(
    private fb: FormBuilder,
    private provinceService: ProvinceService,
    private districtService: DistrictService,
    private route: ActivatedRoute,
    private router : Router
  ) {
    this.districtForm = this.fb.group({ // Khởi tạo form với giá trị mặc định
      id: ["", Validators.required],
      maTinh: ["", Validators.required],
      maHuyen: ["", Validators.required],
      tenHuyen: ["", Validators.required],
      cap: ["", Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.districtForm.setValue({
        id: params['id'] || "",
        maTinh: params['maTinh'] || "",
        maHuyen: params['maHuyen'] || "",
        tenHuyen: params['tenHuyen'] || "",
        cap: params['cap'] || "",
      });
    });
    this.getAllProvince()
  }

  updateDistrict(): void {
    if (this.districtForm.valid) {
      const newdistrict = {
        ...this.districtForm.value,
        isActive: true,
      };
      console.log(newdistrict);
      this.districtService.createAndUpdateDistrict(newdistrict).subscribe({
        next: (response) => {
          console.log('district update successfully', response);
          if (response.isSuccessful) {
            alert('sửa thành công');
            this.router.navigate(['..'], { relativeTo: this.route });
          } else {
            alert('sửa thất bại');
          }
        },
        error: (error) => {
          console.error('Error adding district', error);
        },
      });
    } else {
      alert('Form is not valid');
    }
  }
  getFormControl(name: string): FormControl { return this.districtForm.get(name) as FormControl; }
  getAllProvince(): void {
    this.provinceService
      .getAll()
      .subscribe({
        next: (data) => {
         this.allProvince = [...data]
         console.log(this.allProvince)
        },
        error: (error) => {
          console.error('Error fetching districts', error);
        },
      });
  }
}

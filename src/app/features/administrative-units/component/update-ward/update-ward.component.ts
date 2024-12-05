import { Component } from '@angular/core';
import { ProvinceResponse } from '../../models/province/province-response.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProvinceService } from '../../services/province.service';
import { WardResponse } from '../../models/ward/ward-response.model';
import { DistrictResponse } from '../../models/district/district-response.model';
import { DistrictService } from '../../services/district.service';
import { WardService } from '../../services/ward.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getListDistrictResponse } from '../../models/district/get-list-district-response.model';
import { GetListProvinceResponse } from '../../models/province/get-all-province-response.model';

@Component({
  selector: 'app-update-ward',
  templateUrl: './update-ward.component.html',
  styleUrl: './update-ward.component.scss',
})
export class UpdateWardComponent {
  wardForm: FormGroup;
  allProvince: ProvinceResponse[] = [];
  allDistrict: DistrictResponse[] = [];
  constructor(
    private fb: FormBuilder,
    private provinceService: ProvinceService,
    private wardService: WardService,
    private districtService: DistrictService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.wardForm = this.fb.group({
      // Khởi tạo form với giá trị mặc định
      id: ['', Validators.required],
      maTinh: ['', Validators.required],
      maHuyen: ['', Validators.required],
      maXa: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],

      tenXa: ['', Validators.required],
      cap: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.wardForm.setValue({
        id: params['id'] || '',
        maTinh: params['maTinh'] || '',
        maHuyen: params['maHuyen'] || '',
        tenXa: params['tenXa'] || '',
        maXa: params['maXa'] || '',
        cap: params['cap'] || '',
      });
    });
    this.getAllProvince();
    this.getAllDistrict(this.wardForm.value.maTinh);
  }

  updateWard(): void {
    if (this.wardForm.valid) {
      const newWard = {
        ...this.wardForm.value,
        isActive: true,
      };
      this.wardService.createAndUpdateWard(newWard).subscribe({
        next: (response) => {
          console.log('ward update successfully', response);
          if (response.isSuccessful) {
            alert('sửa thành công');
            this.router.navigate(['..'], { relativeTo: this.route });
          } else {
            alert('sửa thất bại');
          }
        },
        error: (error) => {
          console.error('Error adding ward', error);
        },
      });
    } else {
      alert('Form is not valid');
    }
  }
  getFormControl(name: string): FormControl {
    return this.wardForm.get(name) as FormControl;
  }
  onProvinceChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const maTinh = selectElement.value;
    if (maTinh) {
      this.getAllDistrict(maTinh);
    } else {
      this.allDistrict = [];
    }
  }
  getAllProvince(): void {
    this.provinceService.getAll().subscribe({
      next: (data: GetListProvinceResponse) => {
        this.allProvince = [...data.items];
        console.log(this.allProvince);
      },
      error: (error) => {
        console.error('Error fetching wards', error);
      },
    });
  }
  getAllDistrict(value: string): void {
    this.districtService.getAll(value).subscribe({
      next: (data: getListDistrictResponse) => {
        this.allDistrict = [...data.items];
      },
      error: (error) => {
        console.error('Error fetching wards', error);
      },
    });
  }
}

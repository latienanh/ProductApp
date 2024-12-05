import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProvinceResponse } from '../../models/province/province-response.model';
import { DistrictResponse } from '../../models/district/district-response.model';
import { WardService } from '../../services/ward.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinceService } from '../../services/province.service';
import { DistrictService } from '../../services/district.service';
import { getListDistrictResponse } from '../../models/district/get-list-district-response.model';
import { GetListProvinceResponse } from '../../models/province/get-all-province-response.model';

@Component({
  selector: 'app-add-ward',
  templateUrl: './add-ward.component.html',
  styleUrl: './add-ward.component.scss'
})
export class AddWardComponent {
  wardForm: FormGroup;
  allProvince: ProvinceResponse[] =[];
  allDistrict: DistrictResponse[] =[];
  constructor(
    private fb: FormBuilder,
    private wardService: WardService,
    private route: ActivatedRoute,
    private router: Router,
    private provinceService : ProvinceService,
    private districtService : DistrictService
  ) {
    this.wardForm = this.fb.group({
      maTinh: ['', [Validators.required]],
      maHuyen: ['', Validators.required],
      maXa: ['', Validators.required],
      tenXa: ['', Validators.required],
      cap: ['',  [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getAllProvince();
  }

  getFormControl(name: string): FormControl { return this.wardForm.get(name) as FormControl; }

  addWard(): void {
    if (this.wardForm.valid) {
      const newward = {
        ...this.wardForm.value,
        id: 0,
        isActive: true,
      };
      console.log(newward);
      this.wardService.createAndUpdateWard(newward).subscribe({
        next: (response) => {
          console.log('ward added successfully', response);
          if (response.isSuccessful) {
            alert('thêm thành công');

            this.router.navigate(['..'], { relativeTo: this.route });
          } else {
            alert('thêm thất bại');
          }
        },
        error: (error) => {
          console.error('Error adding ward', error);
        },
      });
    } else {
      alert('Bạn chưa nhập hết thông tin');
    }
  }
  getAllProvince(): void {
    this.provinceService
      .getAll()
      .subscribe({
        next: (data:GetListProvinceResponse) => {
         this.allProvince = [...data.items]
         console.log(this.allProvince)
        },
        error: (error) => {
          console.error('Error fetching wards', error);
        },
      });
  }
  getAllDistrict(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const provinceValue = target.value;
    this.districtService
      .getAll(provinceValue)
      .subscribe({
        next: (data:getListDistrictResponse) => {
          console.log(data)
         this.allDistrict = [...data.items]
         console.log(this.allDistrict)
     
        },
        error: (error) => {
          console.error('Error fetching wards', error);
        },
      });
  }
}

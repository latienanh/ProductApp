import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DistrictService } from '../../services/district.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinceService } from '../../services/province.service';
import { GetAllProvinceResponse } from '../../models/province/get-all-province-response.model';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrl: './add-district.component.scss'
})
export class AddDistrictComponent implements OnInit {
  districtForm: FormGroup;
  allProvince: GetAllProvinceResponse[] =[];
  constructor(
    private fb: FormBuilder,
    private districtService: DistrictService,
    private route: ActivatedRoute,
    private router: Router,
    private provinceService : ProvinceService
  ) {
    this.districtForm = this.fb.group({
      maTinh: ['', [Validators.required]],
      maHuyen: ['', Validators.required],
      tenHuyen: ['', Validators.required],
      cap: ['',  [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getAllProvince();
  }

  getFormControl(name: string): FormControl { return this.districtForm.get(name) as FormControl; }

  addDistrict(): void {
    if (this.districtForm.valid) {
      const newdistrict = {
        ...this.districtForm.value,
        id: 0,
        isActive: true,
      };
      console.log(newdistrict);
      this.districtService.createAndUpdateDistrict(newdistrict).subscribe({
        next: (response) => {
          console.log('district added successfully', response);
          if (response.isSuccessful) {
            alert('thêm thành công');

            this.router.navigate(['..'], { relativeTo: this.route });
          } else {
            alert('thêm thất bại');
          }
        },
        error: (error) => {
          console.error('Error adding district', error);
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

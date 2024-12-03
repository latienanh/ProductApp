import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvinceService } from '../../services/province.service';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.scss'], // Changed styleUrl to styleUrls
})
export class ProvinceComponent implements OnInit {
  provinceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private provinceService: ProvinceService
  ) {
    this.provinceForm = this.fb.group({
      id: ['', Validators.required],
      maTinh: ['', Validators.required],
      tenTinh: ['', Validators.required],
      cap: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addProvince(): void {
    if (this.provinceForm.valid) {
      const newProvince = {
        ...this.provinceForm.value,
        strVungSinhThai: '',
        strVungDiaLy: '',
        strVungMien: '',
        vungMien: null,
        vungDiaLy: null,
        isActive: true,
        vungSinhThai: null,
      };
      this.provinceService.createProvince(newProvince).subscribe(
        (response) => {
          console.log('Province added successfully', response);
        },
        (error) => {
          console.error('Error adding province', error);
        }
      );
    } else {
      console.warn('Form is not valid');
    }
  }

  discardAddCategory(): void {
    console.log('Discarded');
    // Logic để hủy bỏ hành động thêm mới tỉnh nếu cần
  }
}

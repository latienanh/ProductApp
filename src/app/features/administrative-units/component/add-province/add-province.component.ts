import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinceService } from '../../services/province.service';

@Component({
  selector: 'app-add-province',
  templateUrl: './add-province.component.html',
  styleUrls: ['./add-province.component.scss'], // Changed styleUrl to styleUrls
})
export class AddProvinceComponent implements OnInit {
  provinceForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private provinceService: ProvinceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.provinceForm = this.fb.group({
      maTinh: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      tenTinh: ['', Validators.required],
      cap: ['',  [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  getFormControl(name: string): FormControl { return this.provinceForm.get(name) as FormControl; }

  addProvince(): void {
    if (this.provinceForm.valid) {
      const newProvince = {
        ...this.provinceForm.value,
        id: 0,
        isActive: true,
      };
      console.log(newProvince);
      this.provinceService.createAndUpdateProvince(newProvince).subscribe({
        next: (response) => {
          console.log('Province added successfully', response);
          if (response.isSuccessful) {
            alert('thêm thành công');

            this.router.navigate(['..'], { relativeTo: this.route });
          } else {
            alert('thêm thất bại');
          }
        },
        error: (error) => {
          console.error('Error adding province', error);
        },
      });
    } else {
      alert('Bạn chưa nhập hết thông tin');
    }
  }
}

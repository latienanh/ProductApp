import { Component } from '@angular/core';
import { DistrictResponse } from '../../models/district/district-response.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DistrictService } from '../../services/district.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllProvinceResponse } from '../../models/province/get-all-province-response.model';
import { ProvinceService } from '../../services/province.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrl: './district.component.scss'
})
export class DistrictComponent {
  districts: DistrictResponse[] = [];
  allProvince: GetAllProvinceResponse[] = [];
  currentPage = 1;
  maxPage = 0;
  pageSize = 2;
  searchForm: FormGroup;
  bulkActionControl: FormControl;
  constructor(
    private districtService: DistrictService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private provinceService: ProvinceService
  ) {
    this.searchForm = this.fb.group({
      nameSearch: [''],
      codeProvinceSelect: [''],
    });
    this.bulkActionControl = new FormControl('');
  }

  ngOnInit(): void {
    this.loadDistricts();
    this.getAllProvince();
  }

  loadDistricts(searchName?: string,codeProvice?:string): void {
    this.districtService
      .getPaging(this.currentPage, this.pageSize, searchName,codeProvice)
      .subscribe({
        next: (data) => {
          this.districts = data.items;
          console.log(this.districts)
          this.districts.map((x) => (x.checked = false));
          this.maxPage = Math.ceil(data.totalCount / this.pageSize);
          this.toggleActionVisibility();
        },
        error: (error) => {
          console.error('Error fetching districts', error);
        },
      });
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
  showAddDistrict(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  showUpdateDistrict(district: DistrictResponse): void {
    const params = {
      id: district.id,
      maTinh: district.maTinh,
      tenHuyen:district.tenHuyen,
      maHuyen: district.maHuyen,
      cap: district.cap,
    };
    this.router.navigate(['update'], {
      queryParams: params,
      relativeTo: this.route,
    });
  }

  // removedistrict(id: number): void {
  //   this.districtservice.deletedistrict(id).subscribe({
  //     next: (response) => {
  //       if (response.isSuccessful) {
  //         alert('Xoá thành công');
  //         this.loaddistricts();
  //       } else {
  //         alert('Xoá không thành công');
  //       }
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }
  bulkDistrict(): void {
    
    if (this.bulkActionControl.value === 'Delete') {
      let check = 0;
      this.districts.forEach((district) => {
        if (district.checked) {
          this.districtService.deleteDistrict(district.id).subscribe({
            next: (response) => {
              if (!response.isSuccessful) {
                check++;
              } else {
              }
            },
            error: (error) => {
              console.log(error);
            },
          });
        }
      });
      if (check == 0) {
        alert('Xoá hàng loạt thành công');
        this.loadDistricts();
      
        
      } else {
        alert(`Xoá hàng loạt thất bại ${check} `);
      }
    }
  }
  handlePageChange(page: number): void {
    this.currentPage = page;
    this.loadDistricts(this.searchForm.value.nameSearch,this.searchForm.value.codeProvinceSelect);
  }
  search() {
    console.log(this.searchForm.value.codeProvinceSelect)
    this.currentPage = 1;
    this.loadDistricts(this.searchForm.value.nameSearch,this.searchForm.value.codeProvinceSelect);
  }
  toggleActionVisibility() {
    const actionElement = document.getElementById('table-district-actions');
    const replaceElement = document.getElementById(
      'table-district-replace-element'
    );

    if (this.districts.some((x) => x.checked)) {
      actionElement?.classList.remove('d-none');
      replaceElement?.classList.add('d-none');
    } else {
      actionElement?.classList.add('d-none');
      replaceElement?.classList.remove('d-none');
    }
  }
  // Getter cho checkbox "Select All"
  get allChecked() {
    return this.districts.every((item) => item.checked);
  }

  // Getter cho trạng thái "indeterminate"
  get indeterminate() {
    return this.districts.some((item) => item.checked) && !this.allChecked;
  }

  // Thiết lập trạng thái cho tất cả checkbox con khi "Select All" thay đổi
  setAll(event: any) {
    const isChecked = event.target.checked;

    this.districts.forEach((item) => (item.checked = isChecked));

    this.toggleActionVisibility();
  }

  // Cập nhật trạng thái khi một checkbox con thay đổi
  updateSingleCheckbox(index: number, id: number) {
    const item = this.districts[index];
    item.checked = !item.checked;
    this.toggleActionVisibility();
  }
}

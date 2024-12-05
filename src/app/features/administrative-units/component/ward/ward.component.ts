import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DistrictResponse } from '../../models/district/district-response.model';
import { ProvinceResponse } from '../../models/province/province-response.model';
import { WardResponse } from '../../models/ward/ward-response.model';
import { DistrictService } from '../../services/district.service';
import { ProvinceService } from '../../services/province.service';
import { WardService } from '../../services/ward.service';
import { GetListProvinceResponse } from '../../models/province/get-all-province-response.model';
import { getListDistrictResponse } from '../../models/district/get-list-district-response.model';

@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrl: './ward.component.scss'
})
export class WardComponent {
  wards: WardResponse[] = [];
  allProvince: ProvinceResponse[] = [];
  allDistrict: DistrictResponse[] = [];
  currentPage = 1;
  maxPage = 0;
  pageSize = 2;
  searchForm: FormGroup;
  bulkActionControl: FormControl;
  constructor(
    private wardservice: WardService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private provinceService: ProvinceService,
    private districtService :DistrictService,
  ) {
    this.searchForm = this.fb.group({
      nameSearch: [''],
      codeProvinceSelect: [''],
      codeDistrictSelect: [''],
    });
    this.bulkActionControl = new FormControl('');
  }

  ngOnInit(): void {
    this.loadWards();
    this.getAllProvince();
  }

  loadWards(searchName?: string,codeProvice?:string,codeDistrict?:string): void {
    this.wardservice
      .getPaging(this.currentPage, this.pageSize, searchName,codeProvice,codeDistrict)
      .subscribe({
        next: (data) => {
          this.wards = data.items;
          this.wards.map((x) => (x.checked = false));
          this.maxPage = Math.ceil(data.totalCount / this.pageSize);
          this.toggleActionVisibility();
        },
        error: (error) => {
          console.error('Error fetching wards', error);
        },
      });
  }
  getAllProvince(): void {
    this.provinceService
      .getAll()
      .subscribe({
        next: (data:GetListProvinceResponse) => {
         this.allProvince = [...data.items]
      
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
  showAddWard(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  showUpdateWard(ward: WardResponse): void {
    const params = {
      id: ward.id,
      maTinh: ward.maTinh,
      tenXa:ward.tenXa,
      maXa:ward.maXa,
      maHuyen: ward.maHuyen,
      cap: ward.cap,
    };
    this.router.navigate(['update'], {
      queryParams: params,
      relativeTo: this.route,
    });
  }

  // removeWard(id: number): void {
  //   this.wardservice.deleteWard(id).subscribe({
  //     next: (response) => {
  //       if (response.isSuccessful) {
  //         alert('Xoá thành công');
  //         this.loadwards();
  //       } else {
  //         alert('Xoá không thành công');
  //       }
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }
  bulkWard(): void {
    
    if (this.bulkActionControl.value === 'Delete') {
      let check = 0;
      this.wards.forEach((ward) => {
        if (ward.checked) {
          this.wardservice.deleteWard(ward.id).subscribe({
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
        this.loadWards();
      
        
      } else {
        alert(`Xoá hàng loạt thất bại ${check} `);
      }
    }
  }
  handlePageChange(page: number): void {
    this.currentPage = page;
    this.loadWards(this.searchForm.value.nameSearch,this.searchForm.value.codeProvinceSelect,this.searchForm.value.codeDistrictSelect);
  }
  search() {
    console.log(this.searchForm.value.codeProvinceSelect)
    this.currentPage = 1;
    this.loadWards(this.searchForm.value.nameSearch,this.searchForm.value.codeProvinceSelect,this.searchForm.value.codeDistrictSelect);
  }
  toggleActionVisibility() {
    const actionElement = document.getElementById('table-ward-actions');
    const replaceElement = document.getElementById(
      'table-ward-replace-element'
    );

    if (this.wards.some((x) => x.checked)) {
      actionElement?.classList.remove('d-none');
      replaceElement?.classList.add('d-none');
    } else {
      actionElement?.classList.add('d-none');
      replaceElement?.classList.remove('d-none');
    }
  }
  // Getter cho checkbox "Select All"
  get allChecked() {
    return this.wards.every((item) => item.checked);
  }

  // Getter cho trạng thái "indeterminate"
  get indeterminate() {
    return this.wards.some((item) => item.checked) && !this.allChecked;
  }

  // Thiết lập trạng thái cho tất cả checkbox con khi "Select All" thay đổi
  setAll(event: any) {
    const isChecked = event.target.checked;

    this.wards.forEach((item) => (item.checked = isChecked));

    this.toggleActionVisibility();
  }

  // Cập nhật trạng thái khi một checkbox con thay đổi
  updateSingleCheckbox(index: number, id: number) {
    const item = this.wards[index];
    item.checked = !item.checked;
    this.toggleActionVisibility();
  }
}

import { Component, OnInit } from '@angular/core';
import { ProvinceService } from '../../services/province.service';
import { ProvinceResponse } from '../../models/province/province-response.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrl: './province.component.scss',
})
export class ProvinceComponent implements OnInit {
  provinces: ProvinceResponse[] = [];
  currentPage = 1;
  maxPage = 0;
  pageSize = 2;
  searchForm: FormGroup;
  bulkActionControl: FormControl;
  constructor(
    private provinceService: ProvinceService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      nameSearch: [''],
    });
    this.bulkActionControl = new FormControl('');
  }

  ngOnInit(): void {
    this.loadProvinces();
  }

  loadProvinces(searchName?: string): void {
    this.provinceService
      .getPaging(this.currentPage, this.pageSize, searchName)
      .subscribe({
        next: (data) => {
          this.provinces = data.items;
          this.provinces.map((x) => (x.checked = false));
          this.maxPage = Math.ceil(data.totalCount / this.pageSize);
          this.toggleActionVisibility();
        },
        error: (error) => {
          console.error('Error fetching provinces', error);
        },
      });
  }

  showAddProvince(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  showUpdateProvince(province: ProvinceResponse): void {
    const params = {
      id: province.id,
      maTinh: province.maTinh,
      tenTinh: province.tenTinh,
      cap: province.cap,
    };
    this.router.navigate(['update'], {
      queryParams: params,
      relativeTo: this.route,
    });
  }

  // removeProvince(id: number): void {
  //   this.provinceService.deleteProvince(id).subscribe({
  //     next: (response) => {
  //       if (response.isSuccessful) {
  //         alert('Xoá thành công');
  //         this.loadProvinces();
  //       } else {
  //         alert('Xoá không thành công');
  //       }
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }
  bulkProvince(): void {
    
    if (this.bulkActionControl.value === 'Delete') {
      let check = 0;
      this.provinces.forEach((province) => {
        if (province.checked) {
          this.provinceService.deleteProvince(province.id).subscribe({
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
        this.loadProvinces();
      
        
      } else {
        alert(`Xoá hàng loạt thất bại ${check} `);
      }
    }
  }
  handlePageChange(page: number): void {
    this.currentPage = page;
    this.loadProvinces(this.searchForm.value.nameSearch);
  }
  searchByName() {
    this.currentPage = 1;
    this.loadProvinces(this.searchForm.value.nameSearch);
  }
  toggleActionVisibility() {
    const actionElement = document.getElementById('table-province-actions');
    const replaceElement = document.getElementById(
      'table-province-replace-element'
    );

    if (this.provinces.some((x) => x.checked)) {
      actionElement?.classList.remove('d-none');
      replaceElement?.classList.add('d-none');
    } else {
      actionElement?.classList.add('d-none');
      replaceElement?.classList.remove('d-none');
    }
  }
  // Getter cho checkbox "Select All"
  get allChecked() {
    return this.provinces.every((item) => item.checked);
  }

  // Getter cho trạng thái "indeterminate"
  get indeterminate() {
    return this.provinces.some((item) => item.checked) && !this.allChecked;
  }

  // Thiết lập trạng thái cho tất cả checkbox con khi "Select All" thay đổi
  setAll(event: any) {
    const isChecked = event.target.checked;

    this.provinces.forEach((item) => (item.checked = isChecked));

    this.toggleActionVisibility();
  }

  // Cập nhật trạng thái khi một checkbox con thay đổi
  updateSingleCheckbox(index: number, id: number) {
    const item = this.provinces[index];
    item.checked = !item.checked;
    this.toggleActionVisibility();
  }
}

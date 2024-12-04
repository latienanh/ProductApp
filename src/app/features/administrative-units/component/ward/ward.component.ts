import { Component } from '@angular/core';
import { WardResponse } from '../../models/ward/ward-response.model';
import { GetAllProvinceResponse } from '../../models/province/get-all-province-response.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WardService } from '../../services/ward.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrl: './ward.component.scss'
})
export class WardComponent {
  // wards: WardResponse[] = [];
  // allProvince: GetAllProvinceResponse[] = [];
  // currentPage = 1;
  // maxPage = 0;
  // pageSize = 2;
  // searchForm: FormGroup;
  // bulkActionControl: FormControl;
  // constructor(
  //   private wardservice: WardService,
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private fb: FormBuilder,
  //   private provinceService: ProvinceService
  // ) {
  //   this.searchForm = this.fb.group({
  //     nameSearch: [''],
  //     codeProvinceSelect: [''],
  //   });
  //   this.bulkActionControl = new FormControl('');
  // }

  // ngOnInit(): void {
  //   this.loadwards();
  //   this.getAllProvince();
  // }

  // loadwards(searchName?: string,codeProvice?:string): void {
  //   this.wardservice
  //     .getPaging(this.currentPage, this.pageSize, searchName,codeProvice)
  //     .subscribe({
  //       next: (data) => {
  //         this.wards = data.items;
  //         console.log(this.wards)
  //         this.wards.map((x) => (x.checked = false));
  //         this.maxPage = Math.ceil(data.totalCount / this.pageSize);
  //         this.toggleActionVisibility();
  //       },
  //       error: (error) => {
  //         console.error('Error fetching wards', error);
  //       },
  //     });
  // }
  // getAllProvince(): void {
  //   this.provinceService
  //     .getAll()
  //     .subscribe({
  //       next: (data) => {
  //        this.allProvince = [...data]
  //        console.log(this.allProvince)
  //       },
  //       error: (error) => {
  //         console.error('Error fetching wards', error);
  //       },
  //     });
  // }
  // showAddWard(): void {
  //   this.router.navigate(['add'], { relativeTo: this.route });
  // }

  // showUpdateWard(Ward: WardResponse): void {
  //   const params = {
  //     id: Ward.id,
  //     maTinh: Ward.maTinh,
  //     tenHuyen:Ward.tenHuyen,
  //     maHuyen: Ward.maHuyen,
  //     cap: Ward.cap,
  //   };
  //   this.router.navigate(['update'], {
  //     queryParams: params,
  //     relativeTo: this.route,
  //   });
  // }

  // // removeWard(id: number): void {
  // //   this.wardservice.deleteWard(id).subscribe({
  // //     next: (response) => {
  // //       if (response.isSuccessful) {
  // //         alert('Xoá thành công');
  // //         this.loadwards();
  // //       } else {
  // //         alert('Xoá không thành công');
  // //       }
  // //     },
  // //     error: (error) => {
  // //       console.log(error);
  // //     },
  // //   });
  // // }
  // bulkWard(): void {
    
  //   if (this.bulkActionControl.value === 'Delete') {
  //     let check = 0;
  //     this.wards.forEach((Ward) => {
  //       if (Ward.checked) {
  //         this.wardservice.deleteWard(Ward.id).subscribe({
  //           next: (response) => {
  //             if (!response.isSuccessful) {
  //               check++;
  //             } else {
  //             }
  //           },
  //           error: (error) => {
  //             console.log(error);
  //           },
  //         });
  //       }
  //     });
  //     if (check == 0) {
  //       alert('Xoá hàng loạt thành công');
  //       this.loadwards();
      
        
  //     } else {
  //       alert(`Xoá hàng loạt thất bại ${check} `);
  //     }
  //   }
  // }
  // handlePageChange(page: number): void {
  //   this.currentPage = page;
  //   this.loadwards(this.searchForm.value.nameSearch,this.searchForm.value.codeProvinceSelect);
  // }
  // search() {
  //   console.log(this.searchForm.value.codeProvinceSelect)
  //   this.currentPage = 1;
  //   this.loadwards(this.searchForm.value.nameSearch,this.searchForm.value.codeProvinceSelect);
  // }
  // toggleActionVisibility() {
  //   const actionElement = document.getElementById('table-Ward-actions');
  //   const replaceElement = document.getElementById(
  //     'table-Ward-replace-element'
  //   );

  //   if (this.wards.some((x) => x.checked)) {
  //     actionElement?.classList.remove('d-none');
  //     replaceElement?.classList.add('d-none');
  //   } else {
  //     actionElement?.classList.add('d-none');
  //     replaceElement?.classList.remove('d-none');
  //   }
  // }
  // // Getter cho checkbox "Select All"
  // get allChecked() {
  //   return this.wards.every((item) => item.checked);
  // }

  // // Getter cho trạng thái "indeterminate"
  // get indeterminate() {
  //   return this.wards.some((item) => item.checked) && !this.allChecked;
  // }

  // // Thiết lập trạng thái cho tất cả checkbox con khi "Select All" thay đổi
  // setAll(event: any) {
  //   const isChecked = event.target.checked;

  //   this.wards.forEach((item) => (item.checked = isChecked));

  //   this.toggleActionVisibility();
  // }

  // // Cập nhật trạng thái khi một checkbox con thay đổi
  // updateSingleCheckbox(index: number, id: number) {
  //   const item = this.wards[index];
  //   item.checked = !item.checked;
  //   this.toggleActionVisibility();
  // }
}

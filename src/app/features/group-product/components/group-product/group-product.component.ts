import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseWithDataModel } from '../../../../core/models/reponse-with-data.model';
import { ResponseWithListDataModel } from '../../../../core/models/response-with-listdata.model';
import { GroupProductResponseModel } from '../../models/group-product-response.model';
import { GroupProductService } from '../../services/group-product.service';

@Component({
  selector: 'app-group-product',
  templateUrl: './group-product.component.html',
  styleUrl: './group-product.component.scss',
})
export class GroupProductComponent implements OnInit {
  groupProducts: GroupProductResponseModel[] = [];
  currentPage = 1;
  maxPage = 0;
  pageSize = 1;
  searchForm: FormGroup;
  bulkActionControl: FormControl;
  constructor(
    private groupProductService: GroupProductService,
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
    this.loadGroupProduct();
  }

  loadGroupProduct(searchName?: string): void {
    this.groupProductService
      .getPaging(this.currentPage-1, this.pageSize, searchName)
      .subscribe({
        next: (data: ResponseWithListDataModel<GroupProductResponseModel>) => {
          console.log(data)
          this.groupProducts = data.listData.data;
          this.groupProducts.map((x) => (x.checked = false));
          this.maxPage = data.listData.totalPage;
          this.toggleActionVisibility();
        },
        error: (error) => {
          console.error('Error fetching groupProduct', error);
        },
      });
  }

  showAddGroupProduct(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  showUpdateGroupProduct(id: string): void {
    const params = {
      id: id,
    };
    this.router.navigate(['update'], {
      queryParams: params,
      relativeTo: this.route,
    });
  }

  // removeGroupProduct(id: number): void {
  //   this.groupProductervice.deleteGroupProduct(id).subscribe({
  //     next: (response) => {
  //       if (response.isSuccessful) {
  //         alert('Xoá thành công');
  //         this.loadgroupProduct();
  //       } else {
  //         alert('Xoá không thành công');
  //       }
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }
  bulkGroupProduct(): void {
    if (this.bulkActionControl.value === 'Delete') {
      let check = 0;
      this.groupProducts.forEach((GroupProduct) => {
        if (GroupProduct.checked) {
          this.groupProductService.delete(GroupProduct.id).subscribe({
            next: (response:ResponseWithDataModel<string>) => {
              if (!response.data) {
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
        this.loadGroupProduct();
      } else {
        alert(`Xoá hàng loạt thất bại ${check} `);
      }
    }
  }
  handlePageChange(page: number): void {
    this.currentPage = page;
    this.loadGroupProduct(this.searchForm.value.nameSearch);
  }
  searchByName() {
    this.currentPage = 1;
    this.loadGroupProduct(this.searchForm.value.nameSearch);
  }
  toggleActionVisibility() {
    const actionElement = document.getElementById('table-GroupProduct-actions');
    const replaceElement = document.getElementById(
      'table-GroupProduct-replace-element'
    );

    if (this.groupProducts.some((x) => x.checked)) {
      actionElement?.classList.remove('d-none');
      replaceElement?.classList.add('d-none');
    } else {
      actionElement?.classList.add('d-none');
      replaceElement?.classList.remove('d-none');
    }
  }
  // Getter cho checkbox "Select All"
  get allChecked() {
    return this.groupProducts.every((item) => item.checked);
  }

  // Getter cho trạng thái "indeterminate"
  get indeterminate() {
    return this.groupProducts.some((item) => item.checked) && !this.allChecked;
  }

  // Thiết lập trạng thái cho tất cả checkbox con khi "Select All" thay đổi
  setAll(event: any) {
    const isChecked = event.target.checked;

    this.groupProducts.forEach((item) => (item.checked = isChecked));

    this.toggleActionVisibility();
  }

  // Cập nhật trạng thái khi một checkbox con thay đổi
  updateSingleCheckbox(index: number, id: string) {
    const item = this.groupProducts[index];
    item.checked = !item.checked;
    this.toggleActionVisibility();
  }
}

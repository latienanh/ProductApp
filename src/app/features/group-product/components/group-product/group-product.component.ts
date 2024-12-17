import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductResponseModel } from '../../models/product-response.model';
import { ProductService } from '../../services/product.service';
import { ResponseWithListDataModel } from '../../../../core/models/response-with-listdata.model';
import { ResponseWithDataModel } from '../../../../core/models/reponse-with-data.model';

@Component({
  selector: 'app-group-product',
  templateUrl: './group-product.component.html',
  styleUrl: './group-product.component.scss',
})
export class GroupProductComponent implements OnInit {
  products: ProductResponseModel[] = [];
  currentPage = 1;
  maxPage = 0;
  pageSize = 1;
  searchForm: FormGroup;
  bulkActionControl: FormControl;
  constructor(
    private productService: ProductService,
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
    this.loadProducts();
  }

  loadProducts(searchName?: string): void {
    this.productService
      .getPaging(this.currentPage-1, this.pageSize, searchName)
      .subscribe({
        next: (data: ResponseWithListDataModel<ProductResponseModel>) => {
          console.log(data)
          this.products = data.listData.data;
          this.products.map((x) => (x.checked = false));
          this.maxPage = data.listData.totalPage;
          this.toggleActionVisibility();
        },
        error: (error) => {
          console.error('Error fetching Products', error);
        },
      });
  }

  showAddProduct(): void {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  showUpdateProduct(id: string): void {
    const params = {
      id: id,
    };
    this.router.navigate(['update'], {
      queryParams: params,
      relativeTo: this.route,
    });
  }

  // removeProduct(id: number): void {
  //   this.ProductService.deleteProduct(id).subscribe({
  //     next: (response) => {
  //       if (response.isSuccessful) {
  //         alert('Xoá thành công');
  //         this.loadProducts();
  //       } else {
  //         alert('Xoá không thành công');
  //       }
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }
  bulkProduct(): void {
    if (this.bulkActionControl.value === 'Delete') {
      let check = 0;
      this.products.forEach((Product) => {
        if (Product.checked) {
          this.productService.delete(Product.id).subscribe({
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
        this.loadProducts();
      } else {
        alert(`Xoá hàng loạt thất bại ${check} `);
      }
    }
  }
  handlePageChange(page: number): void {
    this.currentPage = page;
    this.loadProducts(this.searchForm.value.nameSearch);
  }
  searchByName() {
    this.currentPage = 1;
    this.loadProducts(this.searchForm.value.nameSearch);
  }
  toggleActionVisibility() {
    const actionElement = document.getElementById('table-Product-actions');
    const replaceElement = document.getElementById(
      'table-Product-replace-element'
    );

    if (this.products.some((x) => x.checked)) {
      actionElement?.classList.remove('d-none');
      replaceElement?.classList.add('d-none');
    } else {
      actionElement?.classList.add('d-none');
      replaceElement?.classList.remove('d-none');
    }
  }
  // Getter cho checkbox "Select All"
  get allChecked() {
    return this.products.every((item) => item.checked);
  }

  // Getter cho trạng thái "indeterminate"
  get indeterminate() {
    return this.products.some((item) => item.checked) && !this.allChecked;
  }

  // Thiết lập trạng thái cho tất cả checkbox con khi "Select All" thay đổi
  setAll(event: any) {
    const isChecked = event.target.checked;

    this.products.forEach((item) => (item.checked = isChecked));

    this.toggleActionVisibility();
  }

  // Cập nhật trạng thái khi một checkbox con thay đổi
  updateSingleCheckbox(index: number, id: string) {
    const item = this.products[index];
    item.checked = !item.checked;
    this.toggleActionVisibility();
  }
}

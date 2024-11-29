import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.scss'
})
export class UpdateCategoryComponent {
  categoryId :number =0 ;
  newCategory: Category = { id: 0, name: '' };

  constructor(private categoryService:CategoryService,
      private route:ActivatedRoute,
      private router:Router
  ) {
    
  }
  ngOnInit() {
    this.categoryId = parseInt(this.route.snapshot.paramMap.get('id')!,10);
    console.log('Product ID:', this.categoryId);
    if (this.categoryId) {
      this.loadCategory(this.categoryId);
    }
  }
  loadCategory(id: number): void {
    // Lấy thông tin sản phẩm từ ProductService bằng id và cập nhật newProduct
    const category = this.categoryService.getCategoryById(id);
    if (category) {
      this.newCategory = { ...category };
    }
  }

  updateCategory(): void {
    // Cập nhật sản phẩm
    this.categoryService.updateCategory(this.newCategory);
    this.newCategory = { id: 0, name: '' };
    this.router.navigate(["../.."],{relativeTo:this.route})
  }
  discardUpdateCategory(): void {
    this.router.navigate(["../.."],{relativeTo:this.route})
  }
}

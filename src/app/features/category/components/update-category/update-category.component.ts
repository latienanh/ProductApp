import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.scss'
})
export class UpdateCategoryComponent {
  @Input() Id:any; 
  @Output() toggleView = new EventEmitter<string>();

  newCategory: Category = { id: 0, name: '' };

  constructor(private categoryService:CategoryService) {
    
  }

  ngOnInit() {
    console.log("ham tao",this.Id)
    if (this.Id) {
      this.loadCategory(this.Id);
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
    this.toggleView.emit('category');
  }
}

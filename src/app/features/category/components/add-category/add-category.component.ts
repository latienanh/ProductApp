import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  newCategory: Category = { id: 0, name: '' };
  @Output() toggleView = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) {}

  addCategory(): void {
  
    this.newCategory.id = this.categoryService.getCategories().length + 1;
    this.categoryService.addCategory(this.newCategory);
    this.newCategory = { id: 0, name: '' };
    this.toggleView.emit('category')
  }
  showCategory():void{
    this.toggleView.emit('category')
  }
}

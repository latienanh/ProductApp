import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../Dto/Category';
import { CategoryService } from '../../service/category.service';

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
  }
  showCategory():void{
    this.toggleView.emit('category')
  }
}

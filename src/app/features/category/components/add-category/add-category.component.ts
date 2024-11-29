import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  newCategory: Category = { id: 0, name: '' };

  constructor(private categoryService: CategoryService,private router:Router,private route:ActivatedRoute) {}

  addCategory(): void {
  
    this.newCategory.id = this.categoryService.getCategories().length + 1;
    this.categoryService.addCategory(this.newCategory);
    this.newCategory = { id: 0, name: '' };
    this.router.navigate([".."],{relativeTo:this.route})

  }
  discardAddCategory():void{
    this.router.navigate([".."],{relativeTo:this.route})
  }
}

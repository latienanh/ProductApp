import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService:CategoryService ){
      
  }
  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
  }
  removeCategory(id:number){
    this.categoryService.deleteCategory(id);
    this.categories = this.categoryService.getCategories()
  }
}

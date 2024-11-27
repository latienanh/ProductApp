import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../Dto/Category';
import { CategoryService } from '../../service/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  @Output() toggleView = new EventEmitter<string>();
  categories: Category[] = [];
  constructor(private categoryService:CategoryService){
      
  }
  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
  }
  showAddCategory():void{
    this.toggleView.emit('add-category')
  }
}

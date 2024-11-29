import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService:CategoryService  ,  private router: Router,
    private route: ActivatedRoute){
      
  }
  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
  }
  showAddCategory():void{
    this.router.navigate(["add"],{relativeTo:this.route})
  }
  removeCategory(id:number){
    this.categoryService.deleteCategory(id);
    this.categories = this.categoryService.getCategories()
  }
  showUpdateCategory(id:number):void{
    this.router.navigate([`update`,id],{relativeTo:this.route})
  }
}

import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  private categories: Category[] = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  addCategory(category: Category): void {
    this.categories.push(category);
  }
  getCategoryById(id: number): Category | undefined {
    return this.categories.find(category => category.id === id);
  }
  updateCategory(updatedCategory: Category): void {
    const index = this.categories.findIndex(category => category.id === updatedCategory.id);
    if (index !== -1) {
      this.categories[index] = updatedCategory;
    }
  }

  deleteCategory(id: number): void {
    this.categories = this.categories.filter(category => category.id !== id);
  }
}

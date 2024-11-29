import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../../category/models/category';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  newProduct: Product = { id: 0, name: '', code: '', soldQuantity: 0, stockQuantity: 0, expirationDate: '', category: '' };
  categories : Category[] = [];
  constructor(private productService: ProductService,
    private categoryService:CategoryService,private router:Router,private route:ActivatedRoute) {
      this.categories = categoryService.getCategories();
    }

  addProduct(): void {
    this.newProduct.id = this.productService.getProducts().length + 1;
    this.productService.addProduct(this.newProduct);
    this.newProduct = { id: 0, name: '', code: '', soldQuantity: 0, stockQuantity: 0, expirationDate: '', category: '' };
    this.router.navigate([".."],{relativeTo:this.route})
  }
  discardAddCategory():void{
    this.router.navigate([".."],{relativeTo:this.route})
  }

}

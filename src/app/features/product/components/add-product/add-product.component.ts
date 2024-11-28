import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { Category } from '../../../category/models/category';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  
  @Output() toggleView = new EventEmitter<string>();
  newProduct: Product = { id: 0, name: '', code: '', soldQuantity: 0, stockQuantity: 0, expirationDate: '', category: '' };
  categories : Category[] = [];
  constructor(private productService: ProductService,
    private categoryService:CategoryService) {
      this.categories = categoryService.getCategories();
    }

  addProduct(): void {
    this.newProduct.id = this.productService.getProducts().length + 1;
    this.productService.addProduct(this.newProduct);
    this.newProduct = { id: 0, name: '', code: '', soldQuantity: 0, stockQuantity: 0, expirationDate: '', category: '' };
    this.toggleView.emit('product')
  }
  // showProduct():void{
  //   this.toggleView.emit('product')
  // }
}

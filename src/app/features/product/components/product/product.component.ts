import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../../category/services/category.service';
import { Category } from '../../../category/models/category';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  @Output() toggleView = new EventEmitter<string>();
  @Output() setSelectedProductId = new EventEmitter<number>();
  products: Product[] = [];
  categories: Category[] =[];
  selectedCategory: number | null = null;
  constructor(private productService:ProductService,private categoryService:CategoryService){
      
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.categories = this.categoryService.getCategories();
  }
  removeProduct(id:number){
    console.log("vao de xoa",id)
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts()
  }
  showAddProduct():void{
    this.toggleView.emit('add-product')
  }
  showUpdateProduct(id:number):void{
    console.log("vao update",id)
    this.setSelectedProductId.emit(id);
    this.toggleView.emit('update-product');
  }
  filterProduct(){
    console.log(this.selectedCategory)
  }
}
